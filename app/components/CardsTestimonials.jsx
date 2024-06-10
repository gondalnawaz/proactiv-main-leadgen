

const CardsTestimonials = () => {
  return (
    <div className="flex flex-col  items-center bg-white rounded-lg shadow-md  w-[90%] md:w-[52%]">

        <div className="flex flex-col mx-5 my-4 pb-2 items-center relative h-[90vh] md:w-[60%]">

            <p className="fontTitle" style={{fontWeight:'700'}}>What Our Clients Say About Us</p>

            <div className="carousel-wrapper w-[90%] h-auto ">
                <span id="item-1"></span>
                <span id="item-2"></span>
                <span id="item-3"></span>
                <span id="item-4"></span>
                <span id="item-5"></span>
                {/* <span id="item-5"></span> */}


                 {/* ITEM OPEN */}
                 <div className="flex flex-col justify-center h-[70vh] items-center carousel-item rounded-lg item-1 shadow-lg bg-[#d6d6d665]">
                    <img className="rounded-lg" style={{height:'5rem' , marginBottom: '10px'}} src="https://res.cloudinary.com/dbdkbwkhr/image/upload/v1718057056/lxpjkdd67s5awvy5cp7s.png" alt="" />
                    <div className="flex flex-col justify-between items-center gap-2 mt-2">
                        <p className="fontGeneral">
                            &quot;
                            Our customers always comment on how good the appointment cards look. They are excellent value for money. We have saved lots on printing costs since we introduced them.
                            &quot;
                        </p>
                    </div>
                    <a className="arrow arrow-prev" href="#item-6"></a>
                    <a className="arrow arrow-next" href="#item-2"></a>
                </div>
                {/* ITEM CLOSE */}

                {/* ITEM OPEN */}
                <div className="flex flex-col justify-center h-[70vh] items-center carousel-item rounded-lg item-2 shadow-lg bg-[#d6d6d665]">
                <img className="rounded-lg" style={{height:'5rem' , marginBottom: '10px'}} src="https://res.cloudinary.com/dbdkbwkhr/image/upload/v1718057137/b8tjzequb0nyywruicu3.png" alt="" />
                    <div className="flex flex-col justify-between items-center gap-2 mt-2">
                        <p className="fontGeneral">
                            &quot;
                            We can't recommend Proactiv highly enough for the effect they've had on our business! We started out a year ago and found that we were really struggling to keep hold of customers. - Some would come in once and we wouldn't see them again. We introduced the Privileges software and with a lot of advice from the guys at Proactiv, we started using loyalty and reward schemes. The difference was unbelievable! Once people could redeem rewards for returning to us, we saw the same people coming back week on week! The increase in spend paid for our annual software subscription within the first month. We use the plastic key fobs with the barcode. It is very simple to use. I am not very technical so I was grateful for that. We really can't thank Proactiv enough for their help & support.
                            &quot;
                        </p>
                    </div>
                    <a className="arrow arrow-prev" href="#item-1"></a>
                    <a className="arrow arrow-next" href="#item-3"></a>
                </div>
                {/* ITEM CLOSE */}

                <div className="flex flex-col justify-center h-[70vh] items-center carousel-item rounded-lg item-3 shadow-lg bg-[#d6d6d665]">
                    <img className="rounded-lg" style={{height:'5rem' , marginBottom: '10px'}} src="https://res.cloudinary.com/dbdkbwkhr/image/upload/v1718057509/zdcav46rertop4ahfxy9.png" alt="" />
                    <div className="flex flex-col justify-between items-center gap-2">
                        <p className="fontGeneral">
                            &quot;
                            Working with Proactiv has saved me a lot of money in the long run. I used to get a couple missed appointments a week at the salon which cost me about £40 each. The consultant at Proactiv helped me realise that I was losing over £4000 a year in lost revenue. They suggested these reusable plastic appointment cards which looked really professional. They also designed them for me with my logo which looked really good. Now I give one out to every client when booking them in - I get so many comments about how good the cards are and people put them straight in their purse or wallet.
                            &quot;
                        </p>
                    </div>

                    <a className="arrow arrow-prev" href="#item-2"></a>
                    <a className="arrow arrow-next" href="#item-4"></a>
                </div>


                {/* ITEM OPEN */}
                <div className="flex flex-col justify-center h-[70vh] items-center carousel-item rounded-lg item-4 shadow-lg bg-[#d6d6d665]">
                <p style={{fontSize: '45px', fontWeight: 'bold'}}>Blyth Garage</p>
                    <div className="flex flex-col justify-between items-center gap-2">
                        <p className="fontGeneral">
                            &quot;
                            We don’t do any advertising. We rely purely on word of mouth. We give everyone of our customers a couple of cards. Many get passed on, leading to a regular impact of new customers. Without doubt a fantastic investment.
                            &quot;
                        </p>
                    </div>
                    <a className="arrow arrow-prev" href="#item-3"></a>
                    <a className="arrow arrow-next" href="#item-5"></a>
                </div>
                {/* ITEM CLOSE */}

                {/* ITEM OPEN */}
                <div className="flex flex-col justify-center h-[70vh] items-center carousel-item rounded-lg item-5 shadow-lg bg-[#d6d6d665]">
                    <img className="rounded-lg" style={{height:'5rem' , marginBottom: '10px'}} src="https://res.cloudinary.com/dbdkbwkhr/image/upload/v1718057211/bcbntfgp2vz532uubsqa.png" alt="" />
                    <div className="flex flex-col justify-between items-center gap-2">
                        <p className="fontGeneral">
                            &quot;
                            From start to finish the process was well managed and the customer service received enabled us to have a design we were extremely happy with.

                            The product arrived in good time and we were informed along the way. The quality of the cards are great and have already proved to be a hit making access to our platforms easy for our customers. Will certainly be back for more in the future. Thanks Guys!
                            &quot;
                        </p>
                    </div>
                    <a className="arrow arrow-prev" href="#item-4"></a>
                    <a className="arrow arrow-next" href="#item-6"></a>
                </div>
                {/* ITEM CLOSE */}

                {/* ITEM OPEN */}
                <div className="flex flex-col justify-center h-[70vh] items-center carousel-item rounded-lg item-6 shadow-lg bg-[#d6d6d665]">
                <p style={{fontSize: '45px', fontWeight: 'bold'}}>Julia Dodd</p>
                    <div className="flex flex-col justify-between items-center gap-2">
                        <p className="fontGeneral">
                            &quot;
                            We have just re ordered business cards as we have found they are good quality, very handy to carry around as they don't bend as they are plastic.
                            We chose the option of a QR code on our recent order which goes straight to our website / offer. It is definitely helping increase business. We found the company very helpful & we would definitely recommend them.
                            &quot;
                        </p>
                    </div>
                    <a className="arrow arrow-prev" href="#item-5"></a>
                    <a className="arrow arrow-next" href="#item-1"></a>
                </div>
                {/* ITEM CLOSE */}

            </div>


        </div>

    </div>
  )
}

export default CardsTestimonials