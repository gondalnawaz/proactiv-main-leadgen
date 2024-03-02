"use client"
import { useSearchParams } from "next/navigation";
import React from "react";

import PixelPageView from '../../components/facebookPixels/PixelPageView.jsx';
import style from './page.module.css';

const Page = () => {
  const searchParams = useSearchParams();
  const paymentStatus = searchParams.get("status");
  const reference = searchParams.get("reference");

  return (
    <div className={`${style['root']} flex flex-col justify-center items-center min-h-screen`}>
      <PixelPageView />
      <div className="flex flex-col mx-5 my-4 pb-2 items-center bg-white rounded-lg shadow-md relative pt-2 pl-3 pr-3">
        <div className={`${style['content']} flex items-center`}>
          <div className={`${style['image-wrapper']} pr-4`}>
            <img className={style['img']} alt="Cartoon Character" loading="lazy" width="700" height="700" decoding="async" dataNimg="1" src='/thank.png' style={{ color: 'transparent' }} />
          </div>
          <div className={`${style['info-wrapper']} pl-4`}>
            {paymentStatus == "success" ? <p className="mb-4 text-green-800 text-center">Payment Received</p> : ""}
            {reference ? <p className="font-bold mb-4 text-green-800 text-center">Reference: {reference}</p> : ""}
            <p
              className={style['fontTitle']}
              style={{ fontWeight: "600", textAlign: "left" }}>
              Thank You For Visiting Us. Our Business Support Team Will Contact You Within 24 Hours.
            </p>
            <p className={style['subtitle']} style={{ color: "blue" }}>
              Proactiv Marketing Ltd. <br />
              admin@proactivmarketing.co.uk <br />
              0800 6124438
            </p>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col mx-5 my-4 pb-2 items-center bg-white rounded-lg shadow-md relative pt-2">
        {paymentStatus == "success" ? <p className="text-green-800">Payment Received</p> : ""}
        <p
          className="fontTitle"
          style={{ fontWeight: "700", textAlign: "center" }}
        >
          Thank you for your order. We will contact you shortly to arrange
          everything with you.
        </p>

        <p className="fontSubTitle" style={{ color: "blue" }}>
          Proactiv Marketing Ltd. <br />
          admin@proactivmarketing.co.uk <br />
          0800 6124438
        </p>
      </div> */}
    </div>
  );
};

export default Page;
