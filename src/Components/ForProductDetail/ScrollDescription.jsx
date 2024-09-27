import { useState, useEffect } from "react";
import { BsCartPlus } from "react-icons/bs";
import { GoChevronUp } from "react-icons/go";
import { IoArrowUpCircleOutline } from "react-icons/io5";

const ScrollDescription = ({ product, handleAddToCart }) => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
     window.scrollTo({ top: 0, behavior: 'smooth' });
 };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="mx-auto w-[92%] md:w-[81%]">
        <div
          className={`${
            isVisible ? "opacity-100 z-20" : "opacity-0"
          } fixed w-[92%] md:w-[81%] border border-gray-400 shadow flex items-center justify-between bg-white bottom-7 rounded-xl transition-opacity duration-300`}
        >
          <div className="flex items-center gap-3">
            <div className="w-32">
              <img
                src={product?.image[0]}
                alt={product?.name}
                className="w-full object-cover rounded-l-xl"
              />
            </div>
            <div>
              <h2 className="md:text-lg font-medium text-sm md:mb-0 mb-2">
                {product?.name}
              </h2>
              <div className="flex gap-5">
                <div>
                  {product?.oldprice && (
                    <p className="text-gray-500 hidden md:block">
                      <strike>Rs. {product?.oldprice}</strike>
                    </p>
                  )}
                  <p className="font-medium md:font-semibold text-red-500 md:text-xl">
                    Rs. {product?.price}
                  </p>
                </div>
                {/* <div>
               <button onClick={handleAddToCart} className="flex items-center border-b-2 gap-1">Add to cart<BsCartPlus /></button>
              </div> */}
              </div>
            </div>
          </div>
          <div className="p-5">
            <button
              onClick={scrollToTop}
              className="md:hidden flex items-center gap-1 pb-3"
            >
              <IoArrowUpCircleOutline className="text-2xl" />
            </button>
            <button
              onClick={handleAddToCart}
              className="md:hidden flex items-center gap-1"
            >
              <BsCartPlus className="text-xl" />
            </button>
            <button
              onClick={handleAddToCart}
              className="p-2 px-8 bg-black text-white rounded hidden md:block"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <button
          onClick={scrollToTop}
          className={`${
            isVisible ? "opacity-100" : "opacity-0"
          } fixed bottom-16 right-12 text-3xl border rounded-full border-gray-300 shadow-md p-2 bg-white transition-opacity duration-300`}
        >
          <GoChevronUp />
        </button>
      </div>
    </>
  );
};

export default ScrollDescription;
