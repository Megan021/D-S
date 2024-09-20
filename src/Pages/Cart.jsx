import React, { useContext } from "react";
import CartBanner from "../Components/ForCart/CartBanner";
import { CartContext } from "../Context/CartContext";
import CartComp from "../Components/ForCart/CartComp";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";

const Cart = () => {
  // Get cart count from CartContext
  const { cartCount, cartItems, removeFromCart, updateCartItemQuantity  } = useContext(CartContext);

    // Calculate subtotal dynamically
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Set a default shipping charge
    const shippingCharge = 100;
  
    // Calculate grand total
    const grandTotal = subtotal + shippingCharge;

  return (
    <>
      <CartBanner />

      <div className="container md:flex gap-12 mt-14">
        {/* Check if cart is empty */}
        {cartItems.length === 0 ? (
          <div className="text-center w-full p-8 border border-gray-300 rounded shadow-md">
            <img src="/images/cart/emptycart.jpg" alt="empty cart" className="size-72 mx-auto" />
            <h2 className="text-2xl font-medium mb-4">No items in the cart</h2>
          </div>
        ) : (
          <>
            <div className="border border-gray-300 rounded shadow-md p-4 md:pt-5 md:p-7 md:w-[70%]">
              <h2 className="border-b border-gray-300 pb-2 text-2xl font-medium">
                Shopping Cart
              </h2>

              <div className="grid gap-y-8 mt-8">
                {cartItems.map((cartItem, index) => (
                  <CartComp
                    key={index}
                    cartItem={cartItem}
                    removeFromCart={removeFromCart}
                    updateCartItemQuantity={updateCartItemQuantity}
                  />
                ))}
              </div>
            </div>

            <div className="md:w-[30%] mt-12 md:mt-0">
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
                <Link to="/shipping-and-payment">
                <button className="uppercase p-2 w-full bg-black text-white mt-5 rounded">
                  Proceed to checkout
                </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="container mt-8">
        <Link to="/">
          <button className="p-2 bg-black text-white px-3 pr-4 rounded flex items-center gap-1">
          <FaAngleLeft />Continue Shopping
          </button>
        </Link>
      </div> 
    </>
  );
};

export default Cart;
