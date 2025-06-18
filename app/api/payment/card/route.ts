import axios from "axios";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

const customerInsertQuery = `INSERT INTO Customer (Id, FullName, Email, ContactNumber, BusinessName, Industry, Website, PostalAddress, CreateDateUTC) values (@id, @fullName, @email, @contactNumber, @businessName, @industry, @website, @postal, @createDate)`;
const orderInsertQuery = `INSERT INTO [Order] (Id, Title, Days, ExpireDateUTC, Valued, CreateDateUTC, CustomerId, Funnel, Package, Period) values (@id, @description, @days, @date, @valued, @createDate, @customerId, @funnel, @package, @period)`;
const keyfobsInsertQuery = `INSERT INTO [Keyfobs] (Id, OrderId, TotalCustomers, TotalKeyfobsPrice, TodayPrice, IncludeBags) values (@id, @orderId, @totalCustomers, @totalKeyfobsPrice, @todayPrice, @includeBags)`;
const marketingCardsInsertQuery = `INSERT INTO [MarketingCards] (Id, OrderId, AverageCustomers, Cards, Months, FreeCards, AdditionalCards, NeededCards, TotalCardPrice, ArtworkOrDesignPrice, CourierDeliveryPrice, TotalPrice, PaymentOption, MinDeposit, PercentageCustomersGiveCards) values (@id, @orderId, @averageCustomers, @cards, @months, @freeCards, @additionalCards, @neededCards, @totalCardPrice, @artworkOrDesignPrice, @courierDeliveryPrice, @totalPrice, @paymentOption, @minDeposit, @percentageCustomersGiveCards)`;
const orderPaymentInsertQuery = `INSERT INTO [OrderPayment] (Id, OrderId, TransactionReference, TotalAmount, CreateDateUTC, CardHolderName, CardNumber, CardMonth, CardYear, CardCVC, Currency, BillingAddress, ExtraData) values (@id, @orderId, @transactionReference, @totalAmount, @createDateUTC, @cardHolderName, @cardNumber, @cardMonth, @cardYear, @cardCVC, @currency, @billingAddress, @extraData)`;
const customerSelectIdByEmailOrNumber = 'SELECT Id FROM Customer WHERE Email = @email OR ContactNumber = @contactNumber'

const axiosInstance = axios.create({
  auth: {
    username: process.env.NEXT_PUBLIC_WORLDPAY_USERNAME,
    password: process.env.NEXT_PUBLIC_WORLDPAY_PASSWORD,
  },
  headers: {
    "Accept": "application/vnd.worldpay.payments-v6+json",
    "Content-Type": "application/vnd.worldpay.payments-v6+json",
  },
  timeout: 2 * 60 * 1_000,
  // withCredentials: true
});

// const connection = process.env.NEXT_PUBLIC_DB_CONNECTION.replace(/(\(dollar\))/g, '$');

export async function POST(req: Request) {
  const sql = require('mssql');
  let errorMessage = '';
  try {

    const reqJson = await req.json();
    await sql.connect(process.env.NEXT_PUBLIC_DB_CONNECTION);
    try {

      const { amountGBP, cardNumber, month, year, cvc, cardHolderName, address } = reqJson;

      // let customerId = await getUserAsync(customer.email, customer.number);
      // if (!customerId)
      //   customerId = await insertUserAsync(customer);

      const orderId = uuidv4();
      const paymentResponse = await paymentAsync(reqJson, orderId);
      
      if (!paymentResponse) {
        return NextResponse.json({ error: 'Payment Error' }, { status: 500 });
      }
      const { transactionReference, extraInfo } = paymentResponse;

      // await insertOrderAsync(orderId, customerId, customer, software);
      // await insertKeyfobsAsync(orderId, keyfobs);
      // await insertMarketingCardsAsync(orderId, cards);

      // await insertOrderPaymentAsync(orderId, {
      //   transactionReference,
      //   totalAmount: parseFloat(`${reqJson.amountGBP}`),
      //   cardHolderName: reqJson.cardHolderName,
      //   cardNumber: reqJson.cardNumber,
      //   cardMonth: reqJson.month,
      //   cardYear: reqJson.year,
      //   cardCVC: reqJson.cvc,
      //   currency: "GBP",
      //   billingAddress: address ?? '-',
      //   extraData: JSON.stringify(extraInfo)
      // });

      return NextResponse.json(
        { 'transaction-reference': orderId },
        { status: 200 }
      );
    } catch (error) {
      console.log('error', error);

      const hasPaymentError = Array.isArray(error?.response?.data?.validationErrors);
      if (hasPaymentError) {
        const validationErrors = error.response.data.validationErrors;
        for (let index = 0; index < validationErrors.length; index++) {
          const element = validationErrors[index];
          errorMessage += element?.message ? element?.message + ', ' : '';
        }
      }
    }
    await sql.close();

  } catch (error) {
    console.log('error', error);
  }
  return NextResponse.json({ error: errorMessage || 'Internal Error' }, { status: 500 });


  async function paymentAsync( params: any, orderId) {
    const { cardHolderName, cardNumber, month, year, cvc, amountGBP, address } = params;

    const convertedMonth = parseInt(month);
    const convertedYear = parseInt(`${year}`.length === 4 ? year : `20${year}`);
    const transactionReference = orderId;

    const paymentData = {
      transactionReference: transactionReference,
      merchant: { entity: process.env.NEXT_PUBLIC_WORLDPAY_MERCHANT_ID },
      instruction: {
        narrative: {
          line1: "Payment For Funnel"
        },
        value: { currency: "GBP", amount: parseFloat(`${amountGBP}`) * 100 },
        paymentInstrument: {
          type: "card/plain",
          cardHolderName,
          cardNumber,
          cardExpiryDate: { month: convertedMonth, year: convertedYear },
          cvc,
          billingAddress: { address1: address ?? '-', postalCode: '-', city: '-', countryCode: 'GB' },
        },
      },
    };

    const response = await axiosInstance.post(
      process.env.NEXT_PUBLIC_WORLDPAY_ONETIME_URL,
      paymentData
    );
    const isFailed = !response.data?._links || response?.data?.outcome !== 'authorized' || !response?.data?.issuer?.authorizationCode;
    if (isFailed) {
      throw {
        response: {
          data: {
            validationErrors: [
              {
                message: response.data?.description || "Payment Error"
              }
            ]
          }
        }
      };
    }
    const hasRistFactors = (
      Array.isArray(response.data.riskFactors) &&
      response.data.riskFactors.some(a => (a.type === 'cvc' && a.risk == 'not_matched') || a.risk == "verificationFailed")
    );
    if (hasRistFactors) {
      throw {
        response: {
          data: {
            validationErrors: [
              {
                message: "Payment Error"
              }
            ]
          }
        }
      };
    }

    
    const settleUrl = response.data._links['payments:settle']?.href;
    if (settleUrl) {
      const settleResponse = await axiosInstance.post(settleUrl);
      if (settleResponse.data) {
        return {
          transactionReference,
          extraInfo: {
            payment: response.data,
            settle: settleResponse.data,
            wpCorrelationId: response.headers["wp-correlationid"],
          }
        };
      }
    }
  }

  async function getUserAsync(email: string, contactNumber: string) {
    const request = new sql.Request();
    request.input('email', sql.VarChar, email);
    request.input('contactNumber', sql.VarChar, contactNumber);
    const result = await request.query(customerSelectIdByEmailOrNumber);
    return result.recordset.length > 0 ? result.recordset[0].Id : undefined;
  }

  async function insertUserAsync(customer: any) {
    const {
      fullname, businessname, email, number, industry, web, address
    } = customer;
    const request = new sql.Request();
    const id = uuidv4();
    request.input('id', sql.UniqueIdentifier, id);
    request.input('fullName', sql.NVarChar, fullname);
    request.input('businessName', sql.NVarChar, businessname);
    request.input('email', sql.VarChar, email.toLowerCase());
    request.input('contactNumber', sql.VarChar, number.toLowerCase());
    request.input('industry', sql.NVarChar, industry);
    request.input('website', sql.VarChar, web);
    request.input('postal', sql.NVarChar, address);
    request.input('createDate', sql.DateTime2, new Date(new Date().toUTCString()));
    await request.query(customerInsertQuery)
    return id;
  }

  async function insertOrderAsync(id: string, customerId: any, customer: any, software: any) {
    const {
      description, days, valued, dateUtc
    } = software;

    const request = new sql.Request();
    request.input('id', sql.UniqueIdentifier, id);
    request.input('customerId', sql.UniqueIdentifier, customerId);
    request.input('description', sql.NVarChar, description);
    request.input('days', sql.Int, days);
    request.input('valued', sql.Decimal(18, 2), valued);
    request.input('date', sql.DateTime2, new Date(dateUtc));
    request.input('funnel', sql.TinyInt, 1);
    request.input('package', sql.TinyInt, getSelectedPackageValue());
    request.input('period', sql.TinyInt, getSelectedPeriodValue());
    request.input('createDate', sql.DateTime2, new Date(new Date().toUTCString()));
    await request.query(orderInsertQuery);
    return id;

    function getSelectedPackageValue() {
      switch (customer.packageselected) {
        case 'Gold': return 2;
        case 'Diamond': return 3;
        default: return 1;
      }
    }

    function getSelectedPeriodValue() {
      switch (customer.periodselested) {
        case 'Quarterly': return 2;
        case 'Annually': return 3;
        default: return 1;
      }
    }
  }

  async function insertKeyfobsAsync(orderId: any, keyfobs: any) {
    const {
      addrings, customers, price, totalKeyfobsPrice, todayPrice
    } = keyfobs;

    const request = new sql.Request();
    const id = uuidv4();
    request.input('id', sql.UniqueIdentifier, id);
    request.input('orderId', sql.UniqueIdentifier, orderId);
    request.input('totalCustomers', sql.Int, customers);
    request.input('totalKeyfobsPrice', sql.Decimal(18, 2), totalKeyfobsPrice);
    request.input('todayPrice', sql.Decimal(18, 2), todayPrice);
    request.input('includeBags', sql.Bit, addrings === "Yes" ? 1 : 0);
    await request.query(keyfobsInsertQuery);
    return id;
  }

  async function insertOrderPaymentAsync(orderId: any, data: any) {
    const {
      transactionReference, totalAmount, cardHolderName, cardNumber, cardMonth, cardYear, cardCVC, currency, billingAddress, extraData
    } = data;

    const request = new sql.Request();
    const id = uuidv4();
    request.input('id', sql.UniqueIdentifier, id);
    request.input('orderId', sql.UniqueIdentifier, orderId);
    request.input('transactionReference', sql.NVarChar(50), transactionReference);
    request.input('totalAmount', sql.Decimal(18, 2), totalAmount);
    request.input('createDateUTC', sql.DateTime2, new Date(new Date().toUTCString()));
    request.input('cardHolderName', sql.NVarChar(50), cardHolderName);
    request.input('cardNumber', sql.VarChar(20), cardNumber);
    request.input('cardMonth', sql.Int, cardMonth);
    request.input('cardYear', sql.Int, cardYear);
    request.input('cardCVC', sql.VarChar(10), cardCVC);
    request.input('currency', sql.VarChar(4), currency);
    request.input('billingAddress', sql.NVarChar(250), billingAddress);
    request.input('extraData', sql.VarChar(sql.MAX), extraData);
    await request.query(orderPaymentInsertQuery);
    return id;
  }

  async function insertMarketingCardsAsync(orderId: any, marketingCards: any) {
    const {
      averageCustomers,
      cards,
      months,
      freeCards,
      additionalCards,
      neededCards,
      totalCardPrice,
      artworkOrDesignPrice,
      courierDeliveryPrice,
      totalCard,
      paymentOption,
      minDeposit,
      percentageCustomersGiveCards,
    } = marketingCards;

    const request = new sql.Request();
    const id = uuidv4();
    request.input('id', sql.UniqueIdentifier, id);
    request.input('orderId', sql.UniqueIdentifier, orderId);
    request.input('averageCustomers', sql.Int, averageCustomers);
    request.input('cards', sql.Int, cards);
    request.input('months', sql.Int, months);
    request.input('freeCards', sql.Int, freeCards);
    request.input('additionalCards', sql.Int, additionalCards);
    request.input('neededCards', sql.Int, neededCards);
    request.input('totalCardPrice', sql.Decimal(18, 2), totalCardPrice);
    request.input('artworkOrDesignPrice', sql.Decimal(18, 2), artworkOrDesignPrice);
    request.input('courierDeliveryPrice', sql.Decimal(18, 2), courierDeliveryPrice);
    request.input('totalPrice', sql.Decimal(18, 2), totalCard);
    request.input('paymentOption', sql.TinyInt, paymentOption === 'full payment' ? 1 : 2);
    request.input('minDeposit', sql.Decimal(18, 2), minDeposit);
    request.input('percentageCustomersGiveCards', sql.Int, percentageCustomersGiveCards);
    await request.query(marketingCardsInsertQuery);
    return id;
  }
}
