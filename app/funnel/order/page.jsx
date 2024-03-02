import Checkout from '@/app/components/Checkout'
import React from 'react'
import PixelPageView from '../../components/facebookPixels/PixelPageView.jsx';

const page = () => {
  return (
    <>
      <PixelPageView />
      <Checkout />
    </>
  )
}

export default page