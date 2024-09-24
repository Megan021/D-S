import React from 'react'
import SubMenu from '../../Components/ForDashboard/SubMenu';

const MyAccount = () => {
  return (
    <>
    <SubMenu />
     <div className='container text-center mt-14'>
          <h2 className='text-3xl font-semibold pb-3'>Hello User!</h2>
          <img src="/images/dashboard/welcomeUser.jpg" alt="" className='w-[25%] mx-auto' />
          <p className='w-[65%] mx-auto'>From your account dashboard you can view your recent orders, manage your shipping and billing address, and edit your account details. Please navigate through submenu above.</p>
     </div>
    </>
  )
}

export default MyAccount;