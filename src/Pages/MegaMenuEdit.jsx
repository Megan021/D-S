import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { LiaEdit, LiaEditSolid } from "react-icons/lia";
import { SlArrowRight } from "react-icons/sl";

const MegaMenuEdit = () => {
  const [edit, setEdit] = useState(false);
  const [heading, setHeading] = useState("SHOP");

  const handleSave = () => {
    setEdit(false);
  };

  const menuItems = [
    { label: "Shop", icon: <SlArrowRight className="text-sm" /> },
    { label: "Sale", icon: <SlArrowRight className="text-sm" /> },
    { label: "New & Trending", icon: <SlArrowRight className="text-sm" /> },
  ];
  return (
    <>
      <div className="p-5 flex gap-5 items-center w-[80%]">
        <div className="bg-black text-white w-[17%] rounded-xl">
          <ul className="leading-8">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="px-5 p-1 w-full hover:bg-gray-500 rounded-xl flex items-center justify-between duration-200 cursor-pointer"
              >
                {item.label}
                {item.icon}
              </li>
            ))}
            <li className="group px-5 p-1 w-full hover:bg-gray-500 rounded-xl flex items-center justify-between duration-200 cursor-pointer">
              Add New Section
              <FiPlus className="group-hover:rotate-90 duration-300" />
            </li>
          </ul>
        </div>

        <div className="border w-[83%] border-black rounded-xl p-5 h-[65vh] overflow-y-scroll custom-scrollbar">
          <div className="flex items-center gap-3 text-xl">
            {edit ? (
              <input
                type="text"
                value={heading}
                onChange={(e) => setHeading(e.target.value)} // Update text state
                onBlur={handleSave} // Save when input loses focus
                className="border rounded px-2 py-1 text-lg focus:outline-none w-auto"
                autoFocus // Automatically focus the input field
              />
            ) : (
              <h2 className="font-semibold px-2 py-1">{heading}</h2>
            )}
            <button onClick={() => setEdit(true)}>
              <LiaEditSolid />
            </button>
          </div>

          <div className="mt-10 grid grid-cols-5 gap-5 ">
            <div className="border hover:border-black p-5 rounded-lg border-gray-300 duration-200 relative h-full group">
              <h2 className="font-medium text-lg pb-5">Clothing</h2>
              <ul className="leading-8">
                <li>T-Shirt</li>
                <li>Hoodies</li>
                <li>Pants</li>
                <li>Shorts</li>
                <li>Jackets</li>
              </ul>
              <button className="absolute top-3 right-3 text-lg hidden group-hover:block">
                <LiaEdit />
              </button>
            </div>
            <div className="border hover:border-black p-5 rounded-lg border-gray-300 duration-200 relative h-full group">
              <h2 className="font-medium text-lg pb-5">Shoes</h2>
              <ul className="leading-8">
                <li>T-Shirt</li>
                <li>Hoodies</li>
                <li>Pants</li>
                <li>Shorts</li>
                <li>Jackets</li>
              </ul>
              <button className="absolute top-3 right-3 text-lg hidden group-hover:block">
                <LiaEdit />
              </button>
            </div>
            <div className="border hover:border-black p-5 rounded-lg border-gray-300 duration-200 relative h-full group">
              <h2 className="font-medium text-lg pb-5">Accessories</h2>
              <ul className="leading-8">
                <li>T-Shirt</li>
                <li>Hoodies</li>
                <li>Pants</li>
                <li>Shorts</li>
                <li>Jackets</li>
              </ul>
              <button className="absolute top-3 right-3 text-lg hidden group-hover:block">
                <LiaEdit />
              </button>
            </div>
            <div className="border border-dashed hover:border-black p-5 rounded-lg border-gray-300 duration-200 relative h-full group">
              <p>Add New Section</p>
            </div>
            <div className="border hover:border-black rounded-lg border-gray-300 duration-200 relative h-full group">
              <img
                src="/images/megamenu/imagesale2.jpg"
                alt=""
                className="h-[45vh] w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenuEdit;
