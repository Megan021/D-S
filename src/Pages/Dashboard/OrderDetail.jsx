import React, { useState } from "react";
import SubMenu from "../../Components/ForDashboard/SubMenu";
import { motion } from "framer-motion";
import QuickView from "../../Components/QuickView";
import Product from "../../Data/Product.json";
import { Link } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

const OrderDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const newProduct = Product.filter((product) => product?.tag === "new");

        // Handle closing the modal
        const handleCloseModal = () => {
          setIsModalOpen(false);
          setSelectedProduct(null); // Clear selected product
        };

  return (
    <>
      <SubMenu />
      <div className="container mt-16 border border-gray-200 shadow rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8 uppercase">My Orders</h2>

        {/* <div className="grid grid-cols-5 gap-5 text-center items-center">
          <div className="font-bold py-3 border-y">Order</div>
          <div className="font-bold border-y">Date</div>
          <div className="font-bold border-y">Status</div>
          <div className="font-bold border-y">Total</div>
          <div className="font-bold border-y">Action</div>

          <div>#1</div>
          <div>March 1</div>
          <div>pending</div>
          <div>Rs. 5000</div>
          <div className="p-1 bg-black text-white rounded">View Order</div>

          <div>#2</div>
          <div>March 1</div>
          <div>pending</div>
          <div>Rs. 5000</div>
          <div className="p-1 bg-black text-white rounded">View Order</div>

          <div>#3</div>
          <div>March 1</div>
          <div>pending</div>
          <div>Rs. 5000</div>
          <div className="p-1 bg-black text-white rounded">View Order</div>
        </div> */}

<div className="container px-4 md:px-0">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {newProduct.map((product, index) => (
            <motion.div
              key={index}
              className="relative"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <img
                src={
                  Array.isArray(product.image)
                    ? product.image[0]
                    : product.image
                }
                alt={product?.name}
                className="aspect-[3/3] object-cover rounded-lg"
              />
              <Link to={`/product-detail/${product?.id}`}>
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
              </Link>

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
                {/* Heart Button */}
                <motion.button
                  onClick={() => handleAddToWishlist(product)} // Pass the product to handleAddToWishlist
                  className="bg-white rounded p-2 font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoIosHeartEmpty />
                </motion.button>

                {/* Preview Button */}
                <motion.button
                  onClick={() => handlePreviewClick(product)} 
                  className="bg-white rounded p-2 font-semibold mt-1" // Add margin-top for spacing
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }} // Delay of 1 second after heart icon appears
                >
                  <IoEyeOutline />
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      <QuickView
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
      </div>
      </div>
    </>
  );
};

export default OrderDetail;
