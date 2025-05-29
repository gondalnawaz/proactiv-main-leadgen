const ReferalMktText = () => {

  return (
    <div className="flex flex-col justify-center items-center h-full w-[100vw] md:w-[55%]">

      <div className="flex flex-col mx-5 my-4 pb-2 items-center bg-white rounded-lg shadow-md relative">

      <p className="fontTitle" style={{fontWeight:'700'}}>Watch This Video To Learn How To Attract Lots Of New Clients For FREE</p>

      <video controls className="w-[80vw] rounded-md md:w-[45%]" poster={"https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673384/pos_w900d9_nbqd0l.png"}>
        <source src={'https://res.cloudinary.com/dbew7ibhf/video/upload/v1688673403/VIDEO_2_FINAL_v4_1_ithsyz_awzd2b.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="h-[20px]"></div>
      <p className="fontGeneral">
        <span style={{fontWeight: "bold"}}>Word Of Mouth</span> has been something we have all benefited from. Some more than others. What if I told you over 95% of people who receive a positive recommendation never act on it!!!
        Furthermore what if I told you we have developed a way to increase those that act on a recommendation by up to 3000%. Yes you read correctly. <br></br> <br></br>
        <span style={{fontWeight: "bold"}}>The Problem With Word Of Mouth</span> is that we all lead busy lives so people tend to forget. With plastic cards being kept and usually in a safe place i.e purse and wallet. (How do we know? – Our 1000’s of customers over the last 14 years tell us everyday) People have them to hand when recommendations are taking place. 

      </p>

      <span className="h-[1px] w-[80%] bg-black my-3"></span>
      
      <p className="fontGeneral">
      <span style={{fontWeight: "bold"}}>The Referral Marketing Concept </span>
      This doesn’t work on cardboard cards. Why? Because cardboard cards are not kept and even for the small percentage that are, the QR Code won’t last too long. All it takes is a crease or smudge and its obsolete. Over 90% of plastic cards are kept. Up to 30% are passed on during their 1st circulation. They last for decades so can be circulated 100’s of times in their lifetime. 
      </p>


      </div>


    </div>
  )
}

export default ReferalMktText