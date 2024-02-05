'use client'
import React, { useState } from 'react'
import CardsFree from '@/app/components/CardsFree'
import CardsForm from '@/app/components/CardsForm'


const FunnelCards = () => {
  // const [calculate, serCalculate] = useState(false)
  // const [estimate, setEstimate] = useState(0)

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">   
        
        <CardsFree/>
        <span className="w-full  h-1 block"></span>    
        
        {/* {calculate && <CardsForm/>} */}
   
          
      {/* <RequiredInformation/>        */}

    </div>
  )
}

export default FunnelCards