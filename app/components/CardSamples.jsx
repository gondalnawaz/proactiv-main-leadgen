import Image from 'next/image';

const CardSamples = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full md:w-[55%]">

        <div className="flex flex-col mx-5 my-4 pb-2 items-center bg-white rounded-lg shadow-md relative">



        <p className="fontTitle" style={{fontWeight:'700'}}>Your Cards Represent Your Business</p>
        <div className="flex flex-row flex-wrap justify-around items-center z-[1]">
                {/* <img className="w-[150px] h-[150px] overflow-hidden pb-3 rounded-lg samples-zoomable-imageLeft" src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673385/Sin_t%C3%ADtulo-1_Mesa_de_trabajo_1_copia_2_fhirv3_gqmrdh.png" alt="" /> 
                <img className="w-[150px] h-[150px] overflow-hidden pb-3 rounded-lg samples-zoomable-imageRight" src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673384/CS4_oaeyvy_q8rk8u.jpg" alt="" />

                <img className="w-[150px] h-[150px] overflow-hidden pb-3 rounded-lg samples-zoomable-imageLeft" src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673385/Sin_t%C3%ADtulo-1_Mesa_de_trabajo_1_copia_3_amaojv_yros80.png" alt="" /> 
                <img className="w-[150px] h-[150px] overflow-hidden pb-3 rounded-lg samples-zoomable-imageRight" src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673384/CS5_vgxtcv_jxgqmp.png" alt="" />

                <img className="w-[150px] h-[150px] overflow-hidden pb-3 rounded-lg samples-zoomable-imageLeft" src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673384/CS3_gwphcx_lztewc.jpg" alt="" />                  
                <img className="w-[150px] h-[150px] overflow-hidden pb-3 rounded-lg samples-zoomable-imageRight" src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673385/Sin_t%C3%ADtulo-1_Mesa_de_trabajo_1_xkkal3_gtknol.png" alt="" />

                <img className="w-[150px] h-[150px] overflow-hidden pb-3 rounded-lg samples-zoomable-imageLeft" src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673384/CS6_zurcdm_dpnsqe.jpg" alt="" /> 
                <img className="w-[150px] h-[150px] overflow-hidden pb-3 rounded-lg samples-zoomable-imageRight" src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673385/Sin_t%C3%ADtulo-1_Mesa_de_trabajo_1_copia_4_s09qpv_kog2c4.png" alt="" /> 

                <img className="w-[150px] h-[150px] overflow-hidden pb-3 rounded-lg samples-zoomable-imageLeft" src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673385/Sin_t%C3%ADtulo-1_Mesa_de_trabajo_1_copia_hra8f5_nj0tcd.png" alt="" /> 
                <img className="w-[150px] h-[150px] overflow-hidden pb-3 rounded-lg samples-zoomable-imageRight" src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688675362/CS7_lgs3ja_koutr4.jpg" alt="" />
 */}
                    <Image className="overflow-hidden pb-3 rounded-lg samples-zoomable-imageRight" src="https://res.cloudinary.com/dbdkbwkhr/image/upload/v1718057922/ewfdakbxuxlw66gteoin.png" alt="" width={215} height={120} />
                    <Image className="overflow-hidden pb-3 rounded-lg samples-zoomable-imageRight" src="https://res.cloudinary.com/dbdkbwkhr/image/upload/v1718057931/x6lftx6lchpclv6ksp1o.png" alt="" width={215} height={120} />
                    <Image className="overflow-hidden pb-3 rounded-lg samples-zoomable-imageRight" src="https://res.cloudinary.com/dbdkbwkhr/image/upload/v1718057932/igumamxkowessuhnmjh8.png" alt="" width={215} height={120} />
                    <Image className="overflow-hidden pb-3 rounded-lg samples-zoomable-imageRight" src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673385/Sin_t%C3%ADtulo-1_Mesa_de_trabajo_1_copia_2_fhirv3_gqmrdh.png" alt="" width={215} height={120} />
                    <Image className="overflow-hidden pb-3 rounded-lg samples-zoomable-imageRight" src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673384/CS4_oaeyvy_q8rk8u.jpg" alt="" width={215} height={120} />
                    <Image className="overflow-hidden pb-3 rounded-lg samples-zoomable-imageLeft" src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673385/Sin_t%C3%ADtulo-1_Mesa_de_trabajo_1_copia_3_amaojv_yros80.png" alt="" width={215} height={120} />
                    <Image className="overflow-hidden pb-3 rounded-lg samples-zoomable-imageRight" src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673384/CS5_vgxtcv_jxgqmp.png" alt="" width={220} height={120} />
                    <Image className="overflow-hidden pb-3 rounded-lg samples-zoomable-imageLeft" src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673384/CS3_gwphcx_lztewc.jpg" alt="" width={220} height={120} />
                    <Image className="overflow-hidden pb-3 rounded-lg samples-zoomable-imageRight" src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673385/Sin_t%C3%ADtulo-1_Mesa_de_trabajo_1_xkkal3_gtknol.png" alt="" width={220} height={120}/>
                    <Image className="overflow-hidden pb-3 rounded-lg samples-zoomable-imageLeft" src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673384/CS6_zurcdm_dpnsqe.jpg" alt="" width={220} height={120} />
                    <Image className="overflow-hidden pb-3 rounded-lg samples-zoomable-imageRight" src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673385/Sin_t%C3%ADtulo-1_Mesa_de_trabajo_1_copia_4_s09qpv_kog2c4.png" alt="" width={220} height={120} />
                    <Image className="overflow-hidden pb-3 rounded-lg samples-zoomable-imageLeft" src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673385/Sin_t%C3%ADtulo-1_Mesa_de_trabajo_1_copia_hra8f5_nj0tcd.png" alt=""width={220} height={120} />
                               
        </div>



        </div>

    </div>
  )
}

export default CardSamples