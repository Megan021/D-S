import React from 'react'
import Hero from '../Components/ForLanding/Hero'
import TopCategory from '../Components/ForLanding/TopCategory'
import NewArrival from '../Components/ForLanding/NewArrival'
import BigSale from '../Components/ForLanding/BigSale'
import Banner from '../Components/ForLanding/Banner'
import BestSeller from '../Components/ForLanding/BestSeller'

const LandingPage = () => {
  return (
    <>
     <div className='md:space-y-20 space-y-16'>
     <Hero />
     <TopCategory />
     <NewArrival />
     <BigSale />
     <Banner />
     <BestSeller />
     </div>
    </>
  )
}

export default LandingPage