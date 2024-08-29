import React from 'react'
import Product from "../Data/Product.json";
import ShopBanner from '../Components/ForShop/ShopBanner';
import Filter from '../Components/ForShop/Filter';
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <>
    <ShopBanner />
     <div className='container pb-6 px-4 md:px-0'>
          <Filter />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 gap-y-8 md:gap-y-8 md:gap-5">
          {Product.map((product, index) => (
            <Link key={index} to={`/product-detail/${product?.id}`}>
            <div className='relative'>
              <img src={Array.isArray(product.image) ? product.image[0] : product.image} alt={product?.name} className="aspect-[3/3] object-cover rounded-lg" />
              <div className="p-1 pt-3">
                <p className="leading-5 pb-1">{product?.name}</p>
                <div className="flex gap-4">
                  {product?.oldprice && (
                    <p className="text-gray-500">
                       <strike>Rs. {product?.oldprice}</strike>
                    </p>
                  )}
                  <p className="font-semibold text-red-500">Rs. {product?.price}</p>
                </div>
              </div>
              {product?.discount && (
              <p className='absolute top-3 left-3 bg-white rounded  p-px px-1 text-xs font-semibold'>{product?.discount}</p>
              )}
            </div>
            </Link>
          ))}
        </div>
     </div>
    </>
  )
}

export default Shop