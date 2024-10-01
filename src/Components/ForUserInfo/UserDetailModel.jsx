import React, { useRef, useEffect } from 'react';
import { BsArrowRight } from "react-icons/bs";
import { SlClose } from "react-icons/sl";
import { motion } from "framer-motion";

const UserDetailModel = ({ isOpen, toggleEditUserDetail }) => {
     const modalRef = useRef(null);
   
     const handleClickOutside = (event) => {
       if (modalRef.current && !modalRef.current.contains(event.target)) {
         toggleEditUserDetail();
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
        className='bg-white p-7 rounded-lg shadow-lg w-full max-w-screen-md relative' ref={modalRef}>
        <h2 className='text-2xl font-bold mb-6'>Edit Your Details</h2>
        <form className=''>
          <div className='mb-5'>
            <label className='text-sm font-semibold'>Full Name</label>
            <input type='text' className='border border-gray-300 p-2 w-full rounded-sm focus:outline-none hover:border-black' placeholder='Enter full name' />
          </div>
          <div className='mb-5'>
            <label className='text-sm font-semibold'>Date of Birth</label>
            <input type='date' className='border border-gray-300 p-2 w-full rounded-sm focus:outline-none hover:border-black' />
          </div>
          <div className='mb-10'>
            <label className='text-sm font-semibold'>Gender</label>
            <select className='border border-gray-300 p-3 w-full rounded-sm focus:outline-none hover:border-black'>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
            </select>
          </div>
          <div>
            <button type='submit' className='flex items-center justify-between bg-black border border-black text-white px-4 py-2 rounded-sm w-full mb-3'>
              Update Details<BsArrowRight className='text-2xl' />
            </button>
            <button type='button' className='flex items-center justify-between border border-black px-4 py-2 rounded-sm w-full' onClick={toggleEditUserDetail}>
              Cancel<BsArrowRight className='text-2xl' />
            </button>
          </div>
        </form>
      <button onClick={toggleEditUserDetail} className='absolute -top-3 -right-3 text-3xl bg-white rounded-full'><SlClose /></button>
      </motion.div>
    </div>
    </>
  )
}

export default UserDetailModel;