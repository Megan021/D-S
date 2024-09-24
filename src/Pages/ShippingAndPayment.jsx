import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import ShippingComp from "../Components/ForShipping/ShippingComp";
import PaymentInfo from "../Components/ForShipping/PaymentInfo";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ShippingAndPayment = () => {
  // Get cart count and items from CartContext
  const { cartCount, cartItems, clearCart } = useContext(CartContext);

  const navigate = useNavigate();

  // Calculate subtotal dynamically
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Set a default shipping charge
  const shippingCharge = 100;

  // Calculate grand total
  const grandTotal = subtotal + shippingCharge;

  // Handle place order
  const handlePlaceOrder = () => {
    if (!cartItems || cartItems.length === 0) {
      toast.error("No items in the cart to place an order.");
      return;
    }

    // Get shipping and payment info (assuming you have states or context for these)
    const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));
    const paymentInfo = "Cash on Delivery";

    if (!shippingInfo || !paymentInfo) {
      toast.error("Please fill out the shipping and payment information.");
      return;
    }

    // Create the order data
    const order = {
      orderId: new Date().getTime(), // Generate a unique order ID based on timestamp
      cartItems,
      shippingInfo,
      paymentInfo,
      subtotal,
      shippingCharge,
      grandTotal,
      orderDate: new Date().toLocaleString(), // Add order date
    };

    // Save the order data to localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...existingOrders, order]));

    // Clear the cart
    clearCart();

    // Show success toast
    toast.success("Order placed successfully!");

    // Navigate to order confirmation page
    navigate("/order-confirm");
  };

  return (
    <>
      <div className="container mt-14 gap-14 md:flex px-4 md:px-0">
        <div className="md:w-[60%]">
          <ShippingComp />
          <div className="mt-8">
            <h2 className="font-semibold text-xl mb-5">Payment Info</h2>
            <PaymentInfo />
          </div>
        </div>

        <div className="md:w-[40%] mt-12 md:mt-0">
          <div className="p-8 sticky top-11 border border-gray-300 rounded shadow-md">
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium mb-2">Items ({cartCount})</h3>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium mb-2">Subtotal</h3>
              </div>
              <div>
                <h3>Rs. {subtotal}</h3>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium">Shipping</h3>
              </div>
              <div>
                <h3>Rs. {shippingCharge}</h3>
              </div>
            </div>
            <hr className="w-full my-5" />
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium">Grand Total</h3>
              </div>
              <div>
                <h3>Rs. {grandTotal}</h3>
              </div>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="uppercase p-2 w-full bg-black text-white mt-5 rounded"
            >
              Place order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingAndPayment;
