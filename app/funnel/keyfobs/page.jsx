import React from 'react'
import KeyFobsVideo from '@/app/components/KeyFobsVideo'
import KeyFobsSamples from '@/app/components/KeyFobsSamples'
import KeyFobsTestimonials from '@/app/components/KeyFobsTestimonials'
import KeyfobsPrice from '@/app/components/KeyfobsPrice'
import PixelPageView from '../../components/facebookPixels/PixelPageView.jsx';

const FunnelKeyFob = () => {
  return (
    <>
      <PixelPageView />
      <KeyFobsVideo />
      <KeyFobsSamples />
      <KeyFobsTestimonials />
      <KeyfobsPrice />
    </>
  )
}

export default FunnelKeyFob