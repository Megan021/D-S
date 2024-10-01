import React, { useState } from 'react';
import SubMenu from '../../Components/ForDashboard/SubMenu';
import Product from "../../Data/Product.json";
import ReviewPopModal from '../../Components/ForReview/ReviewPopModel';

const Review = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const newProduct = Product.filter((product) => product?.tag === "best seller");

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <SubMenu />
      <div className='container mt-14 px-4 md:px-0'>
        <div className="grid md:grid-cols-2 gap-3 gap-y-6 md:gap-6">
          {newProduct.map((product, index) => (
            <div key={index}>
              <div className='flex border rounded border-gray-300 shadow relative'>
                <div className='w-[24%]'>
                  <img src={product?.image[0]} alt={product?.name} className='md:size-36 object-cover rounded-l' />
                </div>
                <div className='w-[80%] px-3'>
                  <h2 className='font-medium mt-2 line-clamp-2'>{product?.name}</h2>
                  <p className='pt-1'>Rs. {product?.price}</p>
                </div>
                <button 
                  className='absolute bottom-4 right-4 p-1 px-4 rounded hover:bg-black hover:text-white duration-300 border border-black' 
                  onClick={() => handleOpenModal(product)}>
                  Review
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ReviewPopModal 
          open={isModalOpen} 
          handleClose={handleCloseModal} 
          product={selectedProduct} 
        />
      )}
    </>
  );
};

export default Review;
