import React, { useContext } from "react";
import Product from "../Data/Product.json";
import ShopBanner from "../Components/ForShop/ShopBanner";
import Filter from "../Components/ForShop/Filter";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosHeartEmpty } from "react-icons/io";
import { WishlistContext } from "../Context/WishlistContext";

const Shop = () => {
  const { addToWishlist } = useContext(WishlistContext); // Access addToWishlist from context

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

                <motion.button
                  onClick={() => handleAddToWishlist(product)} // Pass the product to handleAddToWishlist
                  className="absolute top-3 right-3 bg-white rounded p-2 font-semibold"
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
                  <IoIosHeartEmpty />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
