import React, { useState } from "react";
import SubMenu from "../../Components/ForDashboard/SubMenu";
import { motion } from "framer-motion";
import Product from "../../Data/Product.json";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import OrderDetailModel from "../../Components/ForOrderDetail/OrderDetailModel";

const OrderDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const newProduct = Product.filter((product) => product?.tag === "new");

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
      <SubMenu />
      <div className="container mt-16 md:border border-gray-200 md:shadow rounded-lg p-4 md:p-8">
        <h2 className="text-3xl font-bold mb-8 uppercase">My Orders</h2>

        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 gap-y-8 md:gap-5">
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
                    <p className="font-semibold">State: {product?.status}</p>
                    <div className="py-2">
                    <p className="leading-5">Order ID: #123SDFJK</p>
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
                    <p className="">Date: 2024/09/25</p>
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
      </div>
    </>
  );
};

export default OrderDetail;
