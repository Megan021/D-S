import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { BsFillFilterCircleFill } from "react-icons/bs";

const Filter = () => {
  return (
    <>
     <div className='py-20 md:flex justify-between'>
          <div className='flex items-center gap-3 mb-5 md:mb-0 '>
               <h2 className='font-medium text-xl '>Show: </h2>
               <div className='relative group'>
               <button className='border p-px px-2 rounded border-gray-400  text-base flex gap-1 items-center'>8<IoIosArrowDown /></button>
               <ul className='z-10 group-hover:block hidden absolute text-gray-700 pt-1 shadow w-full'>
                    <li className='rounded-t bg-gray-200 hover:bg-gray-300 p-2 block whitespace-nowrap cursor-pointer'>12</li>
                    <li className='rounded-t bg-gray-200 hover:bg-gray-300 p-2 block whitespace-nowrap cursor-pointer'>16</li>
                    <li className='rounded-t bg-gray-200 hover:bg-gray-300 p-2 block whitespace-nowrap cursor-pointer'>20</li>
               </ul>
               </div>
          </div>
          <div className='flex md:flex-nowrap flex-wrap gap-8 items-center'>
               <h2 className='font-medium text-xl'>Filter:</h2>

               <div className='relative group'>
               <button className='flex items-center justify-between border-b border-gray-500 pb-1 md:w-36'>Sort By <IoIosArrowDown /></button>
               <ul className='z-10 group-hover:block hidden absolute text-gray-700 pt-1 shadow md:w-full w-auto'>
                    <li className='rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer'>Best Match</li>
                    <li className='rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer'>Low to High</li>
                    <li className='rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer'>High to Low</li>
               </ul>
               </div>

               <div className='relative group'>
               <button className='flex items-center justify-between border-b border-gray-500 pb-1 md:w-36'>Brand <IoIosArrowDown /></button>
               <ul className='z-10 group-hover:block hidden absolute text-gray-700 pt-1 shadow md:w-full w-auto'>
                    <li className='rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer'>Levis</li>
                    <li className='rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer'>H&M</li>
                    <li className='rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer'>Adidas</li>
                    <li className='rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer'>Nike</li>
                    <li className='rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer'>Superdry</li>
               </ul>
               </div>

               <div className='relative group'>
               <button className='flex items-center justify-between border-b border-gray-500 pb-1 md:w-36'>Product Type <IoIosArrowDown /></button>
               <ul className='z-10 group-hover:block hidden absolute text-gray-700 pt-1 shadow md:w-full w-auto'>
                    <li className='rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer'>Pant</li>
                    <li className='rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer'>Jacket</li>
                    <li className='rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer'>T-shirt</li>
                    <li className='rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer'>Shirt</li>
                    <li className='rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer'>Shoes</li>
               </ul>
               </div>

               <div className='relative group'>
               <button className='flex items-center justify-between border-b border-gray-500 pb-1 md:w-36'>Size <IoIosArrowDown /></button>
               <ul className='z-10 group-hover:block hidden absolute text-gray-700 pt-1 shadow md:w-full w-auto'>
                    <li className='rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer'>S</li>
                    <li className='rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer'>M</li>
                    <li className='rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer'>L</li>
                    <li className='rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer'>XL</li>
               </ul>
               </div>

               <div className='relative group'>
               <button className='flex items-center justify-between border-b border-gray-500 pb-1 md:w-36'>Price <IoIosArrowDown /></button>
               <ul className='z-10 group-hover:block hidden absolute text-gray-700 pt-1 shadow md:w-full w-auto'>
                    <li className='rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer'>Rs.0 - Rs. 5k</li>
                    <li className='rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer'>Rs. 5k - Rs. 10k</li>
                    <li className='rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer'>Rs. 10k - Rs. 20k</li>
               </ul>
               </div>
               
               <button><BsFillFilterCircleFill className='text-3xl md:ml-5 ' /></button>
          </div>
          </div>
    </>
  )
}

export default Filter