import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Pagination, Navigation, Autoplay } from "swiper/modules"; 
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"; 

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; 
import "swiper/css/autoplay"; 
import { Link } from "react-router-dom";

const CustomNextButton = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 p-2 bg-black bg-opacity-30 rounded cursor-pointer"
      onClick={onClick}
    >
      <FaChevronRight color="white" size={20} />
    </div>
  );
};

const CustomPrevButton = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 p-2 bg-black bg-opacity-30 rounded cursor-pointer"
      onClick={onClick}
    >
      <FaChevronLeft color="white" size={20} />
    </div>
  );
};

const Hero = () => {
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        speed={500}
        navigation={{
          nextEl: nextButtonRef.current,
          prevEl: prevButtonRef.current,
        }}
        onSwiper={(swiper) => {
          // Update navigation elements once Swiper is initialized
          if (nextButtonRef.current && prevButtonRef.current) {
            swiper.params.navigation.nextEl = nextButtonRef.current;
            swiper.params.navigation.prevEl = prevButtonRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
      >
        {/* First Slide */}
        <SwiperSlide>
          <div className="bg-[url('/images/slide1.jpg')] bg-center bg-cover">
            <div className="container flex justify-between items-center md:py-44 py-24 pr-5 md:pr-0">
              <div className="md:flex-1"></div>
              <div className="md:flex-1 text-right text-white">
                <h1 className="font-bold text-4xl md:text-5xl">
                  New Arrival 2024
                </h1>
                <h2 className="py-3 font-semibold text-sm md:text-lg">
                  THIS SEASON'S NEW DESIGN ARE AVAILABLE HERE
                </h2>
                <p className="pb-8 text-sm md:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum ipsam eius accusantium corporis doloribus delectus
                  reprehenderit laudantium.
                </p>
                <Link to="/shop">
                  <button className="border-[3px] rounded p-2 px-8">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Second Slide */}
        <SwiperSlide>
          <div className="bg-[url('/images/slide2.jpg')] bg-center bg-cover">
            <div className="container flex justify-between items-center md:py-44 py-24 pl-5 md:pl-0">
              <div className="md:flex-1 text-white">
                <h1 className="font-bold text-4xl md:text-5xl">
                  Urban Edge 2024
                </h1>
                <h2 className="py-3 font-semibold text-sm md:text-lg">
                  Jackets for the Modern Man
                </h2>
                <p className="pb-8 text-sm md:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum ipsam eius accusantium corporis doloribus delectus
                  reprehenderit laudantium.
                </p>
                <Link to="/shop">
                  <button className="border-[3px] rounded p-2 px-8">
                    Shop Now
                  </button>
                </Link>
              </div>
              <div className="md:flex-1"></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div ref={nextButtonRef}>
        <CustomNextButton />
      </div>
      <div ref={prevButtonRef}>
        <CustomPrevButton />
      </div>
    </div>
  );
};

export default Hero;
