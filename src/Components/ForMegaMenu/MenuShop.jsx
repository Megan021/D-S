import React, { forwardRef } from 'react'
import { GoArrowUpRight } from "react-icons/go";

const MenuShop = forwardRef((props, ref) => {
     return (
       <>
        <div ref={ref} className='flex gap-12 p-8 justify-between'>
             <div>
                  <h2 className='text-lg font-medium mb-4'>Clothing</h2>
                  <ul className='leading-8'>
                       <li className='hover:underline'>T-Shirt</li>
                       <li className='hover:underline'>Hoodies</li>
                       <li className='hover:underline'>Pants</li>
                       <li className='hover:underline'>Shorts</li>
                       <li className='hover:underline'>Jackets</li>
                  </ul>
             </div>
             <div>
                  <h2 className='text-lg font-medium mb-4'>Shoes</h2>
                  <ul className='leading-8'>
                       <li className='hover:underline'>Sneakers</li>
                       <li className='hover:underline'>Running</li>
                       <li className='hover:underline'>Slippers</li>
                       <li className='hover:underline'>Hiking</li>
                       <li className='hover:underline'>Sports</li>
                  </ul>
             </div>
             <div>
                  <h2 className='text-lg font-medium mb-4'>Accessories</h2>
                  <ul className='leading-8'>
                       <li className='hover:underline'>Bags</li>
                       <li className='hover:underline'>Gloves</li>
                       <li className='hover:underline'>Hats</li>
                       <li className='hover:underline'>Socks</li>
                  </ul>
             </div>
   
             <div className='w-[40%] relative'>
                  <img src="/images/megamenu/image1.jpg" alt="" className='' />
               {/* <button className='absolute bottom-3 left-5 bg-white bg-opacity-40 hover:bg-opacity-50 px-2 flex items-center gap-1'>Shop <GoArrowUpRight /></button> */}
               <button className='absolute top-3 left-3 bg-black text-white text-sm rounded p-1 px-2'>Shop</button>
             </div>
        </div>
       </>
     )
   })

export default MenuShop