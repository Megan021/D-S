import React, { useState } from 'react'
import OrderDetailModel from '../ForOrderDetail/OrderDetailModel'
import Product from "../../Data/Product.json";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { IoEyeOutline } from 'react-icons/io5';
import { GoArrowRight } from "react-icons/go";

const OrderView = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);
     const [selectedProduct, setSelectedProduct] = useState(null);
     const newProduct = Product.filter((product) => product?.tag === "new").slice(0,2);

       // Handle closing the modal
  const handleCloseModal = () => {
     setIsModalOpen(false);
     setSelectedProduct(null); // Clear selected product
   };
 
   // Handle preview button click
   const handlePreviewClick = (product) => {
     setSelectedProduct(product); // Set selected product data
     setIsModalOpen(true); // Open modal
   };
     
  return (
    <>
     <div className='p-6 border border-black rounded-xl'>
          <div className='flex border-b border-gray-300 pb-3 mb-5 justify-between'>
          <h2 className='text-xl uppercase font-semibold '>View Order</h2>
          <Link to="/order-detail">
          <button className='flex items-center gap-1 hover:border-b border-black'>View All <GoArrowRight /></button>
          </Link>
          </div>
          <div className="grid gap-5">
            {newProduct.map((product, index) => (
              <motion.div
                key={index}
                className="relative"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <div className='flex items-center border gap-3 border-gray-300 rounded-xl'>
                <div className='h-full'>
                <img
                  src={
                    Array.isArray(product.image)
                      ? product.image[0]
                      : product.image
                  }
                  alt={product?.name}
                  className="w-28 h-full object-cover rounded-l-xl"
                />
                </div>
                <div>
                <Link to={`/product-detail/${product?.id}`}>
                  <div className="p-1 pt-3">
                    <p className="font-semibold">State: {product?.status}</p>
                    <div className='py-1'>
                    <p className="leading-5">Order ID: #123SDFJK</p>
                    {/* <div className="flex gap-4">
                      {product.oldprice && (
                        <p className="text-gray-500">
                          <strike>Rs. {product.oldprice}</strike>
                        </p>
                      )}
                      <p className="font-semibold">
                        Rs. {product?.price}
                      </p>
                    </div> */}
                    </div>
                    <p>Date: 2024/09/25</p>
                  </div>
                </Link>
                </div>
                </div>

                {/* Wrap buttons in motion.div */}
                <motion.div
                  className="absolute top-3 right-3 flex flex-col items-center gap-1" // Flexbox for vertical stacking
                  variants={{
                    rest: {
                      opacity: 0,
                      scale: 0,
                      transition: { duration: 0.3 },
                    },
                    hover: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.3 },
                    },
                  }}
                >
                  {/* Preview Button */}
                  <motion.button
                    onClick={() => handlePreviewClick(product)}
                    className="bg-white rounded p-2 font-semibold mt-1" // Add margin-top for spacing
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5}} // Delay of 1 second after heart icon appears
                  >
                    <IoEyeOutline />
                  </motion.button>

                </motion.div>
                  <button onClick={() => handlePreviewClick(product)} className="absolute top-3 right-3 bg-white rounded p-2 font-semibold">
                  <IoEyeOutline />
                  </button>

              </motion.div>
            ))}
          </div>
          <OrderDetailModel
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            product={selectedProduct}
          />
     </div>
    </>
  )
}

export default OrderView