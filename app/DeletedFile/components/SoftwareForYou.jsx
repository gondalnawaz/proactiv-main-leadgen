

const SoftwareForYou = () => {
  return (
    // <div className="flex flex-col justify-center items-center min-h-screen md:w-[55%]">

      <div className="flex flex-col mx-5 my-4 pb-2 items-center bg-white rounded-lg shadow-md relative md:w-[52%]">

        <p className="fontTitle" style={{fontWeight:'700'}}>The software is for you if you...</p>
        <div className="custom-bullets rounded-lg shadow-lg w-[90%] py-3 mb-4">
            <ul>
                <li className="fontAlternative" style={{fontSize:'1rem'}}>Would like to attract new clients for free without advertising? </li>
                <div className="h-[1px] bg-[#d15d4ea9] w-[95%] my-2"></div>
                <li className="fontAlternative" style={{fontSize:'1rem'}}>Eliminate or massively reduce missed appointments?  </li>
                <div className="h-[1px] bg-[#d15d4ea9] w-[95%] my-2"></div>
                <li className="fontAlternative" style={{fontSize:'1rem'}}>Increase your clients average expenditure?  </li>
                <div className="h-[1px] bg-[#d15d4ea9] w-[95%] my-2"></div>
                <li className="fontAlternative" style={{fontSize:'1rem'}}>Improve your cash flow whilst increasing your profits?  </li>
                <div className="h-[1px] bg-[#d15d4ea9] w-[95%] my-2"></div>
                <li className="fontAlternative" style={{fontSize:'1rem'}}>Reduce or eliminate any printing costs?  </li>
                <div className="h-[1px] bg-[#d15d4ea9] w-[95%] my-2"></div>
                <li className="fontAlternative" style={{fontSize:'1rem'}}>Contact all or a chosen selection of your clients in one?   </li>
            </ul>           
        </div>
        <p className="fontGeneral py-4" style={{textAlign: 'center', padding:'10px 15px 10px 15px', color: '#d15d4ea9', fontSize:'1rem'}}>Now is your chance to have more control of your business and to be able to influence your clients in a subtle & professional manner.</p>

      </div>

    // </div>
  )
}

export default SoftwareForYou