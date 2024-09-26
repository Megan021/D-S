import React from "react";
// import SubMenu from "../../Components/ForDashboard/SubMenu";
import { CiUser } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import AddressModel from "../../Components/ForMyAccount/AddressModel";
import OrderView from "../../Components/ForMyAccount/OrderView";

const MyAccount = () => {
  return (
    <>
      {/* <SubMenu /> */}
      {/* <div className='container text-center mt-14'>
          <h2 className='text-3xl font-semibold pb-3'>Hello User!</h2>
          <img src="/images/dashboard/welcomeUser.jpg" alt="" className='w-[80%] md:w-[30%] mx-auto' />
          <p className='md:w-[65%] mx-auto'>From your account dashboard you can view your recent orders, manage your shipping and billing address, and edit your account details. Please navigate through submenu above.</p>
     </div> */}

      <div className="container mt-16">

        <div className="flex gap-5 mb-5">

          <div className="flex-1">
            <Link to="/user-info">
              <div className="border-black flex gap-4 border bg-black text-white p-7 rounded-xl h-full relative group">
                <div>
                  <CiUser className="text-5xl bg-gray-200 rounded-2xl text-black p-2 mt-1" />
                </div>
                <div>
                  <h2 className="text-3xl pb-2 font-medium">
                    Welcome, Samantha
                  </h2>
                  <p>
                    Here are your details from your online store. You can change
                    and edit your profile here!
                  </p>
                </div>
                <button className="absolute top-3 right-4 group-hover:border-b flex items-center gap-1 font-medium">
                  Edit <GoArrowRight />
                </button>
              </div>
            </Link>
          </div>

          <div className="flex-1">
            <div className="flex gap-5 h-full">
              <div className="border border-black  hover:bg-black hover:text-white duration-200 rounded-xl text-center p-6 flex-1 relative">
                <Link to="/wishlist">
                  <i>
                    <CiHeart className="text-4xl mx-auto" />
                  </i>
                  <h2 className="text-xl font-medium pt-2">WishList</h2>
                  <p>You have 0 items on cart</p>
                  <button className="absolute top-2 right-3">
                    <BsArrowRight className="text-2xl" />
                  </button>
                </Link>
              </div>

              <div className="border border-black  hover:bg-black hover:text-white duration-200 rounded-xl text-center p-6 flex-1 relative">
                <Link to="/cart">
                  <i>
                    <FiShoppingBag className="stroke-1 text-4xl mx-auto" />
                  </i>
                  <h2 className="text-xl font-medium pt-2">Cart</h2>
                  <p>You have 1 items on cart</p>
                  <button className="absolute top-2 right-3">
                    <BsArrowRight className="text-2xl" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>

        <div className="flex gap-5">

          <div className="w-[60%]">
            <OrderView />
          </div>

          <div className="w-[40%]">
            <AddressModel />
          </div>

        </div>

      </div>
    </>
  );
};

export default MyAccount;
