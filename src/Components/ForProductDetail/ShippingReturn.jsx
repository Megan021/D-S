import React from "react";
import { motion } from "framer-motion";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";

const ShippingReturn = () => {
  return (
    <>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden bg-gray-100 p-4 mt-2 border border-gray-200"
      >
        <div className="">
          <div className="flex gap-4 mb-5">
            <div>
              <i>
                <LiaShippingFastSolid className="text-3xl rounded-full border border-black p-1" />
              </i>
            </div>
            <div>
              <h2 className="font-medium">Fast Shipping</h2>
              <p>Fast delivery all over Nepal.</p>
            </div>
          </div>
          <div className="flex gap-4 mb-5">
            <div>
              <i>
                <MdOutlineCurrencyExchange className="text-3xl rounded-full border border-black p-1" />
              </i>
            </div>
            <div>
              <h2 className="font-medium">Return Policy</h2>
              <p>Return and exchange goods are not supported.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <i>
                <AiOutlineSafety className="text-3xl rounded-full border border-black p-1" />
              </i>
            </div>
            <div>
              <h2 className="font-medium">Shopping Security</h2>
              <p>Secure your shopping payment.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ShippingReturn;
