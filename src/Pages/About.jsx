import React from 'react'
import AboutBanner from '../Components/ForAbout/AboutBanner'
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const About = () => {
  return (
    <>
          <AboutBanner />
          <div className='container flex items-center py-20 gap-24'>
               <div className='flex-1'>
                    <img src="/images/about/about1.jpeg" alt="" className='' />
               </div>

               <div className='flex-1'>
                    <h2 className='font-semibold text-5xl pb-8 leading-[4rem]'>Unveiling Your Unique Fashion Journey</h2>
                    <p className='text-lg'>Welcome to Mixtas Store, where fashion meets individuality, and style is more than just clothing – it's a statement. Our passion for fashion drives us to curate a collection that celebrates diversity, embraces trends, and empowers you to express yourself through clothing.</p>
               </div>
          </div>

          <div className='container flex items-center gap-24'>
               <div className='flex-1 space-y-8'>
                    <div className='flex gap-6 '>
                         <div>
                              <i><LiaShippingFastSolid className='text-5xl rounded-full bg-black text-white p-3' /></i>
                         </div>
                         <div>
                              <h2 className='uppercase font-semibold pb-1'>Free Shipping</h2>
                              <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                         </div>
                    </div>
                    <div className='flex gap-6 '>
                         <div>
                              <i><MdOutlineCurrencyExchange className='text-5xl rounded-full bg-black text-white p-3' /></i>
                         </div>
                         <div>
                              <h2 className='uppercase font-semibold pb-1'>Free exchange</h2>
                              <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                         </div>
                    </div>
                    <div className='flex gap-6 '>
                         <div>
                              <i><TfiHeadphoneAlt className='text-5xl rounded-full bg-black text-white p-3' /></i>
                         </div>
                         <div>
                              <h2 className='uppercase font-semibold pb-1'>premuim support</h2>
                              <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                         </div>
                    </div>
               </div>

               <div className='flex-1'>
                    <img src="/images/about/about2.jpg" alt="" />
               </div>
          </div>

          <div className='container my-20 text-center border border-gray-300 rounded-md p-6 py-20 shadow-md'>
               <h2 className='text-4xl font-medium pb-4'>Quality is our priority</h2>
               <p className='w-[50%] mx-auto mb-16'>Our talented stylists have put together outfits that are perfect for the season. They've variety of ways to inspire your next fashion-forward look.</p>

               <div className='flex gap-5'>
                    <div className='flex-1'>
                         <img src="/images/about/highquality.png" alt="" className='size-16 mb-4 mx-auto' />
                         <h3 className='text-2xl font-medium pb-4'>High-Quality Materials</h3>
                         <p>Crafted with precision and excellence, our activewear is meticulously engineered using premium materials to ensure unmatched comfort and durability.</p>
                    </div>
                    <div className='flex-1'>
                         <img src="/images/about/design.png" alt="" className='size-16 mb-4 mx-auto' />
                         <h3 className='text-2xl font-medium pb-4'>Laconic Design</h3>
                         <p>Simplicity refined. Our activewear embodies the essence of minimalistic design, delivering effortless style that speaks volumes.</p>
                    </div>
                    <div className='flex-1'>
                         <img src="/images/about/size.png" alt="" className='size-16 mb-4 mx-auto' />
                         <h3 className='text-2xl font-medium pb-4'>Various Sizes</h3>
                         <p>Designed for every body and anyone, our activewear embraces diversity with a wide range of sizes and shapes, celebrating the beauty of individuality.</p>
                    </div>
               </div>
          </div>
    </>
  )
}

export default About