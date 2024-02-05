'use client';
import Image from 'next/image'

require('dotenv').config();

export default function Home() {
  const resetSpin = () => {
    localStorage.setItem('click', JSON.stringify('no'));
  };

  return (
    <div
    // id="containerNEW"
    // className="flex flex-col justify-center items-start h-auto pt-4 gap-3"
    >
      {/* <a className="p-6 font-bold bg-[#ff0000]" href="/funnel">
        {' '}
        GO TO FUNNEL
      </a>

      <button className="bg-white text-slate-800" onClick={resetSpin}>
        Reset Spin
      </button> */}
       <Image
      src="/proactiv.png"
      width={500}
      height={500}
      alt="Picture of the author"
      style={{
        marginTop: "70px",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
      }}
    />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "30vh" }}>
  <a className="p-6 font-bold bg-[#ff0000] text-white rounded-md mb-4" href="/funnel">
    GO TO FUNNEL
  </a>

  <button className="bg-white text-slate-800 px-4 py-2 rounded-md" onClick={resetSpin}>
    Reset Spin
  </button>
</div>


      {/* <ArtworkDelivery />
      <span className="w-full bg-black h-1"></span>      

      <CardsFree/>
      <span className="w-full bg-black h-1"></span>

      <CardsForm />
      <span className="w-full bg-black h-1"></span>

      <RequiredInformation/>
      <span className="w-full bg-black h-1"></span> */}
    </div>
  );
}
