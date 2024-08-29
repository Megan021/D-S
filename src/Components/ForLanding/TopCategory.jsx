import React from "react";
import Category from "../../Data/Category.json";
import { GoArrowUpRight } from "react-icons/go";

const TopCategory = () => {
  return (
    <>
      <div className="container md:py-3 md:pt-7 px-4 md:px-0">
        <h2 className="text-xl font-medium text-center pb-5 md:hidden">Top Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-5">
            <div className="border border-gray-300 rounded-lg md:flex items-center justify-center hidden">
              <h1 className="text-xl font-medium text-center">
                Top <br /> Categories
              </h1>
            </div>
            {Category.map((category, index) => (
              <div key={index} className="cursor-pointer rounded-lg relative border overflow-hidden border-gray-300 h-32 w-full md:h-40">
                <img
                  src={category?.image}
                  alt={category?.name}
                  className="rounded-lg object-cover absolute"
                />
                <p className="flex items-center gap-2 text-base font-medium absolute text-white bottom-2 left-4 backdrop-blur-sm rounded-lg">
                  {category?.name}
                  <GoArrowUpRight className="mt-px " />
                </p>
              </div>
            ))}
          </div>
        </div>
    </>
  );
};

export default TopCategory;
