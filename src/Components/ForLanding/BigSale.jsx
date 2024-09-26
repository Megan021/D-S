import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const BigSale = () => {
  return (
    <>
      <div className='bg-[url("/images/banner/banner1.jpg")] md:bg-center bg-fixed bg-left-top'>
        <div className="bg-black bg-opacity-50 text-center uppercase text-white py-16 md:py-32 bg-fixed">
          <p className="text-xs font-semibold">ends tomorrow</p>
          <h2 className="text-4xl md:text-6xl font-bold py-5">big sale <br /> upto 50% off</h2>
          <p className="pb-12">Use code <span className="text-orange-500 font-medium">BIGSALE50</span> on select sale styles</p>
          <Link to="/shop">
          <button className="group uppercase p-3 px-7 border border-white flex items-center gap-2 mx-auto font-medium text-sm rounded-md">shop now <GoArrowUpRight className="text-xl group-hover:rotate-45 duration-300" /></button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BigSale;
