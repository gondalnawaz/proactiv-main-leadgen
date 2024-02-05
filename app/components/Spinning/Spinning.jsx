'use client'
import React, { useEffect, useState } from 'react'
import './Spinning.css'


export const Spinning = ({ setCongrats, setResult }) => {
  const [deg, setDeg] = useState(0)
  const [calc, setCalc] = useState(0)
  const [prize, setPrize] = useState({ description: '', number: 0, valued: 0, days: 0, date: '' })
  const [clicked, setClicked] = useState(false)

  const handleSpin = () => {

    //ANTES DE LOS CAMBIOS
    // setDeg(Math.ceil(Math.random() * 100000))    

    //PARA CONTROLAR LOS RESULTADOS, PODRIA PRIMERO INSTANCIAR UNA VARIABLE Y LUEGO MODIFICAR ESA VARIABLE
    // START CONTROL SPIN RESULT
    let random = Math.random() * 100

    if (random < 50) {
      //3 months 50%
      setDeg(69841)
    } else if (random < 75) {
      //3+3 months 25%
      setDeg(79841)
    } else if (random < 85) {
      //6 months 10%
      setDeg(66841)
    } else if (random < 92.5) {
      //6 + 6 months 7.5%
      setDeg(58841)
    } else if (random < 97.5) {
      //9 months 5%
      setDeg(68541)
    } else if (random <= 100) {
      //12 months 2.5%
      setDeg(68441)
    }








    // END CONTROL SPIN RESULT

    setClicked(true)

    localStorage.setItem('click', JSON.stringify('done'));

    setTimeout(() => {
      setCongrats(false)
    }, 8000)
  }

  useEffect(() => {
    let clickedDone = JSON.parse(localStorage.getItem('click'));
    if (clickedDone == 'done') {
      setClicked(true)
    }


  }, [])


  useEffect(() => {
    setResult(prize)

  }, [prize])


  useEffect(() => {
    setCalc(deg % 360)
  }, [deg])

  useEffect(() => {

    const currentDate = new Date();
    const futureDate = new Date();



    if (calc >= 0 && calc <= 29) {
      futureDate.setDate(currentDate.getDate() + 90);
      const futureMonth = futureDate.getMonth() + 1; // Add 1 because months are zero-based (0-11)
      const futureDay = futureDate.getDate();
      const futureYear = futureDate.getFullYear();
      const dateUntil = `${futureDay}-${futureMonth}-${futureYear}`
      setPrize({ description: "3 months FREE", number: 1, valued: 423, days: 90, date: dateUntil });
    } else if (calc >= 30 && calc <= 89) {
      futureDate.setDate(currentDate.getDate() + 360);
      const futureMonth = futureDate.getMonth() + 1; // Add 1 because months are zero-based (0-11)
      const futureDay = futureDate.getDate();
      const futureYear = futureDate.getFullYear();
      const dateUntil = `${futureDay}-${futureMonth}-${futureYear}`
      setPrize({ description: "12 months FREE", number: 2, valued: 1043, days: 360, date: dateUntil });
    } else if (calc >= 90 && calc <= 149) {
      futureDate.setDate(currentDate.getDate() + 270);
      const futureMonth = futureDate.getMonth() + 1; // Add 1 because months are zero-based (0-11)
      const futureDay = futureDate.getDate();
      const futureYear = futureDate.getFullYear();
      const dateUntil = `${futureDay}-${futureMonth}-${futureYear}`
      setPrize({ description: "9 months FREE", number: 3, valued: 539.91, days: 270, date: dateUntil });
    } else if (calc >= 150 && calc <= 209) {
      futureDate.setDate(currentDate.getDate() + 180);
      const futureMonth = futureDate.getMonth() + 1; // Add 1 because months are zero-based (0-11)
      const futureDay = futureDate.getDate();
      const futureYear = futureDate.getFullYear();
      const dateUntil = `${futureDay}-${futureMonth}-${futureYear}`
      setPrize({ description: "6 months FREE + 6 months half price", number: 4, valued: 728, days: 180, date: dateUntil });
    } else if (calc >= 210 && calc <= 269) {
      futureDate.setDate(currentDate.getDate() + 180);
      const futureMonth = futureDate.getMonth() + 1; // Add 1 because months are zero-based (0-11)
      const futureDay = futureDate.getDate();
      const futureYear = futureDate.getFullYear();
      const dateUntil = `${futureDay}-${futureMonth}-${futureYear}`
      setPrize({ description: "6 months FREE", number: 5, valued: 623, days: 180, date: dateUntil });
    } else if (calc >= 270 && calc <= 329) {
      futureDate.setDate(currentDate.getDate() + 90);
      const futureMonth = futureDate.getMonth() + 1; // Add 1 because months are zero-based (0-11)
      const futureDay = futureDate.getDate();
      const futureYear = futureDate.getFullYear();
      const dateUntil = `${futureDay}-${futureMonth}-${futureYear}`
      setPrize({ description: "3 months FREE + 3 months half price", number: 6, valued: 528, days: 90, date: dateUntil });
    } else if (calc >= 330 && calc <= 359) {
      futureDate.setDate(currentDate.getDate() + 90);
      const futureMonth = futureDate.getMonth() + 1; // Add 1 because months are zero-based (0-11)
      const futureDay = futureDate.getDate();
      const futureYear = futureDate.getFullYear();
      const dateUntil = `${futureDay}-${futureMonth}-${futureYear}`
      setPrize({ description: "3 months FREE", number: 1, valued: 423, days: 90, date: dateUntil });
    }


  }, [calc])

  return (

    <div className="flex flex-col justify-center items-center w-full min-h-screen md:w-[55%]">
      <div id='internalDIV' className='flex flex-col  mx-5 my-4 pb-2 justify-center items-center bg-white rounded-lg shadow-md relative'>



        {/* <p className="fontTitle">Spin The Wheel</p> */}
        {/* <p className="fontSubTitle whitespace-nowrap">To See How Many Free Months Use You Get</p>          */}
        <p className='fontTitle' style={{ paddingBottom: "0", fontWeight: '600' }}>Spin The Wheel</p>
        <p className="fontAlternative" style={{ paddingTop: "0.5rem", fontSize: "1.2rem", textAlign: 'justify' }}> To See How Many Free Months Use Of The Software You Win To Go With Your <span className='font-bold text-[#ff0000]'>100 FREE</span>  Plastic Referral Marketing Cards <span className='italic' style={{ fontSize: '0.8rem' }}>[total value up to £653]</span></p>


        <div id='DIVsoftwarecomponents' className='flex flex-col justify-center items-center w-[90%] rounded-lg shadow-lg pb-2 mb-3 bg-[#ebebeb86]'>
          <p className="fontSubTitle" style={{ paddingBottom: '0.2rem' }}>Software Components</p>
          <ul className="fontGeneral">
            <li className=" flex justify-around items-center h-fit border-2 border-[#a52a2a49] py-1">
              <div className=' w-[95%] h-[100%] flex justify-center items-center'>
                <p className='fontGeneral' style={{ textAlign: 'start', padding: '0 4px 0 2px' }}>1.-</p>
                <p className='fontGeneral w-[100%]' style={{ textAlign: 'start', padding: '0 0 0 0' }}> Database</p>
              </div>
              <span className='w-[2px] h-[30px] bg-[#a52a2a49]'></span>
              <div className='w-[95%] h-[100%] flex justify-center items-center'>
                <p className='fontGeneral' style={{ textAlign: 'start', padding: '0 4px 0 2px' }}>2.-</p>
                <p className='fontGeneral w-[100%]' style={{ textAlign: 'start', padding: '0 0 0 0' }}>Telephone / Email Marketing</p>
              </div>
            </li>

            <li className=" flex justify-around items-center h-fit border-2 border-[#a52a2a49] py-1">
              <div className='w-[95%] h-[100%] flex justify-center items-center'>
                <p className='fontGeneral' style={{ textAlign: 'start', padding: '0 4px 0 2px' }}>3.-</p>
                <p className='fontGeneral w-[100%] text-center' style={{ textAlign: 'start', padding: '0 0 0 0' }}>Referral Marketing</p>
              </div>
              <span className='w-[2px] h-[30px] bg-[#a52a2a49]'></span>
              <div className='w-[95%] h-[100%] flex justify-center items-center'>
                <p className='fontGeneral' style={{ textAlign: 'start', padding: '0 4px 0 2px' }}>4.-</p>
                <p className='fontGeneral w-[100%]' style={{ textAlign: 'start', padding: '0 0 0 0' }}>Gift Cards</p>
              </div>
            </li>

            <li className=" flex justify-around items-center h-fit border-2 border-[#a52a2a49] py-1">
              <div className='w-[95%] h-[100%] flex justify-center items-center'>
                <p className='fontGeneral' style={{ textAlign: 'start', padding: '0 4px 0 2px' }}>5.-</p>
                <p className='fontGeneral w-[100%] text-center' style={{ textAlign: 'start', padding: '0 0 0 0' }}>Loyalty / Incentive Marketing</p>
              </div>
              <span className='w-[2px] h-[30px] bg-[#a52a2a49]'></span>
              <div className='w-[95%] h-[100%] flex justify-center items-center'>
                <p className='fontGeneral' style={{ textAlign: 'start', padding: '0 4px 0 2px' }}>6.-</p>
                <p className='fontGeneral w-[100%]' style={{ textAlign: 'start', padding: '0 0 0 0' }}>Diary System</p>
              </div>
            </li>


            <li className=" flex justify-around items-center h-fit border-2 border-[#a52a2a49] py-1">
              <div className='w-[95%] h-[100%] flex justify-center items-center'>
                <p className='fontGeneral' style={{ textAlign: 'start', padding: '0 4px 0 2px' }}>7.-</p>
                <p className='fontGeneral w-[100%] text-center' style={{ textAlign: 'start', padding: '0 0 0 0' }}>Stock Control</p>
              </div>
              <span className='w-[2px] h-[30px] bg-[#a52a2a49]'></span>
              <div className='w-[95%] h-[100%] flex justify-center items-center'>
                <p className='fontGeneral' style={{ textAlign: 'start', padding: '0 4px 0 2px' }}>8.-</p>
                <p className='fontGeneral w-[100%]' style={{ textAlign: 'start', padding: '0 0 0 0' }}>Invoicing </p>
              </div>
            </li>
          </ul>
        </div>


        <div id='containerSpinner' className='h-auto w-[95%] flex flex-col justify-center items-center transform scale-[0.9]'>
          {/* <p>test: {prize}</p> */}
          <div className='flex justify-center items-center my-7 px-2 transform scale-100'>
            <div class="containerCSS" style={{ transform: `rotate(${deg}deg)` }}>
              {/* <div class={`containerCSS rotate-[${deg}deg]`}> */}
              <div class="containerDIV containerONE"><div className='text-center w-[42px] h-[115px]'> 3 Months <p className='inline w-fit pt-3'>FREE</p></div></div>
              <div class="containerDIV containerTWO"><div className='text-center w-[42px] h-[115px]'> 3M FREE + 3M <p className='text-sm inline'>1/2</p> price </div></div>
              <div class="containerDIV containerTHREE"><div className='text-center w-[42px] h-[115px]'>6 Months <p className='inline w-fit pt-3'>FREE</p> </div></div>
              <div class="containerDIV containerFOUR"><div className='text-center w-[42px] h-[115px]'>6M FREE + 6M <p className='text-sm inline'>1/2</p>  price</div></div>
              <div class="containerDIV containerFIVE"><div className='text-center w-[42px] h-[115px]'>9 Months <p className='inline w-fit pt-3'>FREE</p></div></div>
              <div class="containerDIV containerSIX"><div className='text-center w-[42px] h-[115px]'>12 Months <p className='inline w-fit pt-4'>FREE</p></div></div>
            </div>
            <span class="mid"></span>
            <div class="stoper"></div>
          </div>
        </div>

        {
          !clicked ?
            <button className='px-6 py-2 bg-[#a52a2a] text-lg text-white rounded-lg' onClick={handleSpin} >Spin!</button>
            :
            <button className='px-6 py-2 bg-[#a52a2a] text-lg text-white rounded-lg opacity-50' disabled >Already done!</button>
        }







      </div>
    </div>

  )
}

