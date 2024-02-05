

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
                {/* <span id="item-5"></span> */}
                <div className="flex flex-col justify-center h-[70vh] items-center carousel-item rounded-lg item-1 shadow-lg bg-[#d6d6d665]">
                <img className="rounded-lg" style={{height:'5rem' , marginBottom: '10px'}} src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673383/BENTLEYS_Mesa_de_trabajo_1_wzvoxb_iwnti9.png" alt="" />
                    <div className="flex flex-col justify-between items-center gap-2">
                        <p className="fontGeneral">
                            &quot;
                            Working with Proactiv has saved me a lot of money in the long run. I used to get a couple missed appointments a week at the salon which cost me about £40 each. The consultant at Proactiv helped me realise that I was losing over £4000 a year in lost revenue. They suggested these reusable plastic appointment cards which looked really professional. They also designed them for me with my logo which looked really good. Now I give one out to every client when booking them in - I get so many comments about how good the cards are and people put them straight in their purse or wallet.
                            &quot;
                        </p>
                    </div>

                    <a className="arrow arrow-prev" href="#item-4"></a>
                    <a className="arrow arrow-next" href="#item-2"></a>
                </div>
                
                {/* <div className="flex flex-col justify-center h-[70vh] items-center carousel-item rounded-lg item-2 shadow-lg bg-[#d6d6d665]">
                    <img className="rounded-lg" style={{height:'5rem' , marginBottom: '10px'}} src="https://res.cloudinary.com/dbhtt5ozr/image/upload/v1682116457/samples/cloudinary-logo-vector.svg" alt="" />
                    <div className="flex flex-col justify-between items-center gap-2">
                        <p className="fontSubTitle">Black Rose</p>
                        <p className="fontGeneral">
                            &quot;
                            Customers are definitely keeping hold of their plastic cards. With my old cardboard ones they use to lose them all the time. I was constantly having to replacing them. They are a no brainer.
                            &quot;
                        </p>
                    </div>

                    <a className="arrow arrow-prev" href="#item-1"></a>
                    <a className="arrow arrow-next" href="#item-3"></a>
                </div> */}
                
                {/* ITEM OPEN */}
                <div className="flex flex-col justify-center h-[70vh] items-center carousel-item rounded-lg item-2 shadow-lg bg-[#d6d6d665]">
                <img className="rounded-lg" style={{height:'5rem' , marginBottom: '10px'}} src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673385/scco-1_Mesa_de_trabajo_1_copia_jcyesi_dtrv5l.png" alt="" />

                    <div className="flex flex-col justify-between items-center gap-2 mt-2">
                        <p className="fontGeneral">
                            &quot;
                            Our customers always comment on how good the appointment cards look. They are excellent value for money. We have saved lots on printing costs since we introduced them.
                            &quot;
                        </p>
                    </div>
                    <a className="arrow arrow-prev" href="#item-1"></a>
                    <a className="arrow arrow-next" href="#item-3"></a>
                </div>
                {/* ITEM CLOSE */}

                {/* ITEM OPEN */}
                <div className="flex flex-col justify-center h-[70vh] items-center carousel-item rounded-lg item-3 shadow-lg bg-[#d6d6d665]">
                <img className="rounded-lg" style={{height:'5rem' , marginBottom: '10px'}} src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673386/The_Salon_SL_11_-02_p8vdyu_kvvkrl.png" alt="" />

                    <div className="flex flex-col justify-between items-center gap-2">
                        <p className="fontGeneral">
                            &quot;
                            People are bringing their cards back. Our issue with customers forgetting their appointments is now a thing of the past.
                            &quot;
                        </p>
                    </div>
                    <a className="arrow arrow-prev" href="#item-2"></a>
                    <a className="arrow arrow-next" href="#item-4"></a>
                </div>
                {/* ITEM CLOSE */}


                {/* ITEM OPEN */}
                <div className="flex flex-col justify-center h-[70vh] items-center carousel-item rounded-lg item-4 shadow-lg bg-[#d6d6d665]">
                    <img className="rounded-lg" style={{height:'5rem' , marginBottom: '10px'}} src="https://res.cloudinary.com/dbew7ibhf/image/upload/v1688673385/Sinsssaaaa_t%C3%ADtulo-1-03_j4n92h_qwnn0q.png" alt="" />
                    <div className="flex flex-col justify-between items-center gap-2">
                        <p className="fontGeneral">
                            &quot;
                            We are finding customers are now bringing their cards in so they are working very well for us.
                            &quot;
                        </p>
                    </div>
                    <a className="arrow arrow-prev" href="#item-3"></a>
                    <a className="arrow arrow-next" href="#item-1"></a>
                </div>
                {/* ITEM CLOSE */}



            </div>


        </div>

    </div>
  )
}

export default CardsTestimonials