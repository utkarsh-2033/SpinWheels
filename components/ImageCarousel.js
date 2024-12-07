// components/ImageCarousel.js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import Link from 'next/link';

const ImageCarousel = () => {
  const images = [
    '/images/car1.jpg',
    '/images/car2.jpeg',
  ];

  return (
    <div className="w-full lg:w-2/3 xl:w-3/4 mx-auto h-auto">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        className="w-full h-full rounded-lg overflow-hidden shadow-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Car ${index + 1}`} className="w-full h-full object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Link href="/360view" legacyBehavior>
        <a className="block mt-4 text-center bg-[#6300a3] text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-600">
          View 360°
        </a>
      </Link>
    </div>
  );
};

export default ImageCarousel;
