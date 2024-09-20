import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container pt-14 md:w-[50%] lg:w-[30%] px-4 md:px-0">
        <h1 className="text-center font-medium text-2xl mb-8">Login</h1>
        <div className="mb-5">
          <label htmlFor="" className="uppercase text-sm">
            Email*
          </label> <br />
          <input type="text" className="p-2 border rounded border-gray-300 w-full" />
        </div>
        <div className="mb-5">
          <label htmlFor="" className="uppercase text-sm">
            password*
          </label> <br />
          <input type="text" className="p-2 border rounded border-gray-300 w-full" />
        </div>
        <button className="uppercase text-sm p-2 border border-black bg-black text-white w-full rounded hover:bg-white hover:text-black duration-300">login</button>
        <button className="underline underline-offset-2 font-light text-center w-full mt-4 mx-auto">Forgot Your Password?</button> 
        <hr className="my-8 border border-gray-300" />

        <div className="text-sm">
          <h2 className="text-center font-medium text-2xl mb-8">Sign Up</h2>
          <h3 className="font-medium pb-4">Enjoy The Benefits Of Registering:</h3>
          <ul className="list-disc pl-4 leading-6">
               <li className="mb-2">Order: view Order History, track and manage purchases and returns.</li>
               <li className="mb-2">Address Book and Card Wallet: safely store delivery and payment details for faster checkout</li>
               <li>Saved for later: wish list your preferred items and track their availability</li>
          </ul>
          <Link to="/register"><button className="uppercase text-sm p-2 border border-black w-full rounded mt-8 hover:bg-black hover:text-white duration-300">sign up now!</button></Link>
        </div>
      </div>
    </>
  );
};

export default Login;
