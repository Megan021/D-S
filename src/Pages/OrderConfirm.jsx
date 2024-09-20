import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const OrderConfirm = () => {
  return (
    <>
     <div className='container mt-16 text-center'>
          <img src="/images/cart/order-confirm.gif" alt="order confirm" className='w-96 mx-auto' />
          <h2 className='py-5'>Product Order Successfully!</h2>
          <Link to="/">
           <button className='p-2 bg-black text-white px-4 rounded flex items-center mx-auto gap-2'><FaArrowLeft />Continue Shopping</button>
          </Link>
     </div>
    </>
  )
}

export default OrderConfirm