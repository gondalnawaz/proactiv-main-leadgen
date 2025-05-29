"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const KeyfobsPrice = () => {
  const [customers, setCustomers] = useState(250);
  const [price, setPrice] = useState(0.39);
  const [bagsRings, setBagsrings] = useState(0);
  const [optionsyes, setOptionsyes] = useState("Yes");
  const searchParams = useSearchParams();

  const router = useRouter();

  // useEffect(()=>{
  //     let averagecustomers = JSON.parse(localStorage.getItem('customers'));
  //     if(averagecustomers != ''){
  //         setCustomers( parseInt(averagecustomers))
  //     }
  // },[])

  const includeRing = (e) => {
    setOptionsyes(e.target.value);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (!value.startsWith("-")) {
      setCustomers(value);
    }
  };

  useEffect(() => {
    if (customers * 1 >= 1 && customers * 1 <= 499) {
      setPrice(0.39);
    } else if (customers * 1 >= 500 && customers * 1 <= 999) {
      setPrice(0.33);
    } else if (customers * 1 >= 1000 && customers * 1 <= 2499) {
      setPrice(0.3);
    } else if (customers * 1 >= 2500 && customers * 1 <= 4999) {
      setPrice(0.26);
    } else if (customers * 1 >= 5000 && customers * 1 <= 9999) {
      setPrice(0.24);
    } else if (customers * 1 >= 10000) {
      setPrice(0.22);
    }

    setBagsrings(Math.ceil(customers / 100));
  }, [customers]);

  const handleClick = (e) => {
    e.preventDefault();

    if (customers < 250) {
      alert("minimum 250 customers are required and 0 only keyfobs.");
    } else {
      localStorage.setItem(
        "keyfobs",
        JSON.stringify({
          customers: parseInt(customers),
          price: price,
          addrings: optionsyes,
          totalKeyfobsPrice: parseFloat(
            (price * (customers * 1)).toFixed(2).replace(",", ".")
          ),
          todayPrice: parseFloat(
            (price * (customers * 1) * 0.5).toFixed(2).replace(",", ".")
          ),
        })
      );

      // router.push('/funnel/order?deposit=true');
      const search = searchParams.get("deposit");

      // This will not be logged on the server when using static rendering
      // console.log( search)

      if (search === "true") {
        router.push("/funnel/order?deposit=true");
      } else {
        router.push("/funnel/order");
      }
    }
  };

  return (
    <div className="flex flex-col mx-5 my-4 py-5 items-center bg-white rounded-lg shadow-md relative h-full md:w-[52%]">
      <p
        className="fontTitle text-center"
        style={{ fontWeight: "700", color: "#a52a2a", padding: "5px 0 20px 0" }}
      >
        Keyfobs Prices
      </p>
      <table className="w-[90%] border rounded-lg">
        <thead>
          <tr className="border-b bg-[#7a94b3]">
            <th
              className="resize-text py-1 px-2 w-[37%] text-white"
              style={{ fontWeight: "700" }}
            >
              Quantities
            </th>
            <th
              className="resize-text py-1 px-2 w-[30%] text-white"
              style={{ fontWeight: "700" }}
            >
              Price per Card
            </th>
            <th
              className="resize-text py-1 px-2 w-[33%] text-white"
              style={{ fontWeight: "700" }}
            >
              Quantity Discount
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b bg-[#ffffff]">
            <td className="resize-text py-1 px-2">250-499</td>
            <td className="resize-text py-1 px-2">39p</td>
            <td className="resize-text py-1 px-2">0%</td>
          </tr>
          <tr className="border-b bg-[#96cfd1]">
            <td className="resize-text py-1 px-2">500–999</td>
            <td className="resize-text py-1 px-2">33p</td>
            <td className="resize-text py-1 px-2">15%</td>
          </tr>
          <tr className="border-b bg-[#ffffff]">
            <td className="resize-text py-1 px-2">1000-2499</td>
            <td className="resize-text py-1 px-2">30p</td>
            <td className="resize-text py-1 px-2">25%</td>
          </tr>
          <tr className="border-b bg-[#96cfd1]">
            <td className="resize-text py-1 px-2">2500-4999</td>
            <td className="resize-text py-1 px-2">26p</td>
            <td className="resize-text py-1 px-2">33%</td>
          </tr>
          <tr className="border-b bg-[#ffffff]">
            <td className="resize-text py-1 px-2">5000-9999</td>
            <td className="resize-text py-1 px-2">24p</td>
            <td className="resize-text py-1 px-2">40%</td>
          </tr>
          <tr className="border-b bg-[#96cfd1]">
            <td className="resize-text py-1 px-2">10000+</td>
            <td className="resize-text py-1 px-2">22p</td>
            <td className="resize-text py-1 px-2">45%</td>
          </tr>
        </tbody>
      </table>

      <div className="w-[90%] mt-4 flex flex-col justify-center items-center">
        {/* <p style={{color:'#4a6bb6' , padding: "0 0 5px 0" , textAlign:'center', lineHeight: '1', fontSize:'0.8rem'}}>Average no. of customers per month:</p> */}

        <label
          htmlFor="Average no. of customers per month"
          className="fontForm mb-1 w-full text-left"
        >
          Total number of customers{" "}
          <span style={{ fontSize: "10px" }}>(minimum 250 and 0 keyfobs)</span>
        </label>
        <input
          type="number"
          name="average"
          value={customers}
          required
          onChange={handleChange}
          placeholder="Input total number of customers"
          className="w-full px-2 py-2 mb-2 rounded-lg border border-gray-300 focusInput "
        />

        <label htmlFor="Total Price" className="fontForm mb-1 w-full text-left">
          Total Keyfob price
        </label>
        <input
          value={`£${(price * (customers * 1)).toFixed(2).replace(",", ".")}`}
          type="text"
          className="w-full px-2 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="text-red-700 text-[1.5rem]" style={{ fontWeight: "700" }}>
          50% DISCOUNT TODAY!
        </p>

        <label
          htmlFor="Todays price"
          className="fontForm mb-1 w-full text-left"
        >
          Today`s price
        </label>
        <input
          value={`£${(price * (customers * 1) * 0.5)
            .toFixed(2)
            .replace(",", ".")}`}
          type="text"
          className="font-bold text-[1.2rem] w-full px-2 pt-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <p
          className="fontSubTitle text-center"
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "#4a6bb6",
            lineHeight: "1.2",
            paddingBottom: "5px",
          }}
        >
          Split Rings <br /> Bag of 100 rings / £6
        </p>

        {/* <label htmlFor="Average no. of customers per month" className="fontForm mb-1 w-full text-left">
          Rings
        </label>      
        <input
            type="number"
            name="RINGS"
            value={rings*100}
            required
            onChange={handleChange}
            placeholder="Average no. of customers per month"
            className="w-full px-2 py-2 mb-2 rounded-lg border border-gray-300 focusInput "
        />
        <input
          value={`£${((6*rings)).toFixed(2).replace(',', '.')}`}
          type="text"
          className="w-full px-2 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        /> */}
        <p className="text-red-700 text-[1.5rem]" style={{ fontWeight: "700" }}>
          50% DISCOUNT TODAY!
        </p>
        {/* <img className='rounded-lg md:w-[50%]' src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673386/splitrings_oxa6ym_vqu95j.png" alt="ringbag" /> */}
        <Image
          className="rounded-lg md:w-[50%]"
          src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673386/splitrings_oxa6ym_vqu95j.png"
          alt="ringbag"
          width={300}
          height={300}
        />
        <label
          htmlFor="Todays price"
          className="fontForm w-full text-center mt-1"
        >
          Include {bagsRings} bags for £{bagsRings * 6}
        </label>
        <div className="flex justify-center items-center gap-4 fontGeneral py-2 border-2 mb-3 w-[60%] rounded-lg md:justify-around">
          <label className="text-[1.5rem] font-bold">
            <input
              type="radio"
              name="optionsyes"
              value="Yes"
              checked={optionsyes === "Yes" ? true : false}
              onChange={includeRing}
            />{" "}
            Yes
          </label>
          <label className="text-[1.5rem] font-bold">
            <input
              type="radio"
              name="optionsyes"
              value="No"
              checked={optionsyes === "No" ? true : false}
              onChange={includeRing}
            />{" "}
            No
          </label>
        </div>

        {/* <label htmlFor="Todays price" className="fontForm mb-1 w-full text-left">
          Today`s price
        </label>         
        <input 
          value={`£${((6*rings*0.5)).toFixed(2).replace(',', '.')}`}
          type="text" 
          className="font-bold text-[1.2rem] w-full px-2 pt-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <label htmlFor="Todays price" className="fontForm mb-1 w-full text-left">
          Total:
        </label>         
        <input 
          value={`£${( optionsyes === 'Yes' ? (6*rings*0.5) + ((price*(customers*1))*0.5) : ((price*(customers*1))*0.5) ).toFixed(2).replace(',', '.')}`}
          type="text" 
          className="font-bold text-[1.5rem] w-full px-2 pt-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />         */}

        <button
          type="submit"
          className="px-4 py-2 buttonsMain mt-3"
          onClick={handleClick}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default KeyfobsPrice;
