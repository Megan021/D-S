import React from 'react'
// import { Link } from 'react-router-dom'

const NewPassword = () => {
  return (
    <>
      <div className="container pt-14 md:w-[50%] lg:w-[30%] px-4 md:px-0">
        <div>
          <img
            src="/images/forgotpassword/image2.webp"
            alt=""
            className="w-[50%] mx-auto pb-5"
          />
        </div>
        <div>
          <h1 className="text-center font-medium text-2xl mb-8">
            Reset Password?
          </h1>
          {/* <p className="mb-8 font-light">
            Don't worry! It happens. Please enter the address associated with
            your account.
          </p> */}
          <div className="mb-5">
            <label htmlFor="" className="uppercase text-sm">
              New Password*
            </label>{" "}
            <br />
            <input
              type="text"
              className="p-2 border rounded border-gray-300 w-full"
              placeholder="Enter new password"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="" className="uppercase text-sm">
              Confirm Password*
            </label>{" "}
            <br />
            <input
              type="text"
              className="p-2 border rounded border-gray-300 w-full"
              placeholder="Enter confirm password"
            />
          </div>
          <button className="uppercase text-sm p-2 border border-black bg-black text-white w-full rounded hover:bg-white hover:text-black duration-300">
            Send Verification Code
          </button>
          {/* <Link to="/Login">
            <button className="underline underline-offset-2 font-light text-end w-full mt-4 mx-auto">
              Back to Login?
            </button>
          </Link> */}
        </div>
      </div>
    </>
  )
}

export default NewPassword