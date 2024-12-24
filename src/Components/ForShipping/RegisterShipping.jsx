import React, { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";
import { LiaEditSolid } from "react-icons/lia";
import ShippingModel from "./ShippingModel";

const RegisterShipping = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
     setIsModalOpen(true);
   };
 
   // Function to close the modal
   const closeModal = () => {
     setIsModalOpen(false);
   };

  return (
    <>
      <div className="pb-8 text-sm">
        <h2 className="font-semibold text-xl mb-5">Deliver/Billing</h2>
        <div className="border border-gray-300 rounded-lg flex items-center">
          <div className="flex-1 p-6 relative">
            <div className="flex items-center pb-3 gap-3">
              <h2 className="font-medium">Deliver To</h2>
              <p className="uppercase text-green-500 p-0.5 px-3 bg-green-200 rounded-full">
                Shipping
              </p>
            </div>
            <div>
              <ul className="leading-7">
                <li>
                  <span className="font-medium">Name:</span> John Doe
                </li>
                <li className="flex items-center gap-2">
                  <BsTelephone /> 9801234567
                </li>
                <li className="flex items-center gap-2">
                  <GrMapLocation /> Chandragiri, Sankhamul, Kathmnadu India
                </li>
              </ul>
            </div>
            <div>
              <button onClick={openModal} className="absolute top-4 right-4 flex items-center gap-1 duration-300 hover:bg-gray-100 rounded-full p-0.5 px-2">
                <LiaEditSolid />
                Change
              </button>
            </div>
          </div>{" "}
          <hr className="h-32 bg-gray-300 w-0.5 my-4" />
          <div className="flex-1 p-6 relative">
            <div className="flex items-center pb-3 gap-3">
              <h2 className="font-medium">Bill To</h2>
              <p className="uppercase text-sky-500 p-0.5 px-3 bg-sky-200 rounded-full">
                Billing
              </p>
            </div>
            <div>
              <ul className="leading-7">
                <li>
                  <span className="font-medium">Name:</span> John Doe
                </li>
                <li className="flex items-center gap-2">
                  <BsTelephone /> 9801234567
                </li>
                <li className="flex items-center gap-2">
                  <GrMapLocation /> Chandragiri, Sankhamul, Kathmnadu India
                </li>
              </ul>
            </div>
            <div>
              <button onClick={openModal} className="absolute top-4 right-4 flex items-center gap-1 duration-300 hover:bg-gray-100 rounded-full p-0.5 px-2">
                <LiaEditSolid />
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <ShippingModel isOpen={isModalOpen} onClose={closeModal} />}
    </>
  );
};

export default RegisterShipping;
