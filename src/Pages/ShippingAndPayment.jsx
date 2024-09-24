import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import ShippingComp from "../Components/ForShipping/ShippingComp";
import PaymentInfo from "../Components/ForShipping/PaymentInfo";
import { Link } from "react-router-dom";

const ShippingAndPayment = () => {
  // Get cart count from CartContext
  const { cartCount, cartItems } = useContext(CartContext);

  // Calculate subtotal dynamically
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Set a default shipping charge
  const shippingCharge = 100;

  // Calculate grand total
  const grandTotal = subtotal + shippingCharge;

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
            <Link to="/order-confirm">
            <button className="uppercase p-2 w-full bg-black text-white mt-5 rounded">
              Place order
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingAndPayment;
