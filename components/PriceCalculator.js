// components/PriceCalculator
import { useState } from 'react';

const PriceCalculator = () => {
  const [invites, setInvites] = useState();
  const [duration, setDuration] = useState();
  const [price, setPrice] = useState();

  const calculatePrice = () => {
    setPrice(invites * duration * 10); 
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-12 w-full lg:w-4/5 xl:w-2/3 mx-auto">
      <h2 className="text-lg font-bold mb-4 text-center">Event Price Calculator</h2>
      <div className="flex flex-col items-center space-y-4">
        <input
          type="number"
          value={invites}
          onChange={(e) => setInvites(Number(e.target.value))}
          placeholder="Enter Number of Invites"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          placeholder="Enter Duration of Event (hours)"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <button
          onClick={calculatePrice}
          className="p-2 bg-[#6300a3] text-white rounded w-full hover:bg-purple-600"
        >
          Calculate Price
        </button>
        <div className="text-lg font-semibold mt-4 p-2 bg-gray-100 rounded w-full text-center">
          Calculated Price: ₹{price}
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
