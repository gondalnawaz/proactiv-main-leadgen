'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import PriceCards from './PriceCards';

const CardsForm = ({ estimate, averageCustomers, cards, months, percentageField }) => {
  const [freeCards, setFreeCards] = useState(100);
  const [price, setPrice] = useState(0);
  const [selectedOption, setSelectedOption] = useState(true);
  const [artWork] = useState(37.5);
  const [deliveryPrice] = useState(14.0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addition, setAddition] = useState(estimate - 100);
  const [paymentOption, setPaymentOption] = useState('£51.50');
  const [cardsData, setCardsData] = useState({
    needed: estimate - 100,
    totaldue: 0,
    payment: 0,
    option: '',
  });

  const hangelSelectedState = (e) => {
    console.log(selectedOption);
  };

  const router = useRouter();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setAddition(e.target.value);
  };

  useEffect(() => {
    setAddition(estimate - 100);
  }, [estimate]);

  useEffect(() => {
    setCardsData({
      needed: addition - freeCards,
      totaldue: price * parseInt(addition) + 37.5 + 14,
      payment: parseFloat(paymentOption.replace('£', '')),
      option: selectedOption ? 'full payment' : 'deposit',
    });

    if (addition >= 1 && addition <= 499) {
      setPrice(0.53);
    } else if (addition >= 500 && addition <= 999) {
      setPrice(0.45);
    } else if (addition >= 1000 && addition <= 2499) {
      setPrice(0.4);
    } else if (addition >= 2500 && addition <= 4999) {
      setPrice(0.36);
    } else if (addition >= 5000 && addition <= 9999) {
      setPrice(0.32);
    } else if (addition >= 10000) {
      setPrice(0.3);
    }
  }, [addition]);

  useEffect(() => {
    // console.log('cambio por price')
    // console.log(price);
    // console.log(parseInt(addition));
    setCardsData({
      needed: addition - freeCards,
      totaldue: price * parseInt(addition) + 37.5 + 14,
      payment: parseFloat(paymentOption.replace('£', '')),
      option: selectedOption ? 'full payment' : 'deposit',
    });
  }, [price]);

  const handelChangePayment = (e) => {
    setPaymentOption(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    let deposit = parseFloat(paymentOption.replace('£', ''));
    let full = price * parseInt(addition) + 37.5 + 14;

    // alert(`${deposit} ${ full} ${typeof deposit} ${typeof full}`)
    if (deposit > full) {
      alert('Deposit can be higher than the total.');
    } else if (deposit < 51.5) {
      alert('The minimum deposit is £51.50');
    } else {
      localStorage.setItem('cardsdata', JSON.stringify({
        ...cardsData,
        baseData: {
          averageCustomers: averageCustomers ? parseInt(averageCustomers) : 0,
          cards: cards ? parseInt(cards) : 0,
          months: months ? parseInt(months) : 0,
          freeCards,
          additionalCards: addition,
          neededCards: parseInt(addition) + parseInt(freeCards),
          totalCardPrice: parseFloat(
            (price * parseInt(addition))
              .toFixed(2)
              .replace(',', '.')
          ),
          artworkOrDesignPrice: parseFloat(
            artWork.toFixed(2).replace(',', '.')
          ),
          courierDeliveryPrice: parseFloat(
            deliveryPrice.toFixed(2).replace(',', '.')
          ),
          totalCard: parseFloat(
            (price * parseInt(addition) + 37.5 + 14)
              .toFixed(2)
              .replace(',', '.')
          ),
          paymentOption: selectedOption ? 'full payment' : 'deposit',
          minDeposit: 51.5,
          percentageCustomersGiveCards: percentageField
        }
      }));
      // router.push('/funnel/keyfobs');

      if (selectedOption) {
        router.push('/funnel/keyfobs');
      } else {
        router.push('/funnel/keyfobs?deposit=true');

      }
    }
  };

  useEffect(() => {
    setCardsData({
      needed: addition - freeCards,
      totaldue: price * parseInt(addition) + 37.5 + 14,
      payment: parseFloat(paymentOption.replace('£', '')),
      option: selectedOption ? 'full payment' : 'deposit',
    });
  }, [paymentOption]);

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <div
        id="calculosOne"
        className="flex flex-col w-[90%] px-4 py-8 bg-white rounded-lg shadow-md relative md:w-[95%]"
      >
        <p
          className="fontTitle text-center"
          style={{
            fontWeight: '700',
            color: '#a52a2a',
            padding: '5px 0 20px 0',
          }}
        >
          100 FREE PLASTIC CARDS
        </p>

        <label htmlFor="Number of free cards" className="fontForm mb-1">
          Number of free cards
        </label>
        <input
          readonly
          value={freeCards}
          type="number"
          placeholder="Please input number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <label htmlFor="Additionl number of cards" className="fontForm mb-1">
          Additional number of cards (adjust accordingly)
        </label>
        <input
          value={addition}
          onChange={handleChange}
          type="number"
          placeholder="Please input number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <label htmlFor="Total Number of Cards" className="fontForm mb-1">
          Total number of cards needed
        </label>
        <input
          value={parseInt(addition) + parseInt(freeCards)}
          type="number"
          placeholder="Please input number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <label htmlFor="Card price (GBP)" className="fontForm mb-1">
          Total card price
        </label>
        <div className="flex justify-between gap-2 items-center mb-4 ">
          <input
            value={`£${(price * parseInt(addition))
              .toFixed(2)
              .replace(',', '.')}`}
            type="text"
            placeholder="Please input number"
            className="w-[75%] py-2 pl-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            id="cardPrices"
            className="bg-[#96ade2] text-[#000000] py-2 w-[25%] rounded-lg border text-[12px] leading-[1]"
            onClick={openModal}
          >
            See
            <br />
            prices
          </button>

          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Card Prices Modal"
            style={{
              overlay: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
              content: {
                top: 'auto',
                left: 'auto',
                right: 'auto',
                bottom: 'auto',
                width: '90%',
                height: '600px',
                backgroundColor: '#99acff15',

                // borderRadius: '8px',
                // border: '1px solid #ccc',
                // boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              },
            }}
          >
            {/* Place your modal content here */}

            <div className="flex flex-col justify-center items-center w-full h-full rounded-lg shadow-md relative md:w-[55%] bg-[#99acffd8]">
              <PriceCards closeModal={closeModal} />
            </div>
          </Modal>
        </div>

        <label htmlFor="Artwork/Design (GBP)" className="fontForm mb-1">
          Artwork/Design
        </label>
        <input
          value={`£${artWork.toFixed(2).replace(',', '.')}`}
          type="text"
          placeholder="Please input number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <label htmlFor="Courier Delivery (GBP)" className="fontForm mb-1">
          Courier delivery
        </label>
        <input
          value={`£${deliveryPrice.toFixed(2).replace(',', '.')}`}
          type="text"
          placeholder="Please input number"
          className="px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <label htmlFor="Total Price (GBP)" className="fontForm mb-1">
          Total price
        </label>
        <input
          value={`£${(price * parseInt(addition) + 37.5 + 14)
            .toFixed(2)
            .replace(',', '.')}`}
          type="text"
          placeholder="Please input number"
          className="font-bold px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <label htmlFor="Select a Payment Option" className="fontForm mb-2">
          Select a payment option*
        </label>
        <div className="flex justify-evenly mb-3">
          <div className="flex justify-center items-center">
            <input
              className="mr-1"
              type="radio"
              name="full payment"
              checked={selectedOption}
              onChange={() => setSelectedOption(true)}
            />{' '}
            <p>Full Payment</p>
          </div>
          <div className="flex ">
            <input
              className="mr-1"
              type="radio"
              name="deposit"
              checked={!selectedOption}
              onChange={() => setSelectedOption(false)}
            />

            <div className="flex flex-col justify-center items-center">
              <p>Deposit</p>
              <p className="mb-0 text-xs" style={{ textAlign: 'center' }}>
                (min £51.50)
              </p>
            </div>

            <button onClick={hangelSelectedState}></button>
          </div>
        </div>

        <input
          value={
            selectedOption
              ? `£${(price * parseInt(addition) + 37.5 + 14)
                .toFixed(2)
                .replace(',', '.')}`
              : paymentOption
          }
          //value={ selectedOption ? (price * (parseInt(addition)) + 37.5 + 14) : paymentOption}
          type="text"
          onChange={handelChangePayment}
          className="font-bold px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <button
          type="submit"
          className="px-4 py-2 buttonsMain mt-3"
          onClick={handleClick}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CardsForm;
