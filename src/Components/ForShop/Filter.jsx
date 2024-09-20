import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { BsFillFilterCircleFill } from "react-icons/bs";

const Filter = () => {
  return (
    <>
     <div className='py-20 md:flex justify-between'>
          <div className='flex items-center gap-3 mb-5 md:mb-0'>
               <h2 className='font-medium text-xl '>Show: </h2>
               <button className='border p-px px-2 rounded border-gray-400  text-base flex gap-1 items-center'>8<IoIosArrowDown /></button>
          </div>
          <div className='md:flex grid gap-8 items-center '>
               <h2 className='font-medium text-xl'>Filter:</h2>
               <button className='flex items-center justify-between border-b border-gray-500 pb-1 md:w-36'>Sort By <IoIosArrowDown /></button>
               <button className='flex items-center justify-between border-b border-gray-500 pb-1 md:w-36'>Brand <IoIosArrowDown /></button>
               <button className='flex items-center justify-between border-b border-gray-500 pb-1 md:w-36'>Product Type <IoIosArrowDown /></button>
               <button className='flex items-center justify-between border-b border-gray-500 pb-1 md:w-36'>Size <IoIosArrowDown /></button>
               <button className='flex items-center justify-between border-b border-gray-500 pb-1 md:w-36'>Price <IoIosArrowDown /></button>
               <button><BsFillFilterCircleFill className='text-3xl md:ml-5 ' /></button>
          </div>

          </div>
    </>
  )
}

export default Filter