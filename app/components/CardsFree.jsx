'use client';

import { useEffect, useState } from 'react';
import CardsForm from './CardsForm';
import { useRouter } from 'next/navigation';

const CardsFree = () => {
  const [calculate, serCalculate] = useState(false);
  const [estimate, setEstimate] = useState({
    average: '',
    percentage: 100,
    cards: '',
    months: '',
  });
  const [percentageField, setPercentageField] = useState('100');
  const router = useRouter()

const handleChange = (e) => {
  const { name, value } = e.target;
  if (!value.startsWith("-")) {
    setEstimate((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};


  const changePercentage = (e) => {
    let value = e.target.value;
    if (/[^\d%]/.test(value)) {
      //COMPROBACION DE QUE SEA SOLO NUMERO O % SIGN
    } else if (value > 100 || value < 0) {
      //alert('si')
      //COMPROBACION DE QUE SE MANTENGA EL % SIGN Y QUE NO SEA NI MAYOR A 100 NI MENOS A 0
    } else {
      setPercentageField(e.target.value);
      setEstimate({
        ...estimate,
        percentage: parseInt(value.replace('%', '')),
      });
    }
    
    {
      /* OPCION CON PORCENTAJE DENTRO DE INPUT */
    }
    // let value = e.target.value
    // if( /[^\d%]/.test(value)){
    //   //COMPROBACION DE QUE SEA SOLO NUMERO O % SIGN
    //   alert('si')
    // }else if(value.slice(-1) !== '%' || parseInt(value.replace('%', '')) > 100 || parseInt(value.replace('%', '')) < 0){
    //   //COMPROBACION DE QUE SE MANTENGA EL % SIGN Y QUE NO SEA NI MAYOR A 100 NI MENOS A 0
    // } else{
    //   setPercentageField(e.target.value)
    //   setEstimate({...estimate , percentage: parseInt(value.replace('%', ''))})
    // }
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (
      estimate.average.length == 0 ||
      estimate.percentage.length == 0 ||
      estimate.cards.length == 0 ||
      estimate.months.length == 0
    ) {
      alert('Complete all the fields');
    } else if (estimate.percentage < 0 || estimate.percentage > 100) {
      alert('Percentage must be between 1 - 100');
    } else {
      serCalculate(true);
      router.push("/funnel/order")
    }
  };

  useEffect(() => {
    localStorage.setItem('cardsdata', JSON.stringify({needed:(Number(estimate.average)*Number(estimate.percentage / 100)*Number(estimate.cards)*Number(estimate.months))}));
  }, [calculate]);

  return (
    <div className="flex flex-col justify-center items-center pt-3 md:w-[55%]">
      <form
        id="formulario"
        className="flex flex-col px-4 pb-8 mx-5 bg-white rounded-lg shadow-md relative"
      >
        {/* <p id="close" className=" absolute top-0 right-0">X</p> */}
        <p
          className="fontTitle text-center"
          style={{
            fontWeight: '700',
            color: '#a52a2a',
            padding: '5px 0 20px 0',
          }}
        >
          How many referral marketing cards do you need for your business?
        </p>
        <p
          style={{
            color: '#4a6bb6',
            padding: '0 0 5px 0',
            textAlign: 'center',
            lineHeight: '1',
            fontSize: '0.8rem',
          }}
        >
          Input the information below to calculate:
        </p>

        {/* <label for="Average of customers per month" className="fontForm mb-1">
          Average No. of customers per month*
        </label>          */}
        <input
          type="number"
          name="average"
          onChange={handleChange}
          min="0"
          required
          placeholder="Average no. of customers per month"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput "
        />

        {/* <label for="Percentage of customers going to give the card to" className="fontForm mb-1">
          Percentage of customers going to give the cards to*
        </label>    */}

        {/* OPCION CON PORCENTAJE DENTRO DE INPUT */}
        {/* <div className="flex justify-between items-center mb-4 rounded-lg border border-gray-300 focusInput ">
            <input
            name="percentage"
            type="text"
            value={percentageField}
            required
            className=" w-full py-2 pl-4 pr-4 rounded-lg focusInput"
            placeholder="% of customers going to give the cards to"
            onChange={changePercentage}
            // style={{borderRight: "0"}}
            />
            <div className="text-center text-2xl">%</div>
        </div> */}

        {/* <label htmlFor="Card to each customer (2 or 3 cards per happy customer recommended)" style={{color:'#4a6bb6' , padding: "0 0 5px 0" , textAlign:'center', lineHeight: '1', fontSize:'0.7rem'}}>
          % of customers going to give the cards to
        </label>  */}
        <div className="flex items-center mb-4 rounded-lg border border-gray-300 focusInput ">
          <input
            name="percentage"
            type="text"
            value={percentageField}
            required
            className="max-w-[45px] py-2 pl-4 pr-1 rounded-lg outline-none text-end"
            //placeholder="% of customers going to give the cards to"
            onChange={changePercentage}
          // style={{borderRight: "0"}}
          />
          <div className="flex text-2xl">
            %
            <span className="text-[#9c9c9c] text-[0.6rem] pl-2">
              % of customers going to give the cards to
            </span>
          </div>
        </div>

        <label
          htmlFor="Card to each customer (2 or 3 cards per happy customer recommended)"
          style={{
            color: '#4a6bb6',
            padding: '0 0 5px 0',
            textAlign: 'center',
            lineHeight: '1',
            fontSize: '0.7rem',
          }}
        >
          (We recommend 2 or 3 cards per happy customer)
        </label>
        <input
          type="number"
          required
          name="cards"
          onChange={handleChange}
          min="0"
          placeholder="No. of cards to each customer? "
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />

        {/* <label for="Number of months supply required" className="fontForm mb-1">
          Number of months supply required*
        </label>   */}
        <input
          type="number"
          required
          name="months"
          onChange={handleChange}
          min="0"
          placeholder="No. of months supply required"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focusInput"
        />
        <div className="flex justify-center items-center">
          <p
            className=" fontAlternative"
            style={{ paddingTop: '0' }}
          >{`Recommended: ${Math.round(
            estimate.average *
            (estimate.percentage / 100) *
            estimate.cards *
            estimate.months
          )}`}</p>
        </div>
        <button
          type="submit"
          className="px-4 py-2 buttonsMain"
          onClick={handleClick}
        >
          Calculate Total
        </button>
      </form>

      <span className="w-full  h-1 block"></span>
{/* 
      {calculate && (
        <CardsForm
          averageCustomers={estimate.average}
          cards={estimate.cards}
          months={estimate.months}
          percentageField={percentageField}
          estimate={Math.round(
            estimate.average *
            (estimate.percentage / 100) *
            estimate.cards *
            estimate.months
          )}
        />
      )} */}
    </div>
  );
};

export default CardsFree;
