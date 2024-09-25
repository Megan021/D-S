import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import Product from "../Data/Product.json";
import { RiDeleteBin5Line } from "react-icons/ri";
import { motion } from 'framer-motion';
import { WishlistContext } from '../Context/WishlistContext';
import WishlistBanner from '../Components/ForWishlist/WishlistBanner';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const {wishlist, removeFromWishlist} = useContext(WishlistContext);
  return (
    <>
          <WishlistBanner />
      <div className='container px-4 md:px-0 mt-16'>
        {wishlist.length === 0 ? (
          // If wishlist is empty, display a message and "Back to Shopping" button
          <div className="text-center my-10">
            <img src="/images/wishlist/emptywishlist.webp" alt="empty wishlist" className='mx-auto w-52 md:w-80' />
            <h2 className="text-2xl font-semibold mt-4">Your Wishlist is Empty</h2>
            <p className="mb-7 mt-2">You haven't added any products to your wishlist yet.</p>
            <Link 
              to="/shop" // Adjust this route as per your routing structure
              className="bg-black text-white px-6 p-3 rounded"
            >
              Back to Shopping
            </Link>
          </div>
        ) : (
          // If there are items in the wishlist, display them
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 gap-y-8 md:gap-y-8 md:gap-5">
          {wishlist.map((wishlist, index) => (
              <motion.div 
                key={index}
                className='relative' 
                initial="rest" 
                whileHover="hover" 
                animate="rest"
              >
                <img 
                  src={Array.isArray(wishlist.image) ? wishlist.image[0] : wishlist.image} 
                  alt={wishlist?.name} 
                  className="aspect-[3/3] object-cover rounded-lg" 
                />
                <Link to={`/product-detail/${wishlist?.id}`}>
                <div className="p-1 pt-3">
                  <p className="leading-5 pb-1">{wishlist?.name}</p>
                  <div className="flex gap-4">
                    {wishlist?.oldprice && (
                      <p className="text-gray-500">
                        <strike>Rs. {wishlist?.oldprice}</strike>
                      </p>
                    )}
                    <p className="font-semibold text-red-500">Rs. {wishlist?.price}</p>
                  </div>
                </div>
                </Link>

                <motion.button
                onClick={() => removeFromWishlist(wishlist?.id)}
                  className='absolute top-3 right-3 bg-white rounded p-2 font-semibold'
                  variants={{
                    rest: { opacity: 0, scale: 0, transition: { duration: 0.3 } },
                    hover: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
                  }}
                >
                  <RiDeleteBin5Line />
                </motion.button>
              </motion.div>
 
          ))}
        </div>
        )}
      </div>
    </>
  );
}

export default Wishlist;
