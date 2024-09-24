import React from 'react'
import SubMenu from '../../Components/ForDashboard/SubMenu'

const OrderDetail = () => {
  return (
    <>
    <SubMenu />
     <div className='container mt-16 border border-gray-200 shadow rounded-lg p-8 md:w-[60%]'>
     <h2 className="text-3xl font-bold mb-8 uppercase">My Orders</h2>

     <div className='grid grid-cols-5 gap-5 text-center items-center'>
  <div className='font-bold py-3 border-y'>Order</div>
  <div className='font-bold border-y'>Date</div>
  <div className='font-bold border-y'>Status</div>
  <div className='font-bold border-y'>Total</div>
  <div className='font-bold border-y'>Action</div>

  <div>#1</div>
  <div>March 1</div>
  <div>pending</div>
  <div>Rs. 5000</div>
  <div className='p-1 bg-black text-white rounded'>View Order</div>

  <div>#2</div>
  <div>March 1</div>
  <div>pending</div>
  <div>Rs. 5000</div>
  <div className='p-1 bg-black text-white rounded'>View Order</div>

  <div>#3</div>
  <div>March 1</div>
  <div>pending</div>
  <div>Rs. 5000</div>
  <div className='p-1 bg-black text-white rounded'>View Order</div>
</div>

     </div>
    </>
  )
}

export default OrderDetail