import React, { useContext, useEffect, useRef, useState } from "react";
import { FiShoppingBag, FiUser, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseLargeLine } from "react-icons/ri";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";
import { TfiHome } from "react-icons/tfi";
import { PiStorefrontLight } from "react-icons/pi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import MegaMenu from "./ForMegaMenu/MegaMenu";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const menuRef = useRef(null);
  const searchRef = useRef(null);

  // Get cart count from CartContext
  const { cartCount } = useContext(CartContext);
  const { wishlistCount } = useContext(WishlistContext);

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };


  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
     if (isMenuOpen || isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, isSearchOpen]);

  // Disable background scroll when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

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
            <MegaMenu />
          </div>

          <div>
            <ul className="flex gap-5 text-xl relative">
              <li onClick={toggleSearch} className="cursor-pointer ">
              <IoSearchOutline />
              </li>
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    ref={searchRef}
                    initial={{ opacity: 0, y: "-50%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-50%" }}
                    transition={{ type: "tween", duration: 0.3 }}
                    className="absolute top-12 right-28 bg-white shadow p-1 z-50 text-base flex gap-2"
                  >
                    <input
                      type="text"
                      placeholder=""
                      className="p-1 w-96 border border-gray-300 focus:outline-none"
                    />
                    <button onClick={toggleSearch} className="bg-black px-4 text-white">Search</button>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <Link to="/wishlist">
                <li className="relative">
                  <FiHeart />
                  {wishlistCount > 0 && (
                    <span className="absolute top-[-11px] right-[-11px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </li>
              </Link>

              <Link to="/cart">
                <li className="relative">
                  <FiShoppingBag />
                  {cartCount > 0 && (
                    <span className="absolute top-[-11px] right-[-11px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </li>
              </Link>

                <li>
                  <div className="relative group">
                    <FiUser />
                    <ul className="z-10 group-hover:block hidden absolute right-0 text-gray-700 pt-2 rounded shadow w-auto text-base">
                    <Link to="/login"><li className="rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer">
                        Login
                      </li>
                      </Link>
                      <Link to="/register">
                      <li className="bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer">
                        Register
                      </li>
                      </Link>
                      <Link to="/my-account">
                      <li className="bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer">
                        My Account
                      </li>
                      </Link>
                    </ul>
                  </div>
                </li>

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
                    ref={menuRef}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "tween", duration: 0.2 }}
                    className="fixed top-0 right-0 w-[60%] h-full bg-black z-50 bg-opacity-60 backdrop-blur-md text-white"
                  >
                    <div className="flex justify-between items-center px-4 p-[26px] border-b shadow">
                      {/* <h2 className="text-2xl font-bold">D&S</h2> */}
                      <div></div>
                      <button onClick={toggleMenu} className="text-xl">
                        <RiCloseLargeLine />
                      </button>
                    </div>
                    <ul className="p-6 leading-8 text-base">
                      <Link to="/" onClick={toggleMenu}>
                        <li className="py-2 flex items-center gap-2"><TfiHome />Home</li>
                      </Link>
                      <Link to="/shop" onClick={toggleMenu}>
                        <li className="py-2 flex items-center gap-2"><PiStorefrontLight />Shop</li>
                      </Link>
                      <Link to="/about" onClick={toggleMenu}>
                        <li className="py-2 flex items-center gap-2"><IoInformationCircleOutline />About</li>
                      </Link>
                      <Link to="/contact" onClick={toggleMenu}>
                        <li className="py-2 flex items-center gap-2"><IoCallOutline />Contact</li>
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
