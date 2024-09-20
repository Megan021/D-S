import React from 'react'
import { TiSocialFacebook,TiSocialTwitter } from "react-icons/ti";
import { GoArrowUpRight } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-black text-white  mt-16 px-4 md:px-0'>
     <div className='container md:flex  justify-between py-16'>
          <div className='mb-16 md:mb-0'> 
               <h2 className='font-bold text-3xl pb-5'>D&S</h2>
               <ul className='leading-8 pb-5'>
                    <li>Address: Kathmandu, Nepal</li>
                    <li>Email: <span className='font-medium'>info@example.com</span></li>
                    <li>Phone: <span className='font-medium'>9801234567</span></li>
               </ul>
               <button className='flex items-center gap-2 border-b pb-1 hover:text-orange-500 hover:border-orange-500 duration-300'>Get direction<GoArrowUpRight /></button>

               <ul className='flex gap-3 mt-6'>
                    <li><FaInstagram className='text-4xl rounded-full border border-white p-2' /></li>
                    <li><TiSocialFacebook className='text-4xl rounded-full border border-white p-1' /></li>
                    <li><TiSocialTwitter className='text-4xl rounded-full border border-white p-1' /></li>
               </ul>
          </div>

          <div className='mb-16 md:mb-0'> 
               <h3 className='text-xl font-medium pb-5'>Quick Links</h3>
               <ul className='leading-8'>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
               </ul>
          </div>

          <div className='mb-16 md:mb-0'> 
               <h3 className='text-xl font-medium pb-5'>Help</h3>
               <ul className='leading-8'>
                    <li>Privacy Policy</li>
                    <li>Terms & Condition</li>
                    <li>FAQ's</li>
                    <Link to="/wishlist"><li>Wishlist</li></Link>
                    <Link to="/register"><li>Register</li></Link>
               </ul>
          </div>

          <div className='md:w-[30%]'>
               <h3 className='text-xl font-medium'>Sign Up for Email</h3>
               <p className='py-4'>Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!</p>
               <div className='border border-white rounded-lg flex justify-between p-1'>
               <input type="text" className='p-2 w-full bg-transparent focus:outline-none' placeholder='Enter your email...'  />
               <button className='bg-white text-black px-4 rounded'>Subscribe</button>
               </div>
          </div>

     </div>

     <div className='container md:flex border-t py-5 justify-between text-center'>
          <p className='mb-2 md:mb-0'>© 2024 D&S Store. All Rights Reserved</p>
          <p>Design and develop by SysQube Technology</p>
     </div>
    </div>
  )
}

export default Footer