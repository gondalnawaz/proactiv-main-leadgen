import React from 'react'
import ReferalMktText from '@/app/components/ReferalMktText'
import ReferalMktDiagram from '@/app/components/ReferalMktDiagram'
import Faqs from '@/app/components/Faqs'
import CardSamples from '@/app/components/CardSamples'
import CardsTestimonials from '@/app/components/CardsTestimonials'
import SoftwareForYou from '@/app/components/SoftwareForYou'
import ArtworkDelivery from '@/app/components/ArtworkDelivery.jsx'


const FunnelReferal = () => {
  return (
    <>
    
      <ReferalMktText />
      {/* <span className="w-full h-[1.25rem] block"></span> */}

      <ReferalMktDiagram />
      {/* <span className="w-full h-[1.25rem] block"></span> */}

      <Faqs/>
      {/* <span className="w-full h-[1.25rem] block"></span> */}

      <CardSamples/>
      {/* <span className="w-full h-[1.25rem] block"></span>  */}

      <CardsTestimonials/>
      {/* <span className="w-full h-[1.25rem] block"></span>  */}

      <SoftwareForYou/>
      {/* <span className="w-full h-[1.25rem] block"></span>      */}

      <ArtworkDelivery/>
      {/* <span className="w-full h-[1.25rem] block"></span>    */}

    </>

  )
}

export default FunnelReferal