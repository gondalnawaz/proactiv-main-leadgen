'use client'
import React from 'react'
import CardsFree from '@/app/components/CardsFree'
import PixelPageView from '../../components/facebookPixels/PixelPageView.jsx';

const FunnelCards = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <PixelPageView />
      <CardsFree />
      <span className="w-full  h-1 block"></span>
    </div>
  )
}
export default FunnelCards