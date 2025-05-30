"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import PriceCards from "./PriceCards";

const CardsForm = ({ estimate }) => {
  const [price, setPrice] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [selectedOption, setSelectedOption] = useState(true);
  const [artWork, setArtWork] = useState("");
  const [deliveryPrice, setDeliveryPrice] = useState("");
  const [addition, setAddition] = useState(estimate);
  const [paymentOption, setPaymentOption] = useState("51.50");
  const [cardsData, setCardsData] = useState({
    needed: addition,
  });

  console.log("Cards", cardsData);

  const hangelSelectedState = (e) => {
    console.log(selectedOption);
  };

  const router = useRouter();

  const handleCardChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setAddition("");
      return;
    }

    // Convert to number and validate
    const number = Number(value);
    if (!value.startsWith("-") && number > 0) {
      setAddition(value);
    }
  };

  const handlePriceChange = (e) => {
    const rawValue = e.target.value.replace("£", "").trim();
    if (rawValue === "") {
      setPrice("");
      return;
    }

    // Convert to number and validate
    const number = Number(rawValue);
    if (!rawValue.startsWith("-") && number > 0) {
      setPrice(rawValue);
    }
  };

  const handleArtWorkChange = (e) => {
    const rawValue = e.target.value.replace("£", "").trim();
    if (rawValue === "") {
      setArtWork("");
      return;
    }

    // Convert to number and validate
    const number = Number(rawValue);
    if (!rawValue.startsWith("-") && !isNaN(rawValue) && number > 0) {
      setArtWork(rawValue);
    }
  };

  const handleDeliveryChange = (e) => {
    const rawValue = e.target.value.replace("£", "").trim();
    if (rawValue === "") {
      setDeliveryPrice("");
      return;
    }

    // Convert to number and validate
    const number = Number(rawValue);
    if (!rawValue.startsWith("-") && !isNaN(rawValue) && number > 0) {
      setDeliveryPrice(rawValue);
    }
  };

  // useEffect(() => {
  //   setCardsData({
  //     needed: addition,
  //     totaldue: price * parseInt(addition) + 37.5 + 14,
  //     payment: parseFloat(paymentOption.replace("£", "")),
  //     option: selectedOption ? "full payment" : "deposit",
  //   });

  //   if (addition >= 1 && addition <= 499) {
  //     setPrice(0.53);
  //   } else if (addition >= 500 && addition <= 999) {
  //     setPrice(0.45);
  //   } else if (addition >= 1000 && addition <= 2499) {
  //     setPrice(0.4);
  //   } else if (addition >= 2500 && addition <= 4999) {
  //     setPrice(0.36);
  //   } else if (addition >= 5000 && addition <= 9999) {
  //     setPrice(0.32);
  //   } else if (addition >= 10000) {
  //     setPrice(0.3);
  //   }
  // }, [addition]);

  // useEffect(() => {
  //   setCardsData({
  //     needed: addition,
  //     totaldue: price * parseInt(addition) + 37.5 + 14,
  //     payment: parseFloat(paymentOption.replace("£", "")),
  //     option: selectedOption ? "full payment" : "deposit",
  //   });
  // }, [price]);

  const handelChangeTotalPrice = (e) => {
    const rawValue = e.target.value.replace("£", "").trim();
    if (rawValue === "") {
      setTotalPrice("");
      return;
    }

    // Convert to number and validate
    const number = Number(rawValue);
    if (!rawValue.startsWith("-") && !isNaN(rawValue) && number > 0) {
      setTotalPrice(rawValue);
    }
  };

  const handelChangePayment = (e) => {
    const rawValue = e.target.value.replace("£", "").trim();

    // Allow user to clear input
    if (rawValue === "") {
      setPaymentOption("");
      return;
    }

    // Validate number > 0 and no negative sign
    const number = Number(rawValue);
    if (!rawValue.startsWith("-") && !isNaN(number) && number >= 0) {
      setPaymentOption(rawValue);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    let deposit = parseFloat(paymentOption.replace("£", ""));
    let full = parseInt(totalPrice);

    // alert(`${deposit} ${ full} ${typeof deposit} ${typeof full}`)
    if (deposit > full) {
      alert("Deposit can be higher than the total." + deposit + " === " + full);
    } else if (deposit < 51.5 && selectedOption === false) {
      alert("The minimum deposit is £51.50");
    } else {
      localStorage.setItem(
        "cardsdata",
        JSON.stringify({
          ...cardsData,
          totalCardPrice: totalPrice,
          depositPrice: paymentOption,
          dueBalance: totalPrice - paymentOption,
          artworkOrDesignPrice: artWork,
          courierDeliveryPrice: deliveryPrice,
          paymentOption: selectedOption ? "full payment" : "deposit",
          minDeposit: 51.5,
        })
      );
      // router.push('/funnel/order');

      if (selectedOption) {
        router.push("/funnel/order");
      } else {
        router.push("/funnel/order");
      }
    }
  };

  const isValidForDeposit = () => {
    return (
      parseFloat(totalPrice) > 0 &&
      parseInt(addition) > 0 &&
      parseFloat(artWork) >= 0 &&
      parseFloat(deliveryPrice) >= 0 &&
      parseFloat(price) >= 0
    );
  };
  useEffect(() => {
    if (isValidForDeposit()) {
      setSelectedOption(true); // false = deposit, true = full payment
    }
  }, [totalPrice]);

  useEffect(() => {
    setCardsData({
      needed: addition,
    });
  }, [
    paymentOption,
    price,
    addition,
    artWork,
    deliveryPrice,
    selectedOption,
    totalPrice,
  ]);

  return (
    <div className="grid grid-cols-1 max-w-[1200px] space-y-5 h-screen py-10 px-4">
      <div className="max-w-full">
        <PriceCards />
      </div>
      <div className="max-w-full">
        <div
          id="calculosOne"
          className="flex flex-col  px-4 py-8 bg-white rounded-lg shadow-md relative"
        >
          <p
            className="fontTitle text-center"
            style={{
              fontWeight: "700",
              color: "#a52a2a",
              padding: "5px 0 20px 0",
            }}
          >
            Cards Order Detail
          </p>
          {/* <label htmlFor="Additionl number of cards" className="fontForm mb-1">
           Number of cards (adjust accordingly)
        </label>
        <input
          value={addition}
          onChange={handleChange}
          type="number"
          placeholder="Please input number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />  */}

          <label htmlFor="Total Number of Cards" className="fontForm mb-1">
            Number of cards needed
          </label>
          <input
            value={addition}
            type="number"
            onChange={handleCardChange}
            placeholder="Enter number of cards"
            className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <label htmlFor="Card price (GBP)" className="fontForm mb-1">
            Total card price
          </label>
          <input
            value={`£${price}`}
            onChange={handlePriceChange}
            type="text"
            placeholder="Please input number"
            className="w-full mb-4 py-2 pl-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <label htmlFor="Artwork/Design (GBP)" className="fontForm mb-1">
            Artwork/Design
          </label>
          <input
            value={`£${artWork}`}
            onChange={handleArtWorkChange}
            type="text"
            placeholder="Please input number"
            className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <label htmlFor="Courier Delivery (GBP)" className="fontForm mb-1">
            Courier delivery
          </label>
          <input
            value={`£${deliveryPrice}`}
            onChange={handleDeliveryChange}
            type="text"
            placeholder="Please input number"
            className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <label htmlFor="Total Price (GBP)" className="fontForm mb-1">
            Total price
          </label>
          <input
            value={`£${totalPrice}`}
            onChange={handelChangeTotalPrice}
            type="text"
            placeholder="Please input number"
            className="font-bold px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <label htmlFor="Select a Payment Option" className="fontForm mb-2">
            Select a payment option*
          </label>
          <div className="flex justify-evenly mb-3">
            <div className="flex justify-center items-center">
              <input
                className="mr-1"
                type="radio"
                name="full payment"
                checked={selectedOption}
                onChange={() => setSelectedOption(true)}
              />{" "}
              <p>Full Payment</p>
            </div>
            <div className="flex ">
              <input
                className="mr-1"
                type="radio"
                name="deposit"
                checked={!selectedOption}
                disabled={!isValidForDeposit()}
                onChange={() => setSelectedOption(false)}
              />

              <div className="flex flex-col justify-center items-center">
                <p>Deposit</p>
                <p className="mb-0 text-xs" style={{ textAlign: "center" }}>
                  (min £51.50)
                </p>
              </div>

              <button onClick={hangelSelectedState}></button>
            </div>
          </div>

          <input
            value={
              selectedOption
                ? `£${parseFloat(totalPrice || 0).toFixed(2)}`
                : `£${paymentOption}`
            }
            //value={ selectedOption ? (price * (parseInt(addition)) + 37.5 + 14) : paymentOption}
            type="text"
            onChange={handelChangePayment}
            className="font-bold px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          {selectedOption === false ? (
            <div className="flex flex-col justify-center items-center">
              <p className="mb-0 text-xs" style={{ textAlign: "center" }}>
                Balance Due £{totalPrice - paymentOption}
              </p>
            </div>
          ) : (
            <div></div>
          )}

          <button
            type="submit"
            className="px-4 py-2 buttonsMain mt-3"
            onClick={handleClick}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardsForm;
