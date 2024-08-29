import React, { useState } from "react";
import { FiShoppingBag, FiUser, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseLargeLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <Link to="/">
                <li>
                  <FiHeart />
                </li>
              </Link>
              <Link to="/">
                <li>
                  <FiShoppingBag />
                </li>
              </Link>
              <Link to="/">
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
