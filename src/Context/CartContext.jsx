import { createContext, useState, useEffect } from "react";
import {toast} from "react-hot-toast";

// Create the context
export const CartContext = createContext();

// Create the provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Initialize cart from localStorage or empty array
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

// Function to add a product to the cart
const addToCart = (item) => {
  setCartItems((prevItems) => {
    // Check if the item is already in the cart to avoid duplicates
    const isItemInCart = prevItems.some(
      (cartItem) =>
        cartItem.id === item.id 
    );

    if (!isItemInCart) {
      const updatedCart = [...prevItems, item];
      localStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Save to localStorage
      toast.success("Product added to cart!");
      return updatedCart;
    } else {
      toast.error("This item is already in your cart.");
      return prevItems; // Return previous items without adding the duplicate
    }
  });
};


    // Remove an item from the cart
    const removeFromCart = (itemId) => {
      setCartItems((prevItems) => {
        const updatedCart = prevItems.filter((item) => item.id !== itemId);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Save to localStorage
        toast.success("Product remove from cart.");
        return updatedCart;
      });
    };

   // Update the quantity of an item in the cart
   const updateCartItemQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate total quantity of items in the cart
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  // Use effect to keep localStorage in sync when cart changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, cartCount, removeFromCart, updateCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
