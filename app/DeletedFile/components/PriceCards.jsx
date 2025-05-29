import React from 'react'

const PriceCards = ({closeModal}) => {
  return (

    <div className='w-[95%] '>
      <p className="absolute top-0 right-1 cursor-pointer" onClick={()=>closeModal()} style={{fontWeight:'700'}}>X</p>
      <p className="fontTitle text-center" style={{ fontWeight:'700', color:'#a52a2a' , padding: '5px 0 20px 0'}}>Card Prices</p>
      <table className="w-full border rounded-lg">
        <thead>
          <tr className="border-b bg-[#7a94b3]">
            <th className="resize-text py-1 px-2 w-[37%] text-white" style={{fontWeight:'700'}}>Quantities</th>
            <th className="resize-text py-1 px-2 w-[30%] text-white" style={{fontWeight:'700'}}>Price per Card</th>
            <th className="resize-text py-1 px-2 w-[33%] text-white" style={{fontWeight:'700'}}>Quantity Discount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b bg-[#ffffff]">
            <td className="resize-text py-1 px-2">100-499</td>
            <td className="resize-text py-1 px-2">53p</td>
            <td className="resize-text py-1 px-2">0%</td>
          </tr>
          <tr className="border-b bg-[#96cfd1]">
            <td className="resize-text py-1 px-2">500–999</td>
            <td className="resize-text py-1 px-2">45p</td>
            <td className="resize-text py-1 px-2">15%</td>
          </tr>
          <tr className="border-b bg-[#ffffff]">
            <td className="resize-text py-1 px-2">1000-2499</td>
            <td className="resize-text py-1 px-2">40p</td>
            <td className="resize-text py-1 px-2">25%</td>
          </tr>
          <tr className="border-b bg-[#96cfd1]">
            <td className="resize-text py-1 px-2">2500-4999</td>
            <td className="resize-text py-1 px-2">36p</td>
            <td className="resize-text py-1 px-2">33%</td>
          </tr>
          <tr className="border-b bg-[#ffffff]">
            <td className="resize-text py-1 px-2">5000-9999</td>
            <td className="resize-text py-1 px-2">32p</td>
            <td className="resize-text py-1 px-2">40%</td>
          </tr>
          <tr className="border-b bg-[#96cfd1]">
            <td className="resize-text py-1 px-2">10000+</td>
            <td className="resize-text py-1 px-2">30p</td>
            <td className="resize-text py-1 px-2">45%</td>
          </tr>

        </tbody>
      </table>




      {/* <table className="fontGeneral table-auto mx-auto">
        <thead>
          <tr className="border-t">
            <th className="py-1 px-2">Quantities</th>
            <th className="py-1 px-2">pcc</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b bg-neutral-200">
            <td className="py-1 px-2">100 to 499</td>
            <td className="py-1 px-2">&pound;53 </td>
          </tr>

          <tr className="border-b bg-neutral-200">
            <td className="py-1 px-2">500 to 999</td>
            <td className="py-1 px-2">&pound;45 </td>
          </tr>

          <tr className="border-b bg-neutral-">
            <td className="py-1 px-2">1000 to 2499</td>
            <td className="py-1 px-2">&pound;40 </td>
          </tr>

          <tr className="border-b bg-neutral-200">
            <td className="py-1 px-2">2500 to 4999</td>
            <td className="py-1 px-2">&pound;36 </td>
          </tr>

          <tr className="border-b bg-neutral-200">
            <td className="py-1 px-2">5000 to 9999</td>
            <td className="py-1 px-2">&pound;32 </td>
          </tr>

          <tr className="border-b bg-neutral-200">
            <td className="py-1 px-2">10000+</td>
            <td className="py-1 px-2">&pound;30 </td>
          </tr>

        </tbody>
      </table> */}

    </div>
  )
}

export default PriceCards