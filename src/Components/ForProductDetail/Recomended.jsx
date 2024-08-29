import React from 'react'
import Product from "../../Data/Product.json";

const Recomended = () => {
     const bestProduct = Product.filter(
          (product) => product?.tag === "best seller"
        );

  return (
    <>
      <div className="container px-4 md:px-0 pt-20">
        <h1 className="text-xl font-medium uppercase pb-1 text-center">
          You May Also Like
        </h1>
        <div className="flex items-center gap-3 justify-center pb-8">
          <hr className="w-14 border border-gray-300" />
          <img src="/images/for-title.png" alt="" />
          <hr className="w-14 border border-gray-300" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {bestProduct.map((product, index) => (
            <div key={index}>
              <img
                src={Array.isArray(product.image) ? product.image[0] : product.image}
                alt={product?.name}
                className="aspect-[3/3] object-cover rounded-lg"
              />
              <div className="p-1 pt-3">
                <p className="leading-5 pb-1">{product?.name}</p>
                <div className="flex gap-4">
                  {product.oldprice && (
                    <p className="text-gray-500">
                      <strike>Rs. {product.oldprice}</strike>
                    </p>
                  )}
                  <p className="font-semibold text-red-500">
                    Rs. {product?.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Recomended