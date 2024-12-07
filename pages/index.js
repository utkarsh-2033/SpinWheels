// pages/index.js
import Head from 'next/head';
import ImageCarousel from '../components/ImageCarousel';
import CarDetails from '../components/CarDetails';
import PriceCalculator from '../components/PriceCalculator';
import CarOverview from '../components/CarOverview';

const Home=()=> {
  return (
    <div>
      <Head>
        <title>SpinWheels</title>
      </Head>
      <div className="container mx-auto p-4 max-w-screen-xl flex flex-col lg:flex-row gap-6">
        <ImageCarousel />
        <CarDetails />
      </div>
      <div className="container mx-auto p-4 max-w-screen-xl flex flex-col lg:flex-row gap-6">
        <CarOverview
          model="Mahindra Thar"
          year="2021"
          regYear="Dec 2021"
          fuelType="Diesel"
          kmDriven="13K km"
          transmission="Manual (Regular)"
          owner="1st Owner"
          insuranceValidity="Nov 2025"
          insuranceType="Third Party"
          rto="DL3C"
          location="Sector-29, Gurgaon"
        />
        <PriceCalculator />
      </div>
    </div>
  );
}

export default Home;