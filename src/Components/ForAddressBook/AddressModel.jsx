import React, { useRef, useEffect } from 'react';
import { BsArrowRight } from "react-icons/bs";
import { SlClose } from "react-icons/sl";
import { motion } from "framer-motion";

const AddressModel = ({ isOpen, toggleEditAddress }) => {
     const modalRef = useRef(null);
   
     const handleClickOutside = (event) => {
       if (modalRef.current && !modalRef.current.contains(event.target)) {
         toggleEditAddress();
       }
     };
   
     useEffect(() => {
       if (isOpen) {
         document.addEventListener('mousedown', handleClickOutside);
       } else {
         document.removeEventListener('mousedown', handleClickOutside);
       }
       return () => {
         document.removeEventListener('mousedown', handleClickOutside);
       };
     }, [isOpen]);
   
     if (!isOpen) return null;

  return (
    <>
     <div className='fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50 px-4 md:px-0'>
     <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }} 
        className='bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-screen-md relative' ref={modalRef}>
        <h2 className='text-2xl font-bold mb-6'>Edit Your Details</h2>
        <form>
          <div className='mb-5'>
            <label className='text-sm font-semibold'>Full Name</label>
            <input type='text' className='border border-gray-300 p-2 w-full rounded-sm focus:outline-none hover:border-black' placeholder='Enter full name' />
          </div>
          <div className='mb-5'>
            <label className='text-sm font-semibold'>Enter Address</label>
            <input type='text' className='border border-gray-300 p-2 w-full rounded-sm focus:outline-none hover:border-black' placeholder='Enter address' />
          </div>

          <div className='flex mb-5 gap-5'>
          <div className='w-full'>
            <label className='text-sm font-semibold'>Enter City</label>
            <input type='text' className='border border-gray-300 p-2 w-full rounded-sm focus:outline-none hover:border-black' placeholder='Enter city' />
          </div>
          <div className='w-full'>
            <label className='text-sm font-semibold'>Enter State/Province</label>
            <input type='text' className='border border-gray-300 p-2 w-full rounded-sm focus:outline-none hover:border-black' placeholder='Enter state/province' />
          </div>
          </div>

          <div className='flex mb-5 gap-5'>
          <div className='w-full'>
            <label className='text-sm font-semibold'>Enter Zip Code</label>
            <input type='text' className='border border-gray-300 p-2 w-full rounded-sm focus:outline-none hover:border-black' placeholder='Enter zip code' />
          </div>
          <div className='w-full'>
            <label className='text-sm font-semibold'>Enter Country</label>
            <input type='text' className='border border-gray-300 p-2 w-full rounded-sm focus:outline-none hover:border-black' placeholder='Enter country' />
          </div>
          </div>

          <div className='mb-10'>
            <label className='text-sm font-semibold'>Phone</label>
            <input type='text' className='border border-gray-300 p-2 w-full rounded-sm focus:outline-none hover:border-black' placeholder='Enter phone' />
          </div>

          <div>
            <button type='submit' className='flex items-center justify-between bg-black border border-black text-white px-4 py-2 rounded-sm w-full mb-3'>
              Update Details<BsArrowRight className='text-2xl' />
            </button>
            <button type='button' className='flex items-center justify-between border border-black px-4 py-2 rounded-sm w-full' onClick={toggleEditAddress}>
              Cancel<BsArrowRight className='text-2xl' />
            </button>
          </div>
        </form>
      <button onClick={toggleEditAddress} className='absolute -top-3 -right-3 text-3xl bg-white rounded-full'><SlClose /></button>
      </motion.div>
     </div>
    </>
  )
}

export default AddressModel;