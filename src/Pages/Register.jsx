import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
     <div className="container pt-14 md:w-[50%] lg:w-[30%] px-4 md:px-0">
     <h1 className="text-center font-medium text-2xl mb-8">Register</h1>
        <div className="mb-5">
          <label htmlFor="" className="uppercase text-sm">
            Full Name*
          </label> <br />
          <input type="text" className="p-2 border rounded border-gray-300 w-full" />
        </div>
        <div className="mb-5">
          <label htmlFor="" className="uppercase text-sm">
            Email*
          </label> <br />
          <input type="email" className="p-2 border rounded border-gray-300 w-full" />
        </div>
        <div className="mb-5">
          <label htmlFor="" className="uppercase text-sm">
            Phone*
          </label> <br />
          <input type="text" className="p-2 border rounded border-gray-300 w-full" />
        </div>
        <div className="mb-5">
          <label htmlFor="" className="uppercase text-sm">
            password*
          </label> <br />
          <input type="password" className="p-2 border rounded border-gray-300 w-full" />
        </div>
        <div className="mb-5">
          <label htmlFor="" className="uppercase text-sm">
            Comform password*
          </label> <br />
          <input type="password" className="p-2 border rounded border-gray-300 w-full" />
        </div>
        <button className="uppercase text-sm p-2 border border-black bg-black text-white w-full rounded hover:bg-white hover:text-black duration-300">login</button>
        <p className='text-sm mt-5 font-light'>Already have an account? <Link to="/login"><button className='underline'>Log in instead!</button></Link></p>
     </div>
    </>
  )
}

export default Register