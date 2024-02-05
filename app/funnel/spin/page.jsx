'use client'
import React, { useState } from 'react'


import Celebration from '@/app/components/Celebration'
import { Spinning } from '@/app/components/Spinning/Spinning'



const PageSpinning = () => {
  const [congrats, setCongrats] = useState(true)
  const [result , setResult] = useState('')

  return (

    congrats ?

    <Spinning setCongrats={setCongrats} setResult={setResult}/>
    
    :

    <Celebration result={result}/>

  )
}

export default PageSpinning
