'use client'
import { useState } from "react"
import { useRouter } from 'next/navigation';

const ClaimGiftForm = () => {
  const [data, setData] = useState({ fullname: '', businessname: '', email: '', number: '',reference: "", })

  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })

  }

  const handleClick = (e) => {
    e.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const numberRegex = /^0[127]\d{9}$/;

    if (
      data.fullname.length == 0 ||
      data.businessname.length == 0 ||
      data.email.length == 0 ||
      data.number.length == 0
    ) {
      alert('Complete all the fields')
    } else if (!emailRegex.test(data.email)) {
      alert('Invalid email');
    } else if (!numberRegex.test(data.number)) {
      alert('Invalid number')
    } else {
      localStorage.setItem('data', JSON.stringify(data));
      router.push('/funnel/questionaire');
    }
  }
  // const [resetLoading, setResetLoading] = useState(false);
  // const resetSpin = () => {
  //   setResetLoading(true)
  //   localStorage.setItem('click', JSON.stringify('no'));
  //   try {
  //     window.location.reload();
  //   } catch (e) {
  //     console.error(e)
  //   }
  // };
  return (
    <>
    <div className="flex justify-center items-center min-h-screen md:w-[55%]">
      <form
        id="formulario"
        className="flex flex-col px-8 py-8 my-2 bg-white rounded-lg shadow-md relative "
      >
        <p className="fontAlternative">
          {" "}
          <span
            className="fontTitle"
            style={{
              padding: "0",
              fontWeight: "bold",
              marginBottom: "10px",
              marginTop: "20px",
            }}
          >
            Calling All INDEPENDENT BUSINESS OWNERS
          </span>{" "}
        </p>
        <p className="font-bold text-[1.25rem] text-center">
          {" "}
          Dramatically Increase The Number Of New Clients
        </p>
        <p className="font-bold text-[1.25rem] text-center">
          {" "}
          You Attract (For FREE) Through
        </p>

        <p className="fontAlternative alternative-font-title-fix">
          {" "}
          <span
            className="fontTitle"
            style={{ padding: "0", fontWeight: "bold" }}
          >
            Word Of Mouth
          </span>
        </p>
        <p className="font-bold text-[1.25rem] text-center underline mb-3">
          Guaranteed
        </p>

        <input
          type="text"
          name="fullname"
          value={data.fullname}
          onChange={handleChange}
          placeholder="Full Name*"
          required
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput "
        />

        <input
          type="text"
          name="businessname"
          value={data.businessname}
          onChange={handleChange}
          placeholder="Business Name*"
          required
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />

        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Email*"
          required
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />

        <input
          type="tel"
          name="number"
          value={data.number}
          onChange={handleChange}
          placeholder="Contact Number*"
          required
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />

        <input
            type="text"
            name="reference"
            value={data.reference}
            onChange={handleChange}
            placeholder="Reference"
            className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
          />

        <button
          type="submit"
          className="px-4 py-2 buttonsMain"
          onClick={handleClick}
        >
          Click To Claim Your FREE Gift
        </button>
      </form>
    </div>
  </>
  )
}

export default ClaimGiftForm