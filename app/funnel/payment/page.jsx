"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams,useRouter } from "next/navigation";

const Payment = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paymentStatus = searchParams.get("status");
  const [softwaredata, setSoftwaredata] = useState("");
  const [cardsdata, setCardsdata] = useState("");
  const [keyfobdata, setKeyfobdata] = useState("");
  const [cTotal, setCtotal] = useState("");
  const [kfTotal, setKftotal] = useState("");
  const [srTotal, setSrtotal] = useState("");
  const [deposit, setDeposit] = useState(
    parseFloat(cTotal) + parseFloat(kfTotal) + parseFloat(srTotal)
  );
  const [transactionReference, setTransactionReference] = useState();

  const dueAmount =
    parseFloat(cTotal) + parseFloat(kfTotal) + parseFloat(srTotal) - deposit < 0
      ? 0
      : (
          parseFloat(cTotal) +
          parseFloat(kfTotal) +
          parseFloat(srTotal) -
          deposit
        ).toFixed(2);

  useEffect(() => {
    let storageSoft = JSON.parse(localStorage.getItem("software"));
    let storageCards = JSON.parse(localStorage.getItem("cardsdata"));
    let storageKeyfobs = JSON.parse(localStorage.getItem("keyfobs"));
    const transactionReference = JSON.parse(
      localStorage.getItem("transactionReference")
    );

    setSoftwaredata(storageSoft);
    setCardsdata(storageCards);
    setKeyfobdata(storageKeyfobs);
    setTransactionReference(transactionReference);
  }, []);

  useEffect(() => {
    if (cardsdata != "") {
      if (cardsdata?.option == "full payment") {
        setCtotal(cardsdata?.totaldue.toFixed(2).replace(",", "."));
      } else {
        setCtotal(cardsdata?.payment.toFixed(2).replace(",", "."));
      }
    }
  }, [cardsdata]);

  useEffect(() => {
    if (keyfobdata != "") {
      setKftotal(
        (keyfobdata?.customers * keyfobdata?.price * 0.5)
          .toFixed(2)
          .replace(",", ".")
      );

      if (keyfobdata?.addrings == "No") {
        setSrtotal("0.00");
      } else {
        setSrtotal(
          (Math.ceil(keyfobdata?.customers / 100) * (6 * 0.5))
            .toFixed(2)
            .replace(",", ".")
        );
      }
    }
  }, [keyfobdata]);

  useEffect(() => {
    setDeposit(parseFloat(cTotal) + parseFloat(kfTotal) + parseFloat(srTotal));
  }, [cTotal, kfTotal, srTotal]);

  const handleDeposit = (e) => {
    setDeposit(e.target.value);
  };

  return (
    <div className="flex flex-col w-[95%] my-4 py-5 items-center bg-white rounded-lg shadow-md relative h-full md:w-[52%]">
      <p
        className="fontTitle text-center"
        style={{ fontWeight: "700", color: "#4a6bb6", padding: "5px 0 20px 0" }}
      >
        Payment Status:{" "}
        <span className="">{paymentStatus ?? "Not Available"}</span>
      </p>
      <p
        className="fontSubTitle text-center"
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          color: "#4a6bb6",
          lineHeight: "1.2",
          paddingBottom: "0.5rem",
        }}
      >
        Order Summary
      </p>
      <p>Transaction Reference: {transactionReference}</p>
      <table className="w-[95%] border rounded-lg">
        <thead>
          <tr className="border-b bg-[#7a94b3]">
            <th
              className="resize-text py-1 px-2 w-[75%] text-white"
              style={{ fontWeight: "700" }}
            >
              Description
            </th>
            <th
              className="resize-text py-1 px-2 w-[25%] text-white"
              style={{ fontWeight: "700" }}
            >
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b bg-[#ffffff]">
            <td className="resize-text py-1 px-2">Referral Marketing Cards</td>
            <td className="resize-text py-1 px-2">FREE</td>
          </tr>
          <tr className="border-b bg-[#96cfd1]">
            <td className="resize-text py-1 px-2">
              {cardsdata?.needed + 100} Additional Cards <br /> ({" "}
              {cardsdata?.option} ) <br />
            </td>
            <td className="resize-text py-1 px-2">&#163; {cTotal} </td>
          </tr>
          <tr className="border-b bg-[#ffffff]">
            <td className="resize-text py-1 px-2">
              {keyfobdata?.customers} Keyfobs
            </td>
            <td className="resize-text py-1 px-2">&#163; {kfTotal}</td>
          </tr>
          <tr className="border-b bg-[#96cfd1]">
            <td className="resize-text py-1 px-2">
              {keyfobdata?.addrings == "No" ? 0 : keyfobdata?.customers} Split
              Rings
            </td>
            <td className="resize-text py-1 px-2">&#163; {srTotal} </td>
          </tr>
        </tbody>
      </table>

      <div className="w-[95%] flex items-center pt-3">
        <p
          className="fontTitle  w-[75%]"
          style={{
            fontWeight: "700",
            color: "black",
            margin: "3px 0 4px 0",
            fontSize: "1rem",
            padding: "0 0 0 0",
            textAlign: "end",
          }}
        >
          Total:
        </p>
        <p
          className="fontTitle text-center w-[25%]"
          style={{
            fontWeight: "700",
            color: "black",
            margin: "3px 0 4px 0",
            fontSize: "1rem",
            padding: "0 0 0 0",
          }}
        >
          &#163;
          {(parseFloat(cTotal) + parseFloat(kfTotal) + parseFloat(srTotal))
            .toFixed(2)
            .replace(",", ".")}
        </p>
      </div>

      <div className="w-[95%] flex items-center pt-3">
        <p
          className="fontTitle w-[75%]"
          style={{
            fontWeight: "700",
            color: "black",
            margin: "3px 0 4px 0",
            fontSize: "0.8rem",
            padding: " 0 5px 0 0",
            textAlign: "end",
          }}
        >
          Deposited:
        </p>
        <div className="flex font-bold w-[25%] h-fit px-1 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <div className="w-[100%] flex overflow-hidden">
            £
            <input
              type="text"
              name="deposit"
              defaultValue={`${deposit}`}
              onChange={handleDeposit}
              className=" outline-none max-w-[60px]"
              readOnly
            />
          </div>
        </div>
      </div>

      <div className="w-[95%] flex items-center pt-3">
        <p
          className="fontTitle w-[75%]"
          style={{
            fontWeight: "700",
            color: "black",
            margin: "3px 0 4px 0",
            fontSize: "0.8rem",
            padding: " 0 5px 0 0",
            textAlign: "end",
          }}
        >
          Balance Due:
        </p>
        <input
          type="text"
          defaultValue={`£${dueAmount}`}
          readOnly
          className="font-bold w-[25%] h-fit px-1 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 buttonsMain mt-3"
        onClick={() => {
          router.push("/funnel/thanks");
        }}
      >
        Continue
      </button>
    </div>
  );
};

export default Payment;
