

const Faqs = () => {


  return (

    <div className="flex flex-col justify-center items-center min-h-screen md:w-[55%]">

        <div className="flex flex-col mx-5 my-4 pb-2 items-center bg-white rounded-lg shadow-md relative">

        <p className="fontTitle" style={{fontWeight:'700'}}>Frequently Asked Questions</p>

        <div id="FAQs" className="flex flex-col justify-center items-center gap-2 w-full mt-3">

            {/* --------QUESTION START---1----- */}

            <div className="flex flex-col justify-center items-center">

            <input type="checkbox" id="collapsible-checkbox-1" className="collapsible-checkbox" />
            <label htmlFor="collapsible-checkbox-1" className="collapsible-label">
                <p className="fontAlternative">
                    What kind of customer data can I collect?
                </p>
            </label>
            <div className="collapsible-content">
                <p className="fontGeneral">
                
                When your customer registers their card with you, you can take as much or as little information as you see fit. We would recommend that you take as much as you can for potential future marketing opportunities – by email, text, telephone, etc. The software is fully GDPR compliant.
            
                </p>
            </div>

            </div>

            {/* --------QUESTION ENDS-------- */}  


            {/* --------QUESTION START---2----- */}

            <div className="flex flex-col justify-center items-center">

                <input type="checkbox" id="collapsible-checkbox-2" className="collapsible-checkbox" />
                <label htmlFor="collapsible-checkbox-2" className="collapsible-label">
                    <p className="fontAlternative">
                        What can I do with the customer data collected?
                    </p>
                </label>
                <div className="collapsible-content">
                    <p className="fontGeneral">
                    
                    For starters, you can use the information you already have on your existing customers to target them with offers/deals/promotions, or simply a ‘hello, we`ve not seen you for a while…` or ‘we see you last purchased xyz on (date) and wondered if you`d like us to reorder it for you`, or even a goodwill gesture such as ‘happy birthday`.
                    Depending upon the depth of data you`ve collected when your customers sign up, our program will allow you to segment your data which is great for target marketing. You can see who your best customers are, who hasn`t been back in a while, what products are performing well and which ones aren`t making any sales. You can send customised, meaningful communications to your customers that are relevant to them.                
                    </p>
                </div>


            </div>

            {/* --------QUESTION ENDS-------- */} 

            {/* --------QUESTION START--3------ */}

            <div className="flex flex-col justify-center items-center">

                <input type="checkbox" id="collapsible-checkbox-3" className="collapsible-checkbox" />
                <label htmlFor="collapsible-checkbox-3" className="collapsible-label">
                    <p className="fontAlternative">

                        My EPOS already offers a loyalty program. Why do I need yours?
                    
                    </p>
                </label>
                <div className="collapsible-content">
                    <p className="fontGeneral">
                    
                    There can be some limitations with many EPOS systems, as many record only the sale of goods or services to the customer and do not function efficiently as loyalty or referral software. For those that offer more, there exist cost implications. ProActiv software offers a far more comprehensive and flexible solution, with many more options for data collection AND we also offer the BEST PRICE GUARANTEE.

                    </p>
                </div>


            </div>

            {/* --------QUESTION ENDS-------- */} 

            {/* --------QUESTION START--4------ */}

            <div className="flex flex-col justify-center items-center">

                <input type="checkbox" id="collapsible-checkbox-4" className="collapsible-checkbox" />
                <label htmlFor="collapsible-checkbox-4" className="collapsible-label">
                    <p className="fontAlternative">
                        Is my data private and secure?
                    </p>
                </label>
                <div className="collapsible-content">
                    <p className="fontGeneral">
                    
                        Secure Socket Layer (SSL) technology validates our identity and encrypts traffic between you and the website. This stops third parties from intercepting your sensitive data.

                    </p>
                </div>

            </div>

            {/* --------QUESTION ENDS-------- */} 


            {/* --------QUESTION START---5----- */}

            <div className="flex flex-col justify-center items-center">

                <input type="checkbox" id="collapsible-checkbox-5" className="collapsible-checkbox" />
                <label htmlFor="collapsible-checkbox-5" className="collapsible-label">
                    <p className="fontAlternative">

                        What if your service doesn`t meet my requirements?                    
                    
                    </p>
                </label>
                <div className="collapsible-content">
                    <p className="fontGeneral">
                    
                        We offer a very flexible program with features like custom information fields to accommodate most business needs. Whilst our system is designed to respond to any business loyalty strategy, we acknowledge that there isn`t always a perfect, ‘one-size-fits-all`, solution for everyone. We can tailor your program with additions or amendments and will do our utmost to meet your requirements. There may be cost implications, but that will depend on the complexity of your needs. Get in touch for further information.

                    </p>
                </div>

            </div>

            {/* --------QUESTION ENDS-------- */} 


            {/* --------QUESTION START---6----- */}

            <div className="flex flex-col justify-center items-center">

                <input type="checkbox" id="collapsible-checkbox-6" className="collapsible-checkbox" />
                <label htmlFor="collapsible-checkbox-6" className="collapsible-label">
                    <p className="fontAlternative">

                        How long am I tied into my Contract?

                    </p>
                </label>
                <div className="collapsible-content">
                    <p className="fontGeneral">
                    

                        If you are investing in cards or fobs then there is no contract. All we ask is that you just give us 30 days notice (in writing) to cancel if you feel the software is not working for you. You can, of course, take your data with you.                        

                    </p>
                </div>

            </div>

            {/* --------QUESTION ENDS-------- */} 


            {/* --------QUESTION START--7------ */}

            <div className="flex flex-col justify-center items-center">

                <input type="checkbox" id="collapsible-checkbox-7" className="collapsible-checkbox" />
                <label htmlFor="collapsible-checkbox-7" className="collapsible-label">
                    <p className="fontAlternative">
                        I can`t afford to give away discounts and free products.
                    </p>
                </label>
                <div className="collapsible-content">
                    <p className="fontGeneral">
                    
                        We understand the financial issues faced by small and medium-sized enterprises, and we appreciate that giving away discounts or freebies could seem counterproductive for those who are trying to make a profit. However, we also believe that you have to speculate to accumulate. Businesses that offer discounts find that they experience increased sales, improved reputation, repeat customers and more buyer loyalty, as well as being able to easily sell less popular items to make room for new stock. Call us to discuss and we will advise you accordingly.

                    </p>
                </div>

            </div>

            {/* --------QUESTION ENDS-------- */} 

        </div>

        </div>

    </div>

  )
}

export default Faqs