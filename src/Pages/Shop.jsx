import React, { useContext, useState } from "react";
import Product from "../Data/Product.json";
import ShopBanner from "../Components/ForShop/ShopBanner";
import Filter from "../Components/ForShop/Filter";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosHeartEmpty } from "react-icons/io";
import { WishlistContext } from "../Context/WishlistContext";
import { IoEyeOutline } from "react-icons/io5";
import QuickView from "../Components/QuickView";

const Shop = () => {
  const { addToWishlist } = useContext(WishlistContext); // Access addToWishlist from context
  const [selectedProduct, setSelectedProduct] = useState(null); // State to store selected product
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility


  // Handle adding to wishlist
  const handleAddToWishlist = (product) => {
    const wishlistItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: Array.isArray(product.image) ? product.image[0] : product.image, // Handle single or array images
      quantity: 1, 
    };
    addToWishlist(wishlistItem); // Add the item to the wishlist
  };

    // Handle preview button click
    const handlePreviewClick = (product) => {
      setSelectedProduct(product); // Set selected product data
      setIsModalOpen(true); // Open modal
    };
  
    // Handle closing the modal
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedProduct(null); // Clear selected product
    };

  return (
    <>
      <ShopBanner />
      <div className="container pb-6 px-4 md:px-0">
        <Filter />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 gap-y-8 md:gap-y-8 md:gap-5">
          {Product.map((product, index) => (
            <motion.div
              key={index}
              className="relative"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <div className="relative">
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
                      {product?.oldprice && (
                        <p className="text-gray-500">
                          <strike>Rs. {product?.oldprice}</strike>
                        </p>
                      )}
                      <p className="font-semibold text-red-500">
                        Rs. {product?.price}
                      </p>
                    </div>
                    {product?.discount && (
                      <p className="absolute top-3 left-3 bg-white rounded p-px px-1 text-xs font-semibold">
                        {product?.discount}
                      </p>
                    )}
                  </div>
                </Link>

                <motion.div
                className="absolute top-3 right-3 flex flex-col items-center gap-1" 
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
                <motion.button
                  onClick={() => handleAddToWishlist(product)} 
                  className="bg-white rounded p-2 font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoIosHeartEmpty />
                </motion.button>

                <motion.button
                  onClick={() => handlePreviewClick(product)} 
                  className="bg-white rounded p-2 font-semibold mt-1" 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <IoEyeOutline />
                </motion.button>
              </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <QuickView
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </>
  );
};

export default Shop;
