import { createContext, useState, useEffect } from "react";

// Create the context
export const CartContext = createContext();

// Create the provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Initialize cart from localStorage or empty array
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Add a product to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const updatedCart = [...prevItems, item];
      localStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Save to localStorage
      return updatedCart;
    });
  };

    // Remove an item from the cart
    const removeFromCart = (itemId) => {
      setCartItems((prevItems) => {
        const updatedCart = prevItems.filter((item) => item.id !== itemId);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Save to localStorage
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
