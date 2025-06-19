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
    await sql.connect(process.env.NEXT_PUBLIC_WORLDPAY_ONETIME_URL);
    try {

      const orderId = uuidv4();
      const paymentResponse = await paymentAsync(reqJson, orderId);
      
      if (!paymentResponse) {
        return NextResponse.json({ error: 'Payment Error' }, { status: 500 });
      }
      const { transactionReference, extraInfo } = paymentResponse;

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
      process.env.NEXT_PUBLIC_WORLDPAY_HOSTED_PAGES,
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
}
