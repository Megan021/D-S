import React, {forwardRef} from 'react'

const MenuNewTrending = forwardRef((props, ref) => {
     return (
       <>
        <div ref={ref} className='flex gap-12 p-8 justify-between'>
             <div>
                  <h2 className='text-lg font-medium mb-4'>New Men's</h2>
                  <ul className='leading-8'>
                       <li className='hover:underline'>T-Shirt</li>
                       <li className='hover:underline'>Jackets</li>
                       <li className='hover:underline'>Hoodies</li>
                       <li className='hover:underline'>Shoes</li>
                       <li className='hover:underline'>Pants</li>
                       <li className='hover:underline'>Tracksuits</li>
                  </ul>
             </div>
             <div>
                  <h2 className='text-lg font-medium mb-4'>Trending</h2>
                  <ul className='leading-8'>
                       <li className='hover:underline'>Sneakers</li>
                       <li className='hover:underline'>T-Shirt</li>
                       <li className='hover:underline'>Coat</li>
                       <li className='hover:underline'>Hoodies</li>
                       <li className='hover:underline'>Shirt</li>
                  </ul>
             </div>
   
             <div className='relative'>
                  <img src="/images/megamenu/imagesale2.jpg" alt="new and trending clothing" className="w-44" />
                  <button className='absolute bottom-3 left-3 bg-black text-white text-sm rounded p-1 px-2'>Shop Now</button>
             </div>
        </div>
       </>
     )
   })

export default MenuNewTrending;