"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import "./questionnaire.css";

const InitialQuestionaire = () => {

  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [otherCategory, setOtherCategory] = useState("");

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setSelectedCategory(value);

    if (value === "e") {
      setIsPopupOpen(true);
    }

    // Reset otherCategory state when a non-'h' option is selected
    if (value !== "h") {
      setOtherCategory("");
    }
  };
//Appointment Basis start
  const [appointmentBasis, setAppointmentBasis] = useState("no");

  const handleAppointmentBasisChange = (e) => {
    setAppointmentBasis(e.target.value);
  };
  const [bookingMethod, setBookingMethod] = useState("on-premises");

  const handleBookingMethodChange = (e) => {
    setBookingMethod(e.target.value);
  };
//Appointment Basis End

  //vihicale service start
  const [doMOT, setDoMOT] = useState("");
  const [vehiclesPerDay, setVehiclesPerDay] = useState("");
  const [daysPerWeek, setDaysPerWeek] = useState("");
  const [remindClients, setRemindClients] = useState("");
  const [reminderMethod, setReminderMethod] = useState("");

  const handleDoMOTChange = (e) => {
    const value = e.target.value;
    setDoMOT(value);
    if (value === "no") {
      // Reset related fields if "no" is selected
      setVehiclesPerDay("");
      setDaysPerWeek("");
      setRemindClients("");
      setReminderMethod("");
    }
  };

  const handleVehiclesPerDayChange = (e) => setVehiclesPerDay(e.target.value);
  const handleDaysPerWeekChange = (e) => setDaysPerWeek(e.target.value);
  const handleRemindClientsChange = (e) => {
    const value = e.target.value;
    setRemindClients(value);
    if (value === "no") {
      setReminderMethod(""); // Clear reminderMethod if not reminding clients
    }
  };
  const handleReminderMethodChange = (e) => setReminderMethod(e.target.value);
  //vihicale service End

  const [benefits, setBenefits] = useState({
    referredClients: false,
    visitFrequency: false,
    averageSpend: false,
    reminderSystem: false,
    improveCashFlow: false,
    digitalDiary: false,
    digitalDatabase: false,
    digitalInvoicing: false,
    digitalStockControl: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setBenefits((prevBenefits) => ({
      ...prevBenefits,
      [name]: checked,
    }));
  };

  const [preference, setPreference] = useState("");

  const handlePreferenceChange = (e) => {
    setPreference(e.target.value);
  };


  //submit 
  const handleClick = (e) => {
    e.preventDefault()
    router.push('/funnel/spin');
  };

  //popup code
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const closePopup = () => setIsPopupOpen(false);
  const videoRef = useRef(null);

  return (
    <div className="flex flex-col mx-5 my-4 pb-2 items-center bg-white rounded-lg shadow-md relative md:w-[55%]">
      <p className="fontTitle text-center" style={{ fontWeight: "600", color: "#4a6bb6", marginBottom:'30px', marginTop:'20px' }}>
        <span className="colorPrimary">Please help us find the best products for you by answering some questions below.</span>
      </p>
      <div className="flex flex-col w-[95%] border-2 mb-5 md:w-[90%] main-conaiter">
        <div className="upper_box">
        <div
            id="businessCategory"
            className="w-full flex flex-col px-4 py-4 bg-white relative"
          >
      <label htmlFor="business-category" className="pb-4 heading-box">
        Please Select your Business Category
      </label>

      <div
        id="business-category"
        name="business-category"
        className="flex flex-col mb-4"
            >
              <label className="radio-label">
                <input
                  type="radio"
                  value="a"
                  checked={selectedCategory === "a"}
                  onChange={handleCategoryChange}
                  className="hidden"
                />
                <span className="radio-text ml-3 each_box">Wellbeing (or Health), Hair & Beauty</span>
              </label>

              <label className="radio-label">
                <input
                  type="radio"
                  value="b"
                  checked={selectedCategory === "b"}
                  onChange={handleCategoryChange}
                  className="hidden"
                />
               <span className="radio-text ml-3 each_box">Retail</span> 
              </label>

              <label className="radio-label">
                <input
                  type="radio"
                  value="c"
                  checked={selectedCategory === "c"}
                  onChange={handleCategoryChange}
                  className="hidden"
                />
               <span className="radio-text ml-3 each_box">Restaurant</span> 
              </label>

              <label className="radio-label">
                <input
                  type="radio"
                  value="d"
                  checked={selectedCategory === "d"}
                  onChange={handleCategoryChange}
                  className="hidden"
                />
                <span className="radio-text ml-3 each_box">Vehicle Services</span> 
              </label>

              <label className="radio-label">
                <input
                  type="radio"
                  value="e"
                  checked={selectedCategory === "e"}
                  onChange={handleCategoryChange}
                  className="hidden"
                />
                <span className="radio-text ml-3 each_box">Tradesman</span>
              </label>

              <label className="radio-label">
                <input
                  type="radio"
                  value="f"
                  checked={selectedCategory === "f"}
                  onChange={handleCategoryChange}
                  className="hidden"
                />
                <span className="radio-text ml-3 each_box">Gyms/PT/Coach</span>
              </label>

              <label className="radio-label">
                <input
                  type="radio"
                  value="g"
                  checked={selectedCategory === "g"}
                  onChange={handleCategoryChange}
                  className="hidden"
                />
                <span className="radio-text ml-3 each_box">Clubs/Membership</span>
              </label>

              <label className="radio-label">
                <input
                  type="radio"
                  value="h"
                  checked={selectedCategory === "h"}
                  onChange={handleCategoryChange}
                  className="hidden"
                />
                <span className="radio-text ml-3 each_box">Other (Specify)</span>
              </label>
            </div>

            {selectedCategory === "h" && (
              <input
                id="businessname"
                type="text"
                name="businessname"
                value={otherCategory}
                onChange={(e) => setOtherCategory(e.target.value)}
                placeholder="Specify other business category"
                className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
              />
            )}
          </div>
          <div
            id="appointmentBasis"
            className="w-full flex flex-col px-4 py-4 bg-white relative"
          >
            <label className="pb-4 heading-box" htmlFor="appointment-basis">
                    Do you work on an appointment basis?
            </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      value="yes"
                      checked={appointmentBasis === "yes"}
                      onChange={handleAppointmentBasisChange}
                      className="hidden"
                    />
                    <span className="radio-text ml-3 each_box">Yes</span> 
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      value="no"
                      checked={appointmentBasis === "no"}
                      onChange={handleAppointmentBasisChange}
                      className="hidden"
                    />
                    <span className="radio-text ml-3 each_box">No</span>
                  </label>
            {appointmentBasis === "yes" && (
              <div className="w-full flex flex-col px-4 py-4 bg-white relative">
                <label className="pb-4 sub-heading-box" htmlFor="booking-method">
                  How do clients book?
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    value="on-premises"
                    checked={bookingMethod === "on-premises"}
                    onChange={handleBookingMethodChange}
                    className="hidden"
                  />
                  <span className="radio-text ml-3 each_box">On-premises</span>
                </label>

                <label className="radio-label">
                  <input
                    type="radio"
                    value="over-phone"
                    checked={bookingMethod === "over-phone"}
                    onChange={handleBookingMethodChange}
                    className="hidden"
                  />
                  <span className="radio-text ml-3 each_box">Over the phone</span> 
                </label>
              </div>
            )}
          </div>
          <div
            id="vehicleServices"
            className="w-full flex flex-col px-4 py-4 bg-white relative"
          >
            <label htmlFor="vehicleServices" className="pb-4 heading-box">
            Specific to Vehicle Services
            </label>
            <div className="w-full flex flex-col px-4 py-4 bg-white relative">
              <form>
                {/* Question a */}
                <fieldset className="mb-4">
                  <legend className="pb-4 sub-heading-box">Do you do MOT or MOT prepping?</legend>
                  <label className="radio-label">
                    <input
                      type="radio"
                      value="yes"
                      checked={doMOT === "yes"}
                      onChange={handleDoMOTChange}
                      className="hidden"
                    />
                    <span className="radio-text ml-3 each_box">Yes</span> 
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      value="no"
                      checked={doMOT === "no"}
                      onChange={handleDoMOTChange}
                      className="hidden"
                    />
                    <span className="radio-text ml-3 each_box">No</span> 
                  </label>
                </fieldset>

                {/* Conditional rendering for questions b, c, and d */}
                {doMOT === "yes" && (
                  <>
                    {/* Question b */}
                    <div className="mb-4">
                      <label htmlFor="vehicles-per-day" className="block pb-2 sub-heading-box-2">
                        How many vehicles do you see per day?
                      </label>
                      <div className="flex justify-center">
                        <input
                          id="vehicles-per-day"
                          type="number"
                          value={vehiclesPerDay}
                          onChange={handleVehiclesPerDayChange}
                          placeholder="Enter number of vehicles"
                          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
                        />
                      </div>
                    </div>

                    {/* Question c */}
                    <div className="mb-4">
                      <label htmlFor="days-per-week" className="block pb-2 sub-heading-box-2">
                        How many days per week are you open?
                      </label>
                      <div className="flex justify-center">
                        <input
                          id="days-per-week"
                          type="number"
                          value={daysPerWeek}
                          onChange={handleDaysPerWeekChange}
                          placeholder="Enter number of days"
                          className="px-4 py-2 rounded-lg border border-gray-300 focusInput"
                        />
                      </div>
                    </div>

                    {/* Question d */}
                    <fieldset className="mb-4">
                      <legend className="pb-4 sub-heading-box-2">
                        Do you remind clients of their MOT due date?
                      </legend>
                      <label className="radio-label">
                        <input
                          type="radio"
                          value="yes"
                          checked={remindClients === "yes"}
                          onChange={handleRemindClientsChange}
                          className="hidden"
                        />
                        <span className="radio-text ml-3 each_box">Yes</span>
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          value="no"
                          checked={remindClients === "no"}
                          onChange={handleRemindClientsChange}
                          className="hidden"
                        />
                        <span className="radio-text ml-3 each_box">No</span>
                      </label>
                    </fieldset>

                    {/* Conditional input for reminder method */}
                    {remindClients === "yes" && (
                      <div className="w-full flex flex-col px-4 py-4 bg-white relative">
                      <form>
                        {/* Conditional rendering for the reminder method selection */}
                          <fieldset className="mb-4">
                            <legend className="pb-4 sub-heading-box-2">
                              If yes, what is the method used?
                            </legend>
                            <label className="radio-label">
                              <input
                                type="radio"
                                value="Letter"
                                checked={reminderMethod === "Letter"}
                                onChange={handleReminderMethodChange}
                                className='hidden'
                              />
                              <span className="radio-text ml-3 each_box">Letter</span>
                            </label>
                            <label className="radio-label">
                              <input
                                type="radio"
                                value="Text"
                                checked={reminderMethod === "Text"}
                                onChange={handleReminderMethodChange}
                                className='hidden'
                              />
                              <span className="radio-text ml-3 each_box">Text</span>
                            </label>
                            <label className="radio-label">
                              <input
                                type="radio"
                                value="Calls"
                                checked={reminderMethod === "Calls"}
                                onChange={handleReminderMethodChange}
                               className='hidden'
                              />
                              <span className="radio-text ml-3 each_box">Calls</span>
                            </label>
                            <label className="radio-label">
                              <input
                                type="radio"
                                value="Email"
                                checked={reminderMethod === "Email"}
                                onChange={handleReminderMethodChange}
                                className='hidden'
                              />
                              <span className="radio-text ml-3 each_box">Email</span>
                            </label>
                          </fieldset>
                      </form>
                    </div>
                    )}
                  </>
                )}
              </form>
            </div>
        </div>
        <div
          id="businessCatrgory"
          className="w-full flex flex-col px-4 py-4 bg-white relative"
        >
          <label className="heading-box">Which of the Following Could Benefit Your Business?</label>
          <div
            id="options"
            className="w-full flex flex-col px-4 py-4 bg-white relative check-boxes"
          >
            <label className="radio-label">
              <input
                className="hidden"
                type="checkbox"
                name="referredClients"
                checked={benefits.referredClients}
                onChange={handleCheckboxChange}
              />
              <span className="ml-3 each_box"> More referred clients </span>
            </label>

            <label>
              <input
                className="hidden"
                type="checkbox"
                name="visitFrequency"
                checked={benefits.visitFrequency}
                onChange={handleCheckboxChange}
              />
              <span className="ml-3 each_box ">
                Increase customer visit frequency{" "}
              </span>
            </label>

            <label>
              <input
                className="hidden"
                type="checkbox"
                name="averageSpend"
                checked={benefits.averageSpend}
                onChange={handleCheckboxChange}
              />
              <span className="ml-3 each_box">Increase average spend</span>
            </label>

            <label>
              <input
                className="hidden"
                type="checkbox"
                name="reminderSystem"
                checked={benefits.reminderSystem}
                onChange={handleCheckboxChange}
              />
              <span className="ml-3 each_box">
                Reminder system for appointments, MOTs{" "}
              </span>
            </label>

            <label>
              <input
                className="hidden"
                type="checkbox"
                name="improveCashFlow"
                checked={benefits.improveCashFlow}
                onChange={handleCheckboxChange}
              />
              <span className="ml-3 each_box">Improve cash flow</span>
            </label>

            <label>
              <input
                className="hidden"
                type="checkbox"
                name="digitalDiary"
                checked={benefits.digitalDiary}
                onChange={handleCheckboxChange}
              />
              <span className="ml-3 each_box">Digital diary</span>
            </label>

            <label>
              <input
                className="hidden"
                type="checkbox"
                name="digitalDatabase"
                checked={benefits.digitalDatabase}
                onChange={handleCheckboxChange}
              />
              <span className="ml-3 each_box">Digital database</span>
            </label>

            <label>
              <input
                className="hidden"
                type="checkbox"
                name="digitalInvoicing"
                checked={benefits.digitalInvoicing}
                onChange={handleCheckboxChange}
              />
              <span className="ml-3 each_box">Digital invoicing</span>
            </label>

            <label>
              <input
                className="hidden"
                type="checkbox"
                name="digitalStockControl"
                checked={benefits.digitalStockControl}
                onChange={handleCheckboxChange}
              />
              <span className="ml-3 each_box">Digital stock control</span>
            </label>
          </div>
        </div>
        <div id="Interstedservices"  className="w-full flex flex-col px-4 py-4 bg-white relative">

          <label className="heading-box">Please specify you likings</label>  
          <div className="check-boxes">
            <div
              id="preferenceQuestion"
              className="w-full flex flex-col px-4 py-4 bg-white relative"
            >
              <label className="radio-label">
                <input
                  className="hidden"
                  type="radio"
                  name="preference"
                  value="yesSC"
                  checked={preference === "yesSC"}
                  onChange={handlePreferenceChange}
                />
                <span className="radio-text ml-3 each_box">
                  Do you like SC?
                </span>
              </label>

              <label className="radio-label">
                <input
                  className="hidden"
                  type="radio"
                  name="preference"
                  value="yesKF"
                  checked={preference === "yesKF"}
                  onChange={handlePreferenceChange}
                />
                <span className="radio-text ml-3 each_box">
                  Do you like KF?
                </span>
              </label>

              <label className="radio-label ">
                <input
                  className="hidden"
                  type="radio"
                  name="preference"
                  value="yesBoth"
                  checked={preference === "yesBoth"}
                  onChange={handlePreferenceChange}
                />
                <span className="radio-text ml-3 each_box">
                  Do you like both SC & KF?
                </span>
              </label>

              <label className="radio-label ">
                <input
                  className="hidden"
                  type="radio"
                  name="preference"
                  value="notSure"
                  checked={preference === "notSure"}
                  onChange={handlePreferenceChange}
                />
                <span className="radio-text ml-3 each_box">Not sure yet</span>
              </label>
            </div>
          </div>
        </div>
        </div>
      </div>
      <button
          type="submit"
          className="px-4 py-2 buttonsMain"
          onClick={handleClick}
        >
          Click To Claim Your FREE Gift
        </button>

         {/* Popup */}
        {isPopupOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center ">
            <div className="bg-white p-6 rounded-lg shadow-lg relative popup-view">
            <video  ref={videoRef} autoPlay muted  controls  poster={""}>
                <source src={'https://res.cloudinary.com/dbdkbwkhr/video/upload/v1715274697/Cards_Hairdresser_x264_pmi5yw.mp4'} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
              <button 
                onClick={closePopup}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              >
                &times;
              </button>
            </div>
          </div>
        )};
    </div>
   
  );
};

export default InitialQuestionaire;
