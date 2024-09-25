import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const OrderDetailModel = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;
  // Close modal if clicked outside of the modal content
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose(); // Close the modal
    }
  };

  // Attach event listener to handle outside clicks when the modal is open
  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
    } else {
      window.removeEventListener("click", handleOutsideClick);
    }
    return () => {
      window.removeEventListener("click", handleOutsideClick); // Cleanup on component unmount
    };
  }, [isOpen]);

  return (
    <>
      <div
        id="modal-overlay"
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 md:px-0"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-lg md:w-[820px] lg:max-w-screen-lg relative gap-4 p-5"
        >
          <div className="flex justify-between items-center w-full border-b pb-4">
            <div>
              <h2>Order Id: #1245HSK</h2>
            </div>
            <div>
              <h2>Estimated arrival: September 28, 2024</h2>
            </div>
            <div>
              <button className="p-1 px-3 rounded-xl bg-orange-100 text-orange-600 font-semibold flex items-center">
                <GoDotFill />
                {product?.status}
              </button>
            </div>
          </div>

            <div className="">
              <div className="border border-gray-300 rounded-xl mt-8 flex gap-5 items-center relative">
                <div>
                  <img
                    src={product?.image[0]}
                    alt={product?.name}
                    className="size-36 object-cover rounded-l-xl"
                  />
                </div>
                <div>
                  <p>{product?.sku}</p>
                  <h2 className="font-medium">{product?.name}</h2>
                  <p className="font-semibold">Rs. {product?.price}</p>
                  <p className="font-semibold">{product?.size[0]}</p>
                  <p className="absolute right-3 flex gap-3 items-center bottom-3">
                    Cash on Delivery
                    <img
                      src="/images/orderDetail/cashondelivery.png"
                      alt="cash on delivery"
                      className="w-8"
                    />
                  </p>
                </div>
              </div>

              <div className="border border-gray-300 rounded-xl mt-4 my-8 flex gap-5 items-center relative">
                <div>
                  <img
                    src={product?.image[1]}
                    alt={product?.name}
                    className="size-36 object-cover rounded-l-xl"
                  />
                </div>
                <div>
                  <p>{product?.sku}</p>
                  <h2 className="font-medium">{product?.name}</h2>
                  <p className="font-semibold">Rs. {product?.price}</p>
                  <p className="font-semibold">{product?.size[0]}</p>
                  <p className="absolute right-3 flex gap-3 items-center bottom-3">
                    Cash on Delivery
                    <img
                      src="/images/orderDetail/cashondelivery.png"
                      alt="cash on delivery"
                      className="w-8"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[35% flex items-start justify-end border-t mt-4 border-gray-300 pt-4">
            {/* <div>
              <Link to={`/product-detail/${product?.id}`}>
                <button className="p-2 px-5 bg-gray-100 font-medium rounded-full hover:bg-gray-200 duration-300">
                  Product Detail
                </button>
              </Link>
            </div> */}
            <div className="w-full border border-gray-300 p-2 rounded-xl">
              <div className="flex justify-between pb-1">
                <h2 className="font-medium">Sub-total: </h2>
                <span className="font-medium">Rs. {product?.price * 2}</span>
              </div>
              <div className="flex justify-between border-b pb-2 mb-2">
                <h2 className="font-medium">Delivery: </h2>
                <span className="font-medium">Rs. 100</span>
              </div>
              <div className="flex justify-between">
                <h2 className="font-medium">Grand-Total: </h2>
                <span className="font-bold">
                  Rs. {product?.price * 2 + 100}
                </span>
              </div>
            </div>
          </div>

          
        </motion.div>
      </div>
    </>
  );
};

export default OrderDetailModel;
