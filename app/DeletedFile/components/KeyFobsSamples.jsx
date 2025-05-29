import React from 'react'
import Image from 'next/image';

const KeyFobsSamples = () => {
  return (


    <div className="flex flex-col justify-center items-center w-full md:w-[55%]">

        <div className="flex flex-col mx-5 my-4 pb-2 items-center bg-white rounded-lg shadow-md relative">
        <p className="fontTitle" style={{fontWeight:'700'}}>Keyfob Samples</p>
        <div className="flex flex-row flex-wrap justify-around items-center z-[1]">
                {/* <img className="w-[150px] h-[150px] overflow-hidden pb-3 rounded-lg samples-zoomable-imageLeft" src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673386/va1_pusird_vz1uhf.jpg" alt="" /> 
                <img className="w-[150px] h-[150px] overflow-hidden pb-3 rounded-lg samples-zoomable-imageRight" src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673386/va2_zzfmot_vauqrr.jpg" alt="" />

                <img className="w-[150px] h-[150px] overflow-hidden pb-3 rounded-lg samples-zoomable-imageLeft" src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673387/va5_zfmmwd_ud6nlp.jpg" alt="" /> 
                <img className="w-[150px] h-[150px] overflow-hidden pb-3 rounded-lg samples-zoomable-imageRight" src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673387/va3_fu52rf_okr3em.jpg" alt="" />

                <img className="w-[150px] h-[150px] overflow-hidden pb-3 rounded-lg samples-zoomable-imageLeft" src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673387/va6_sib7fy_payf7j.jpg" alt="" />                  
                <img className="w-[150px] h-[150px] overflow-hidden pb-3 rounded-lg samples-zoomable-imageRight" src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673386/va4_leajow_tgrmk6.jpg" alt="" /> */}
                       <Image
            // className="w-[150px] h-[150px] overflow-hidden pb-3 rounded-lg samples-zoomable-imageLeft"
            src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673386/va1_pusird_vz1uhf.jpg"
            alt=""
            width={200}
            height={200}
          />
          <Image
            className="w-[150px] h-[150px] overflow-hidden pb-3 rounded-lg samples-zoomable-imageRight"
            src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673386/va2_zzfmot_vauqrr.jpg"
            alt=""
            width={150}
            height={150}
          />
          <Image
            className="w-[150px] h-[150px] overflow-hidden pb-3 rounded-lg samples-zoomable-imageLeft"
            src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673387/va5_zfmmwd_ud6nlp.jpg"
            alt=""
            width={150}
            height={150}
          />
          <Image
            className="w-[150px] h-[150px] overflow-hidden pb-3 rounded-lg samples-zoomable-imageRight"
            src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673387/va3_fu52rf_okr3em.jpg"
            alt=""
            width={150}
            height={150}
          />
          <Image
            className="w-[150px] h-[150px] overflow-hidden pb-3 rounded-lg samples-zoomable-imageLeft"
            src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673387/va6_sib7fy_payf7j.jpg"
            alt=""
            width={150}
            height={150}
          />
          <Image
            className="w-[150px] h-[150px] overflow-hidden pb-3 rounded-lg samples-zoomable-imageRight"
            src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673386/va4_leajow_tgrmk6.jpg"
            alt=""
            width={150}
            height={150}
          />       
        </div>
        </div>
    </div>

  )
}

export default KeyFobsSamples