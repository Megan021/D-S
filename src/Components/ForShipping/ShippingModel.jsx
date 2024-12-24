import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const ShippingModel = ({ isOpen, onClose }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
    } else {
      window.removeEventListener("click", handleOutsideClick);
    }
    return () => {
      window.removeEventListener("click", handleOutsideClick);
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
          className="bg-white rounded-lg shadow-lg w-[90vh] p-7"
        >
          <div className="flex items-center justify-between border-b border-gray-400 pb-4 mb-7">
          <h2>Change Address</h2>
          <button><IoClose onClick={onClose} className="text-2xl" /></button>
          </div>
            <div className="grid">
              <div className="mb-5 w-full">
                <label htmlFor="" className="uppercase text-sm">
                  Full Name*
                </label>
                <br />
                <input
                  type="text"
                  className="p-2 border rounded border-gray-300 w-full"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="" className="uppercase text-sm">
                  Enter Address*
                </label>
                <br />
                <input
                  type="text"
                  className="p-2 border rounded border-gray-300 w-full"
                />
              </div>
              <div className="md:flex gap-5 mb-5">
                <div className="md:w-[50%] mb-5 md:mb-auto">
                  <label htmlFor="" className="uppercase text-sm">
                    Enter City*
                  </label>
                  <br />
                  <input
                    type="text"
                    className="p-2 border rounded border-gray-300 w-full"
                  />
                </div>
                <div className="md:w-[50%] mb-5 md:mb-auto">
                  <label htmlFor="" className="uppercase text-sm">
                    Enter State/Province*
                  </label>
                  <br />
                  <input
                    type="text"
                    className="p-2 border rounded border-gray-300 w-full"
                  />
                </div>
              </div>
              <div className="md:flex gap-5 mb-5">
                <div className="md:w-[50%] mb-5 md:mb-auto">
                  <label htmlFor="" className="uppercase text-sm">
                    Enter Zip Code*
                  </label>
                  <br />
                  <input
                    type="text"
                    className="p-2 border rounded border-gray-300 w-full"
                  />
                </div>
                <div className="md:w-[50%] mb-5 md:mb-auto">
                  <label htmlFor="" className="uppercase text-sm">
                    Enter Country*
                  </label>
                  <br />
                  <input
                    type="text"
                    className="p-2 border rounded border-gray-300 w-full"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="" className="uppercase text-sm">
                  Full Phone*
                </label>
                <br />
                <input
                  type="text"
                  className="p-2 border rounded border-gray-300 w-full"
                />
              </div>
              <div><button className="bg-black text-white p-2 w-full rounded mt-5">Submit Change</button></div>
            </div>
        </motion.div>
      </div>
    </>
  );
};

export default ShippingModel;
