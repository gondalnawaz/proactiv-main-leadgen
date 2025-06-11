'use client'
import React, { useState } from 'react'
import Celebration from '@/app/components/Celebration'
import { Spinning } from '@/app/components/Spinning/Spinning'
import PixelPageView from '../../components/facebookPixels/PixelPageView.jsx';

const PageSpinning = () => {
  const [congrats, setCongrats] = useState(true)
  const [isReset, setIsReset] = useState(false)
  const [result, setResult] = useState('')

  return (<>
    <PixelPageView />
    {congrats ?
      <Spinning setCongrats={setCongrats} setResult={setResult} setIsReset={setIsReset} />
      :
      isReset ?
        <Spinning setCongrats={setCongrats} setResult={setResult} setIsReset={setIsReset} /> :
        <Celebration result={result} />
    }
  </>)
}

export default PageSpinning
