"use client";
import React, { useEffect, useState, useRef } from "react";
import ReferalMktText from '@/app/components/ReferalMktText'
import ReferalMktDiagram from '@/app/components/ReferalMktDiagram'
import Faqs from '@/app/components/Faqs'
import CardSamples from '@/app/components/CardSamples'
import CardsTestimonials from '@/app/components/CardsTestimonials'
import SoftwareForYou from '@/app/components/SoftwareForYou'
import ArtworkDelivery from '@/app/components/ArtworkDelivery.jsx'
import PixelPageView from '../../components/facebookPixels/PixelPageView.jsx';


const FunnelReferal = () => {

  useEffect(() => {
    const videos = document.querySelectorAll('video');

    const pauseAll = (elem) => {
        videos.forEach(video => {
            if (video !== elem && video.played.length > 0 && !video.paused) {
                video.pause();
            }
        });
    };

    videos.forEach(video => {
        video.addEventListener('play', () => {
            pauseAll(video);
        }, true);
    });

    return () => {
        videos.forEach(video => {
            video.removeEventListener('play', () => {
                pauseAll(video);
            }, true);
        });
    };
}, []);

  return (
    <>
 
      <PixelPageView />
      <ReferalMktText />
      {/* <span className="w-full h-[1.25rem] block"></span> */}

      <ReferalMktDiagram />
      {/* <span className="w-full h-[1.25rem] block"></span> */}

      <Faqs />
      {/* <span className="w-full h-[1.25rem] block"></span> */}

      <CardSamples />
      {/* <span className="w-full h-[1.25rem] block"></span>  */}

      <CardsTestimonials />
      {/* <span className="w-full h-[1.25rem] block"></span>  */}

      <SoftwareForYou />
      {/* <span className="w-full h-[1.25rem] block"></span>      */}

      <ArtworkDelivery />
      {/* <span className="w-full h-[1.25rem] block"></span>    */}

    </>

  )
}

export default FunnelReferal