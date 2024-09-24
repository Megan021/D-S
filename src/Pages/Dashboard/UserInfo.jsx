import React from 'react'
import SubMenu from '../../Components/ForDashboard/SubMenu'

const UserInfo = () => {
  return (
    <>
    <SubMenu />
     <div className='container mt-16 border border-gray-200 shadow rounded-lg p-8 md:w-[50%]'>
          <h2 className='text-3xl font-bold mb-3 uppercase'>My Details</h2>
          <p className=''>Feel free to edit any of your details below so your account is up to date.</p>
          <div className='uppercase my-12'>
               <h2 className='text-2xl font-bold mb-3 '>Details</h2>
               <div className='leading-8'>
                    <h3>Name</h3>
                    <h3>Date Of Birth</h3>
                    <h3>Gender</h3>
                    <button className='font-semibold underline underline-offset-2'>Edit</button>
               </div>
          </div>

          <div className='mt-12'>
               <h2 className='text-2xl font-bold mb-3 uppercase'>Login Details</h2>
               <div className='leading-8'>
                    <h3>example@gmail.com</h3>
                    <h3>********</h3>
                    <button className='font-semibold underline underline-offset-2'>Edit</button>
               </div>
          </div>
     </div>
    </>
  )
}

export default UserInfo