import React, { useContext } from "react";
import Product from "../../Data/Product.json";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../Context/WishlistContext";
import { motion } from "framer-motion";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

const NewArrival = () => {
  const { addToWishlist } = useContext(WishlistContext);
  const newProduct = Product.filter((product) => product?.tag === "new");

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
      <div className="container px-4 md:px-0">
        <h1 className="text-xl font-medium uppercase pb-1 text-center">
          New Arrival
        </h1>
        <div className="flex items-center gap-3 justify-center pb-8">
          <hr className="w-14 border border-gray-300" />
          <img src="/images/for-title.png" alt="" />
          <hr className="w-14 border border-gray-300" />
        </div>
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
                  onClick={() => console.log("Preview clicked")} // Replace with actual preview functionality
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
      </div>
    </>
  );
};

export default NewArrival;
