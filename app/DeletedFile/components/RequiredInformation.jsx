const RequiredInformation = () =>{
    return(
    <div className="flex flex-col justify-center items-center min-h-screen">

      <form
        id="form"
        className="w-full flex flex-col px-4 py-8  bg-white rounded-lg shadow-md relative"
      >
        <p className="fontTitle">Please provide required information</p>
        <label for="YourName" className="fontForm mb-1">
          Your Name *
        </label>
        <input
          required={true}
          id="YourName"
          type="text"
          placeholder=""
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />
        <label for="Business" className="fontForm mb-1">
          Your Business Name *
        </label>
        <input
          required={true}
          id="Business"
          type="text"
          placeholder=""
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />
        <label for="Industry" className="fontForm mb-1">
          Industry
        </label>
        <input
          id="Industry"
          type="text"
          placeholder=""
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />
        <label for="Phone" className="fontForm mb-1">
          Phone Nomber *
        </label>
        <input
          required={true}
          id="Phone"
          type="text"
          placeholder=""
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />
        <label for="email" className="fontForm mb-1">
          Email Address *
        </label>
        <input
          required={true}
          id="email"
          type="text"
          placeholder=""
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />
        <label for="web" className="fontForm mb-1">
          Website Address
        </label>
        <input
          id="web"
          type="text"
          placeholder=""
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />
        <label for="Address" className="fontForm mb-1">
          Address *
        </label>
        <input
          required={true}
          id="Address"
          type="text"
          placeholder=""
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />

        <button type="submit" className="px-4 py-2 buttonsMain">
          Submit
        </button>
      </form>



    </div>
    )
}
export default RequiredInformation