
'use client'
import { useRouter } from 'next/navigation';

const GetFreeCard = () => {
  const router = useRouter();

  const handleClick = () =>{
    
    router.push('/funnel/cards');
  }

  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md h-full w-[90%] mb-4 md:w-[52%]">
      
      <div className="flex flex-col mx-5 my-4 pb-0 items-center relative">
        <button className="px-4 py-2 buttonsMain m-5" onClick={handleClick}>
          Get Your Free Cards!
        </button>

      </div>
                
    </div>
  )
}

export default GetFreeCard