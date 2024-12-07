// components/CarDetails.js
const CarDetails = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/3 xl:w-1/4 mx-auto lg:mx-0 border border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-gray-700">2021 Mahindra Thar LX 4 STR Hard Top Diesel MT 4WD</h2>
        <ul className="space-y-4">
          <li className="flex justify-between">
            <span className="font-semibold text-gray-500">Mileage:</span>
            <span className="text-[#6300a3]">13K km</span>
          </li>
          <li className="flex justify-between">
            <span className="font-semibold text-gray-500">Fuel type:</span>
            <span className="text-[#6300a3]">Diesel</span>
          </li>
          <li className="flex justify-between">
            <span className="font-semibold text-gray-500">Transmission:</span>
            <span className="text-[#6300a3]">Manual</span>
          </li>
          <li className="flex justify-between">
            <span className="font-semibold text-gray-500">Location:</span>
            <span className="text-[#6300a3]">Gurgaon</span>
          </li>
          <li className="flex justify-between">
            <span className="font-semibold text-gray-500">Price:</span>
            <span className="text-[#6300a3]">₹13.26 Lakh</span>
          </li>
        </ul>
      </div>
    );
  };
  
  export default CarDetails;
  