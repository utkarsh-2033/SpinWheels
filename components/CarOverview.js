// components/CarOverview
const CarOverview = ({
  model,
  year,
  regYear,
  fuelType,
  kmDriven,
  transmission,
  owner,
  insuranceValidity,
  insuranceType,
  rto,
  location,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-2/3 xl:w-3/5 mx-auto lg:mx-0 mt-12">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Car Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-b pb-4">
        <div className="text-gray-500">
          <span className="font-semibold">Make Year:</span>{" "}
          <span className="text-[#6300a3]">{year}</span>
        </div>
        <div className="text-gray-500">
          <span className="font-semibold">Registration Year:</span>{" "}
          <span className="text-[#6300a3]">{regYear}</span>
        </div>
        <div className="text-gray-500">
          <span className="font-semibold">Fuel Type:</span>{" "}
          <span className="text-[#6300a3]">{fuelType}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-b py-4">
        <div className="text-gray-500">
          <span className="font-semibold">Km Driven:</span>{" "}
          <span className="text-[#6300a3]">{kmDriven}</span>
        </div>
        <div className="text-gray-500">
          <span className="font-semibold">Transmission:</span>{" "}
          <span className="text-[#6300a3]">{transmission}</span>
        </div>
        <div className="text-gray-500">
          <span className="font-semibold">No. of Owner:</span>{" "}
          <span className="text-[#6300a3]">{owner}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-b py-4">
        <div className="text-gray-500">
          <span className="font-semibold">Insurance Validity:</span>{" "}
          <span className="text-[#6300a3]">{insuranceValidity}</span>
        </div>
        <div className="text-gray-500">
          <span className="font-semibold">Insurance Type:</span>{" "}
          <span className="text-[#6300a3]">{insuranceType}</span>
        </div>
        <div className="text-gray-500">
          <span className="font-semibold">RTO:</span>{" "}
          <span className="text-[#6300a3]">{rto}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4">
        <div className="text-gray-500">
          <span className="font-semibold">Car Location:</span>{" "}
          <span className="text-[#6300a3]">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default CarOverview;
