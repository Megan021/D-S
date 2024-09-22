import React from 'react'

const ShippingComp = () => {
  return (
    <>
     <div className='border-b pb-8'>
     <h2 className="font-semibold text-xl mb-5">Shipping Info</h2>
          <div>
            <div className="mb-5">
              <label htmlFor="" className="uppercase text-sm">
                Full Name*
              </label>
              <br />
              <input
                type="text"
                className="p-2 border rounded border-gray-300 w-full"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="" className="uppercase text-sm">
                Enter Address*
              </label>
              <br />
              <input
                type="text"
                className="p-2 border rounded border-gray-300 w-full"
              />
            </div>
            <div className="md:flex gap-5 mb-5">
              <div className="md:w-[50%]">
                <label htmlFor="" className="uppercase text-sm">
                  Enter City*
                </label>
                <br />
                <input
                  type="text"
                  className="p-2 border rounded border-gray-300 w-full"
                />
              </div>
              <div className="md:w-[50%]">
                <label htmlFor="" className="uppercase text-sm">
                  Enter State/Province*
                </label>
                <br />
                <input
                  type="text"
                  className="p-2 border rounded border-gray-300 w-full"
                />
              </div>
            </div>
            <div className="md:flex gap-5 mb-5">
              <div className="md:w-[50%]">
                <label htmlFor="" className="uppercase text-sm">
                  Enter Zip Code*
                </label>
                <br />
                <input
                  type="text"
                  className="p-2 border rounded border-gray-300 w-full"
                />
              </div>
              <div className="md:w-[50%]">
                <label htmlFor="" className="uppercase text-sm">
                  Enter Country*
                </label>
                <br />
                <input
                  type="text"
                  className="p-2 border rounded border-gray-300 w-full"
                />
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="" className="uppercase text-sm">
                Full Phone*
              </label>
              <br />
              <input
                type="text"
                className="p-2 border rounded border-gray-300 w-full"
              />
            </div>
          </div>
     </div>
    </>
  )
}

export default ShippingComp