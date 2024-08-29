import React from 'react'

const AboutBanner = () => {
  return (
    <>
     <div className='bg-[url("/images/shops/shopbanner.webp")] text-white text-center bg-top bg-fixed'>
          <div className='py-14 bg-black bg-opacity-40 px-4 md:px-0'>
               <h3 className='font-semibold text-sm'>D&S Collection</h3>
               <h1 className='py-4 text-3xl md:text-4xl font-bold uppercase'>About Page</h1>
               <p className='md:w-[40%] mx-auto'>A new season. A fresh cast. And a fall collection that combines comfort, community and connection.</p>
          </div>
     </div>
    </>
  )
}

export default AboutBanner