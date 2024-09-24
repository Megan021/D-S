import React, { createContext, useState, useEffect } from "react";

// Create Order Context
export const OrderContext = createContext();

// Order Provider Component
export const OrderProvider = ({ children }) => {
  // State to store orders
  const [orders, setOrders] = useState([]);

  // State to store shipping information
  const [shippingInfo, setShippingInfo] = useState({});

  // Retrieve existing orders and shipping info from localStorage on component mount
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);

    const storedShippingInfo = JSON.parse(localStorage.getItem("shippingInfo")) || {};
    setShippingInfo(storedShippingInfo);
  }, []);

  // Function to add a new order
  const addOrder = (newOrder) => {
    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  // Function to update shipping information
  const updateShippingInfo = (info) => {
    setShippingInfo(info);
    localStorage.setItem("shippingInfo", JSON.stringify(info));
  };

  // Function to clear all orders (optional)
  const clearOrders = () => {
    setOrders([]);
    localStorage.removeItem("orders");
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        clearOrders,
        shippingInfo, // Export shippingInfo state
        updateShippingInfo, // Export updateShippingInfo function
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
