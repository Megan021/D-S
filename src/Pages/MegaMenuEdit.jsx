import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { LiaEditSolid } from 'react-icons/lia'
import { SlArrowRight } from 'react-icons/sl'

const MegaMenuEdit = () => {
  return (
    <>
     <div className='p-5 flex gap-5'>
          <div className='bg-black text-white w-[17%] py-3 rounded-xl h-[80vh]'>
               <ul className='leading-8'>
                    <li className='px-5 w-full hover:bg-gray-500 flex items-center justify-between duration-200 cursor-pointer'>Shop<SlArrowRight className='text-sm' /></li>
                    <li className='px-5 w-full hover:bg-gray-500 flex items-center justify-between duration-200 cursor-pointer'>Sale<SlArrowRight className='text-sm' /></li>
                    <li className='px-5 w-full hover:bg-gray-500 flex items-center justify-between duration-200 cursor-pointer'>New & Trending<SlArrowRight className='text-sm' /></li>
                    <li className='group px-5 w-full hover:bg-gray-500 flex items-center justify-between duration-200 cursor-pointer'>Add New Section<FiPlus className='group-hover:rotate-90 duration-300' /></li>
               </ul>
          </div>

          <div className='border w-[83%] border-black rounded-xl p-5'>
               <h2 className='text-xl font-semibold flex items-center gap-3'>SHOP <LiaEditSolid /></h2>

               <div>
                    <div>
                         
                    </div>
               </div>
          </div>
     </div>
    </>
  )
}

export default MegaMenuEdit