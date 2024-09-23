// Context/WishlistContext.js
import React, { createContext, useState, useEffect } from "react";
import { toast } from 'react-hot-toast';

// Create the context
export const WishlistContext = createContext();

// Wishlist context provider component
export const WishlistProvider = ({ children }) => {
  // Load wishlist from localStorage on initial render
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Function to add a product to the wishlist
  const addToWishlist = (item) => {
    // Check if the item is already in the wishlist to avoid duplicates
    const isItemInWishlist = wishlist.some((wishlistItem) => wishlistItem.id === item.id);

    if (!isItemInWishlist) {
      const updatedWishlist = [...wishlist, item];
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save to localStorage
      toast.success("Product added to wishlist!")
    } else {
      toast.error("This item is already in your wishlist.");
    }
  };

  // Function to remove an item from the wishlist
  const removeFromWishlist = (itemId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== itemId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Update localStorage
    toast.success("Product remove from wishlist!")
  };

    // Calculate total quantity of items in the wishlist
    const wishlistCount = wishlist.reduce((count, item) => count + item.quantity, 0);

  // Sync wishlist with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={{ wishlist, wishlistCount, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
