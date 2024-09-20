import React from 'react'

const PaymentInfo = () => {
  return (
    <>
     <div className='border rounded p-2 flex items-center gap-12 shadow'>
          <div className='border-r border-gray-300 pr-2'>
               <img src="/images/cart/delivery.jpg" alt="delivery truck" className='w-20'  />
          </div>
          <div>
               <h2>Cash on Delivery selected. Please proceed to Next Step.</h2>
          </div>
     </div>
    </>
  )
}

export default PaymentInfo