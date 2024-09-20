import React from 'react'

const FAQBanner = () => {
  return (
    <>
     <div className='bg-[url("/images/banner/bannerFAQ.jpg")] text-white text-center bg-cover bg-center'>
      <div className="py-14 bg-black bg-opacity-40 px-4 md:px-0">
        <h3 className="font-semibold text-sm">D&S Collection</h3>
        <h1 className="py-4 text-3xl md:text-4xl font-bold uppercase">
          FAQ Page
        </h1>
        <p className="md:w-[40%] mx-auto">
          A new season. A fresh cast. And a fall collection that combines
          comfort, community and connection.
        </p>
      </div>
    </div>
    </>
  )
}

export default FAQBanner