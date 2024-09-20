import React, { useContext, useState } from "react";
import { FiShoppingBag, FiUser, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseLargeLine } from "react-icons/ri";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Get cart count from CartContext
    const { cartCount } = useContext(CartContext);
    const {wishlistCount} = useContext(WishlistContext);

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="border-b shadow z-50 bg-white px-4 md:px-0">
        <div className="container flex items-center justify-between py-5">
          <div>
            <Link to="/">
              <h2 className="text-2xl font-bold">D&S</h2>
            </Link>
          </div>

          <div className="hidden md:block">
            <ul className="flex gap-8 font-medium">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/shop">
                <li>Shop</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>

          <div>
            <ul className="flex gap-5 text-xl">
              <Link to="/wishlist">
                <li className="relative">
                  <FiHeart />
                  {wishlistCount > 0 && (
                    <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </li>
              </Link>

              <Link to="/cart">
                <li className="relative">
                  <FiShoppingBag />
                  {cartCount > 0 && (
                    <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </li>
              </Link>

              <Link to="/login">
                <li>
                  <FiUser />
                </li>
              </Link>

              <button
                to="/"
                onClick={toggleMenu}
                className="md:hidden cursor-pointer"
              >
                <li>
                  <HiOutlineMenuAlt3 />
                </li>
              </button>
              <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "tween", duration: 0.2 }}
                  className="fixed top-0 right-0 w-full h-full bg-white z-50"
                >
                  <div className="flex justify-between items-center p-5 border-b">
                    <h2 className="text-2xl font-bold">D&S</h2>
                    {/* Close menu button */}
                    <button onClick={toggleMenu} className="text-xl">
                      <RiCloseLargeLine />
                    </button>
                  </div>
                  <ul className="p-5">
                    <Link to="/" onClick={toggleMenu}>
                      <li className="py-2">Home</li>
                    </Link>
                    <Link to="/shop" onClick={toggleMenu}>
                      <li className="py-2">Shop</li>
                    </Link>
                    <Link to="/about" onClick={toggleMenu}>
                      <li className="py-2">About</li>
                    </Link>
                    <Link to="/contact" onClick={toggleMenu}>
                      <li className="py-2">Contact</li>
                    </Link>
                  </ul>
                </motion.div>
              )}
              </AnimatePresence>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
