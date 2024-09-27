import React, { useState } from "react";
import { GoArrowRight, GoPlus } from "react-icons/go";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import AddressModel from "../ForAddressBook/AddressModel";

const AddressModelDashboard = () => {
     const [isEditAddress, setIsditAddress] = useState(false);

     const toggleEditAddress = () => {
       setIsditAddress(!isEditAddress);
     }

  return (
    <>
      <div className="border border-black rounded-xl h-full p-6">
        <div className="flex border-b border-gray-300 pb-3 mb-5 justify-between">
          <h2 className="text-xl uppercase font-semibold ">Address Book</h2>
          <Link to="/user-address">
          <button className="flex items-center gap-1 font-medium hover:border-b border-black">
            View & Edit <GoArrowRight />
          </button>
          </Link>
        </div>

        <div>
        <div className="border border-black bg-white p-5 mt-7 relative rounded-xl ">
          <h2 className="font-semibold">Brenna Cotton</h2>
          <p className="py-3">
            263 West Rocky Nobel Boulevard Veniam ea possimus quis molesti, IA,
            25880, US +17672952627
          </p>
          <button className="font-medium underline underline-offset-2 mr-3">Edit</button>
          <button className="font-medium underline underline-offset-2">Remove</button>
          <button className="absolute -top-2 -right-2 text-3xl bg-white rounded-full"><IoCheckmarkCircleSharp /></button>
        </div>

        <div onClick={toggleEditAddress} className="flex justify-between border border-black bg-black text-white rounded-xl p-3 items-center mt-5">
          <h2 className="font-medium text-lg">New Address</h2>
          <button><GoPlus className="text-3xl" /></button>
          <AddressModel
        isOpen={isEditAddress}
        toggleEditAddress={toggleEditAddress}
         />
        </div>

        {/* <div onClick={toggleEditAddress} className="border border-gray-300 bg-black text-white rounded-xl hover:border-black p-5 mt-8">
          <h3 className="pb-5">New Address</h3>
          <i>
            <GoPlus className="text-4xl" />
          </i>
        </div> */}

        </div>
      </div>
    </>
  );
};

export default AddressModelDashboard;
