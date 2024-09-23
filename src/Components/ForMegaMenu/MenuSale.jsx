import React, {forwardRef} from 'react'

const MenuSale = forwardRef((props, ref) => {
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

          <div className='w-[40%] relative'>
               <img src="/images/megamenu/imagesale.jpeg" alt="" className='border border-gray-200 rounded shadow' />
          </div>
     </div>
    </>
  )
})

export default MenuSale;