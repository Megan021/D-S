import React from "react";
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"; // Importing the icons

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 p-2 bg-black bg-opacity-30 rounded cursor-pointer"
    >
      <FaChevronRight color="white" size={20} />
    </div>
  );
};

// Custom Prev Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 p-2 bg-black bg-opacity-30 rounded cursor-pointer"
    >
      <FaChevronLeft color="white" size={20} />
    </div>
  );
};

const Hero = () => {
  // Slider settings
  const settings = {
    dots: true, // Show dots navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
    nextArrow: <NextArrow />, // Use custom next arrow
    prevArrow: <PrevArrow />, // Use custom previous arrow
  };

  return (
    <Slider {...settings}>
      {/* First Slide */}
      <div className="bg-[url('/images/slide1.jpg')] bg-center bg-cover">
        <div className="container flex justify-between items-center md:py-44 py-24 pr-5 md:pr-0">
          <div className="md:flex-1"></div>
          <div className="md:flex-1 text-right text-white">
            <h1 className="font-bold text-4xl md:text-5xl">New Arrival 2024</h1>
            <h2 className="py-3 font-semibold text-sm md:text-lg">
              THIS SEASON'S NEW DESIGN ARE AVAILABLE HERE
            </h2>
            <p className="pb-8 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              ipsam eius accusantium corporis doloribus delectus reprehenderit
              laudantium.
            </p>
            <Link to="/shop">
            <button className="border-[3px] rounded p-2 px-8">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Second Slide */}
      <div className="bg-[url('/images/slide2.jpg')] bg-center bg-cover">
        <div className="container flex justify-between items-center md:py-44 py-24 pl-5 md:pl-0">
          <div className="md:flex-1 text-white">
            <h1 className="font-bold text-4xl md:text-5xl">Urban Edge 2024</h1>
            <h2 className="py-3 font-semibold text-sm md:text-lg">
              Jackets for the Modern Man
            </h2>
            <p className="pb-8 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              ipsam eius accusantium corporis doloribus delectus reprehenderit
              laudantium.
            </p>
            <Link to="/shop">
            <button className="border-[3px] rounded p-2 px-8">Shop Now</button>
            </Link>
          </div>
          <div className="md:flex-1"></div>
        </div>
      </div>
    </Slider>
  );
};

export default Hero;
