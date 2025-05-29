"use client";
import React from "react";
import CardsFree from "@/app/components/CardsFree";
import PixelPageView from "../../components/facebookPixels/PixelPageView.jsx";
import CardsForm from "@/app/components/CardsForm.jsx";

const FunnelCards = () => {
  return (
    <>
      <PixelPageView />
      <CardsForm />
      <span className="w-full  h-1 block"></span>
    </>
  );
};
export default FunnelCards;
