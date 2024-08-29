import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="container md:flex gap-5 px-4 md:px-0">
        <div className='flex-1 bg-[url("/images/banner/banner2.jpg")] rounded-lg mb-5 md:mb-0'>
          <div className="uppercase text-white p-8 md:p-12 pt-44 md:pt-52">
            <p className="text-xs font-medium">spring trending</p>
            <h2 className="py-5 text-4xl font-bold italic">
              t-shirts <br /> all round
            </h2>
            <Link to="/shop">
            <button className="group uppercase text-sm font-medium flex items-center gap-2 border-b-2 pb-1 hover:border-orange-500 hover:text-orange-500 duration-200">
              shop now
              <GoArrowUpRight className="text-xl group-hover:rotate-45 duration-300" />
            </button>
            </Link>
          </div>
        </div>

        <div className='flex-1 bg-[url("/images/banner/banner3.jpg")] rounded-lg bg-center md:bg-auto'>
          <div className="uppercase text-white p-8 md:p-12 pt-44 md:pt-52">
            <p className="text-xs font-medium">spring campain</p>
            <h2 className="py-5 text-4xl font-bold italic">
              New spring <br /> on sale
            </h2>
            <Link to="/shop">
            <button className="group uppercase text-sm font-medium flex items-center gap-2 border-b-2 pb-1 hover:border-orange-500 hover:text-orange-500 duration-200">
              shop now
              <GoArrowUpRight className="text-xl group-hover:rotate-45 duration-300" />
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
