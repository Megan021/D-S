import React from "react";
import SubMenu from "../../Components/ForDashboard/SubMenu";
import { GoPlus } from "react-icons/go";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const AddressBook = () => {
  return (
    <>
      <SubMenu />
      <div className="container mt-16 border border-gray-200 shadow rounded-lg p-8 md:w-[60%]">
        <h2 className="text-3xl font-bold mb-3 uppercase">Address Book</h2>
        <p>
          Feel free to edit any of your address details below so your account is
          up to date.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
        <div className="border border-gray-300 hover:border-black p-5 mt-8">
          <h3 className="pb-20">New Address</h3>
          <i>
            <GoPlus className="text-4xl" />
          </i>
        </div>

        <div className="border border-black p-5 mt-8 relative">
          <h2 className="font-semibold">Brenna Cotton</h2>
          <p className="py-3">
            263 West Rocky Nobel Boulevard Veniam ea possimus quis molesti, IA,
            25880, US +17672952627
          </p>
          <button className="font-medium underline underline-offset-2 mr-3">Edit</button>
          <button className="font-medium underline underline-offset-2">Remove</button>
          <button className="absolute -top-2 -right-2 text-3xl bg-white rounded-full"><IoCheckmarkCircleSharp /></button>
        </div>
        </div>
      </div>
    </>
  );
};

export default AddressBook;
