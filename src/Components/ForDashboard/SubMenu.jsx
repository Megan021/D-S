import React from 'react';
import { IoLogOutOutline } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';

const SubMenu = () => {
  const location = useLocation();

  return (
    <div className='border-b border-gray-200 py-4'>
      <div className='container flex justify-between items-center'>
        <div className='flex gap-8'>
          <Link to="/user-info">
            <button
              className={`p-1 px-4 bg-gray-100 hover:bg-gray-300 duration-200 rounded-xl ${
                location.pathname === "/user-info" ? "bg-gray-500 text-white" : ""
              }`}
            >
              Personal Information
            </button>
          </Link>

          <Link to="/user-address">
            <button
              className={`p-1 px-4 bg-gray-100 hover:bg-gray-300 duration-200 rounded-xl ${
                location.pathname === "/user-address" ? "bg-gray-500 text-white" : ""
              }`}
            >
              Add First Address
            </button>
          </Link>

          <Link to="/order-detail">
            <button
              className={`p-1 px-4 bg-gray-100 hover:bg-gray-300 duration-200 rounded-xl ${
                location.pathname === "/order-detail" ? "bg-gray-500 text-white" : ""
              }`}
            >
              Order History
            </button>
          </Link>

          <Link to="/wishlist">
            <button
              className={`p-1 px-4 bg-gray-100 hover:bg-gray-300 duration-200 rounded-xl ${
                location.pathname === "/wishlist" ? "bg-gray-500 text-white" : ""
              }`}
            >
              Wishlist
            </button>
          </Link>
        </div>

        <div>
          <Link to="/">
            <button className='flex items-center gap-1'>
              Logout <IoLogOutOutline className='text-xl' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubMenu;
