import React from 'react'
import SubMenu from '../../Components/ForDashboard/SubMenu'
import Product from "../../Data/Product.json"
const Review = () => {
     const newProduct = Product.filter((product) => product?.tag === "new");

  return (
    <>
    <SubMenu />
     <div className='container'>
          {/* <div>
               <div>
               <img src={newProduct?.image[0]} alt={newProduct?.name} className='size-36 object-cover' />
               </div>
          </div> */}
          {/* {newProduct.map((product, index) => (
               <div key={index} >
                    <div className='flex gap-4'>

                    <img src={product?.image[0]} alt={product?.name} className='size-36 object-cover' />
                    <h2 className='font-medium'>{product?.name}</h2>
                    </div>
               </div>
          ))} */}
     </div>
    </>
  )
}

export default Review