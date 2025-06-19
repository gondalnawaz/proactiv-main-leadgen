"use client";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PixelPageView from "../../components/facebookPixels/PixelPageView.jsx";

// import CheckoutIntegrationSample from '@/app/components/CheckoutIntegrationSample'

const Payment = () => {
  const [address, setAddress] = useState("");
  const [{ deposit, depositValue, selectedPackage, fullname }, setInfo] =
    useState({
      deposit: "",
      depositValue: "",
      selectedPackage: "",
      fullname: "",
    });
    const [randomnumber] =useState(()=> Math.floor(Math.random() * 900) + 100);
  const [loading, setLoading] = useState(false);
  const [atmformData, setAtmFormData] = useState({ cardNumber: "" });
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolderName: "",
    month: "",
    year: "",
    cvc: "",
  });

  // const [softwaredata, setSoftwaredata] = useState('');
  const [cardsdata, setCardsdata] = useState("");
  const [depositPrice, setDepositPrice] = useState("");
  // const [keyfobdata, setKeyfobdata] = useState('');
  //  console.log(depositPrice);

  const searchParams = useSearchParams();
  //  const depositBoolean = searchParams.get('deposit');
  // const depositStatus = totaldeposit.split('deposit=')[1];
  const router = useRouter();

  useEffect(() => {
    // let storageCards = JSON.parse(localStorage.getItem("cardsdata"));
    let { depositPrice } = JSON.parse(localStorage.getItem("Deposit"));
    // setCardsdata(storageCards);
    setDepositPrice(depositPrice);
    console.log("env console", process.env.NEXT_PUBLIC_WORLDPAY_ONETIME_URL);
  }, []);

  // useEffect(() => {
  //   const userData =
  //     typeof window !== 'undefined' && localStorage.getItem('data')
  //       ? JSON.parse(localStorage.getItem('data'))
  //       : '';
  //   const fullname = userData ? userData.fullname : '';
  //   const address = userData ? userData.address : '';
  //   const selectedPackage = userData ? userData.packageselected : '';

  //   let storageSoft = JSON.parse(localStorage.getItem('software'));
  //   let storageCards = JSON.parse(localStorage.getItem('cardsdata'));
  //   let storageKeyfobs = JSON.parse(localStorage.getItem('keyfobs'));

  //   setSoftwaredata(storageSoft);
  //   setCardsdata(storageCards);
  //   setKeyfobdata(storageKeyfobs);

  //   // get data from local storage of deposit

  //   const deposit =
  //     typeof window !== 'undefined' ? localStorage.getItem('deposit') : null;

  //   // Check if the data exists before using it
  //   if (deposit !== null) {
  //     // Convert the retrieved data to the appropriate type if necessary
  //     const depositValue = parseFloat(deposit);
  //     localStorage.setItem('deposit', depositValue.toString());
  //     // Now you can use the depositValue in your component
  //     console.log('Deposit:', depositValue);
  //   } else {
  //     console.log('No deposit data found');
  //   }
  //   setInfo({
  //     deposit,
  //     depositValue,
  //     selectedPackage,
  //     fullname,
  //   });
  //   setaddress(address);
  // }, []);

  const handleAtmInputChange = (e) => {
    const inputValue = e.target.value;
    const formattedValue = inputValue
      .replace(/[^\d]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();

    setFormData({
      ...formData,
      cardNumber: inputValue.replace(/ /g, ""),
    });
    setAtmFormData({
      ...atmformData,
      cardNumber: formattedValue,
    });
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue;

    if (name === "cvc") {
      formattedValue = value.replace(/[^\d]/g, "");
      formattedValue = formattedValue.slice(0, 3);
    } else {
      formattedValue = value;
    }

    setFormData({
      ...formData,
      [name]: formattedValue,
    });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    try {
      // const userData =
      //   typeof window !== "undefined" && localStorage.getItem("data")
      //     ? JSON.parse(localStorage.getItem("data"))
      //     : "";

      // const dateSplitted = softwaredata.date.split("-");
      // const dateUtc = new Date(
      //   new Date(
      //     `${dateSplitted[2]}/${dateSplitted[1]}/${dateSplitted[0]}`
      //   ).toUTCString()
      // );
      const paymentResponse = await axios.post("/api/payment/card", {
        amountGBP: depositPrice,
        cardNumber: formData.cardNumber,
        month: formData.month,
        year: formData.year,
        cvc: formData.cvc,
        cardHolderName: formData.cardHolderName,
        address: address,
        // customer: userData,
        // keyfobs: keyfobdata,
        // software: {
        //   ...softwaredata,
        //   dateUtc: dateUtc,
        // },
        // cards: cardsdata.baseData,
      });
      if (paymentResponse.status != 200) {
        console.log("Response",paymentResponse);
        
        alert("Payment Error:", error.message);
        return;
      }

      // const cTotal =
      //   cardsdata.option == "full payment"
      //     ? cardsdata.totaldue.toFixed(2).replace(",", ".")
      //     : cardsdata.payment.toFixed(2).replace(",", ".");
      // const kfTotal = (keyfobdata.customers * keyfobdata.price * 0.5)
      //   .toFixed(2)
      //   .replace(",", ".");
      // const srTotal =
      //   keyfobdata.addrings == "No"
      //     ? "0.00"
      //     : (Math.ceil(keyfobdata.customers / 100) * (6 * 0.5))
      //         .toFixed(2)
      //         .replace(",", ".");
      // const dueAmount = parseFloat(cTotal);

      // try {
      //   await axios.post("/api/notify", {
      //     userData,
      //     softwareData: softwaredata,
      //     cardsData: cardsdata,
      //     keyFobData: keyfobdata,
      //     customers: localStorage.getItem("customers"),
      //     orderSummary: [
      //       `${cardsdata.needed + 100} Additional Cards ${
      //         cardsdata.option
      //       } = ${cTotal}`,
      //       `${keyfobdata.customers} Keyfobs = ${kfTotal}`,
      //       `${
      //         keyfobdata.addrings == "No" ? 0 : keyfobdata.customers
      //       } Split Rings = ${srTotal}`,
      //       `Total = ${(
      //         parseFloat(cTotal) +
      //         parseFloat(kfTotal) +
      //         parseFloat(srTotal)
      //       )
      //         .toFixed(2)
      //         .replace(",", ".")}`,
      //       `Deposity (today) = ${deposit}`,
      //       `Balance Due (before dispatch) = ${dueAmount}`,
      //     ],
      //     transactionReference: paymentResponse.data["transaction-reference"],
      //   });
      // } catch (error) {
      //   console.log(error);
      // }
      // try {
      //   await axios.post("/api/user-notify", {
      //     userData,
      //     softwareData: softwaredata,
      //     cardsData: cardsdata,
      //     keyFobData: keyfobdata,
      //     customers: localStorage.getItem("customers"),
      //     orderSummary: [
      //       `${cardsdata.needed + 100} Additional Cards ${
      //         cardsdata.option
      //       } = ${cTotal}`,
      //       `${keyfobdata.customers} Keyfobs = ${kfTotal}`,
      //       `${
      //         keyfobdata.addrings == "No" ? 0 : keyfobdata.customers
      //       } Split Rings = ${srTotal}`,
      //       `Total = ${(
      //         parseFloat(cTotal) +
      //         parseFloat(kfTotal) +
      //         parseFloat(srTotal)
      //       )
      //         .toFixed(2)
      //         .replace(",", ".")}`,
      //       `Deposity (today) = ${deposit}`,
      //       `Balance Due (before dispatch) = ${dueAmount}`,
      //     ],
      //     transactionReference: paymentResponse.data["transaction-reference"],
      //   });
      // } catch (error) {
      //   console.log(error);
      // }

      router.push(
        `/funnel/thanks?status=success&reference=${paymentResponse.data["transaction-reference"]}`
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.error)
        alert("Payment Error:" + error?.response?.data?.error);
      else {
        alert("Payment Error", error);
      }
      setLoading(false);
    }
  };

  const [editedAddress, setEditedAddress] = useState("");

  const handleEditAddress = () => {
    setEditingAddress(true);
  };

  const handleCancelEdit = () => {
    setEditingAddress(false);
    setEditedAddress(address); // Reset edited address to the original address
  };

  const handleSaveAddress = () => {
    // Save the edited address to local storage
    localStorage.setItem(
      "data",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("data")),
        address: editedAddress,
      })
    );
    setEditingAddress(false);
    setaddress(editedAddress);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
     localStorage.setItem(
      "address",
      JSON.stringify(address)
    );
  };

  const handelChangeDeposit = (e) => {
    const rawValue = e.target.value.replace("£", "").trim();

    // Allow user to clear input
    if (rawValue === "") {
      setDepositPrice("");
      return;
    }
    // Validate number > 0 and no negative sign
    const number = Number(rawValue);
    if (!rawValue.startsWith("-") && !isNaN(number) && number >= 0) {
      setDepositPrice(rawValue);
    }
  };

  // useEffect(() => {
  //   localStorage.setItem("Deposit", JSON.stringify({ depositPrice }));
  // }, [depositPrice]);

  // const amountGbpFromUrl = totaldeposit.split('?')[0];
  // const amountGBP = useMemo(() => {
  //   if (depositStatus !== 'true')
  //     return amountGbpFromUrl;

  //   const result = parseFloat(amountGbpFromUrl) - 51.5;
  //   return result >= 51.5 ?
  //     '51.5' :
  //     amountGbpFromUrl;
  // }, [amountGbpFromUrl]);

  return (
    <div className="bg-white h-[150vh] w-screen">
      <PixelPageView />
      {/* <CheckoutIntegrationSample /> */}
      <Image
        src="/Proactiv Marketing Logo.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
        style={{
          marginTop: "70px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
        }}
      />
      <div className="container mx-auto mt-10">
        <table className="w-[70%] mx-auto border-8">
          <tbody>
            <tr>
              <td className="py-2 px-4">
                <div className="font-bold">Order summary</div>
                <div className="flex space-x-4 mt-2">
                  <div className="flex space-x-4">
                    <h2>Reference:</h2>
                    <span>Order #{randomnumber}</span>
                  </div>
                  <div className="text-gray-700">{fullname}</div>
                </div>
                <div className="flex gap-56 mt-2">
                  <div>Description: Payment for ProactivMarketing order</div>
                  <div className="text-gray-700">{selectedPackage}</div>
                </div>
                <div className="flex gap-52 mt-2">
                  <div className="font-bold">Amount GBP: </div>
                  {/* <div className="text-gray-700">£{deposit}</div> depositStatus */}
                  <div className="text-gray-700">
                    <input
                      type="text"
                      name="deposit"
                      value={`£${depositPrice}`}
                      onChange={handelChangeDeposit}
                      className=" outline-none w-full"
                    />{" "}
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4">
                <div className="flex justify-between">
                  <div>
                    <div className="font-bold">Payment Details</div>
                    <div>*Include Fields</div>
                  </div>
                  <div className="mb-3 flex items-center">
                    <div className="px-2">
                      <img
                        src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                        className="h-8 ml-3"
                      />
                    </div>
                  </div>
                </div>
                <form className="pb-3 mx-auto grid mt-6 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="cardNumber"
                      className="mb-2 inline-block text-sm text-gray-800 sm:text-base font-bold"
                    >
                      Card Number*
                    </label>
                    <input
                      type="tel"
                      id="cardNumber"
                      name="cardNumber"
                      value={atmformData.cardNumber}
                      onChange={handleAtmInputChange}
                      maxLength="19"
                      autoComplete="cc-number"
                      placeholder="xxxx xxxx xxxx xxxx"
                      className="w-full px-3 py-2 bg-gray-50 text-gray-800 border rounded focus:ring focus:ring-indigo-300 outline-none transition duration-100"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cardHolderName"
                      className="mb-2 inline-block text-sm text-gray-800 sm:text-base font-bold"
                    >
                      Card Holder's name
                    </label>
                    <input
                      type="text"
                      name="cardHolderName"
                      value={formData.cardHolderName}
                      onChange={handleInputChange}
                      className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="month"
                      className="mb-2 inline-block text-sm text-gray-800 sm:text-base font-bold"
                    >
                      Card Expiry Month*
                    </label>
                    <br />
                    <div className="flex gap-2 ">
                      <input
                        type="text"
                        name="month"
                        maxLength={2}
                        value={formData.month}
                        onChange={handleInputChange}
                        className="w-12 rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                      />
                      <div className="text-xl mt-2">/</div>
                      <input
                        type="text"
                        name="year"
                        maxLength={2}
                        value={formData.year}
                        onChange={handleInputChange}
                        className="w-12 rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="cvc"
                      className="mb-2 inline-block text-sm text-gray-800 sm:text-base font-bold"
                    >
                      Security Code
                    </label>{" "}
                    <br />
                    <div className="flex gap-2 ">
                      <input
                        type="number"
                        name="cvc"
                        placeholder="CVV"
                        value={formData.cvc}
                        onChange={handleInputChange}
                        maxLength="3"
                        className="w-20 rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                      />
                      <div className="text-xl mt-2 bg-gray-500 w-12 h-5"></div>
                      <div className="text-xs mt-2">
                        3 digits on the back of the card
                        {/*                         
                        and 4 digits on the
                        front of the card */}
                      </div>
                    </div>
                  </div>
                  <div>
                     <label className="font-bold">Billing Address</label>
                    <input
                      type="text"
                      value={address}
                      onChange={handleAddressChange}
                      className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                    />
                  </div>
                   <div></div>
                    {/* <div className="mt-10 text-xs">
                      <span
                        onClick={handleCancelEdit}
                        className="cursor-pointer text-blue-500"
                      >
                        Cancel
                      </span>
                      <span
                        onClick={handleSaveAddress}
                        className="cursor-pointer ml-2 text-green-500 font-bold"
                      >
                        Save
                      </span>
                    </div> */}

                  {/* <div
                    onClick={handleEditAddress}
                    className="cursor-pointer text-end mt-3 text-xs text-blue-500"
                  >
                    Edit
                  </div> */}
                  <div className="flex justify-between ">
                    <button
                      className="cursor-pointer w-16 font-bold px-2 py-1 text-sm rounded bg-slate-400 border-1"
                      onClick={() => router.back()}
                      type="button"
                    >
                      {/* onClick={() => router.push(`/funnel/order?deposit=${depositStatus === 'true' ? 'true' : 'false'}`)}> */}
                      Cancel
                    </button>
                    <button
                      onClick={handleFormSubmit}
                      disabled={
                        loading ||
                        !atmformData.cardNumber ||
                        !formData.cardHolderName ||
                        !formData.month ||
                        !formData.year ||
                        !formData.cvc
                      }
                      type="submit"
                      className="cursor-pointer w-32 ml-auto font-bold px-2 py-1 text-sm rounded bg-slate-400 border-1"
                    >
                      {loading ? "Please wait ..." : "Make Payment"}
                    </button>
                  </div>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center mt-5 ">
          When you submit your transaction process by Worldpay, you confirm your
          acceptance of WorldPay privacy policy.
        </div>
        <div className="text-center mt-5 font-bold">
          @ 2013-2024 . All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Payment;
