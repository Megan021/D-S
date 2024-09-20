import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const CartComp = ({ cartItem, removeFromCart, updateCartItemQuantity }) => {
  if (!cartItem) {
    return null;
  }

    // Event handlers for incrementing and decrementing quantity
    const handleDecrement = () => {
      if (cartItem.quantity > 1) {
        updateCartItemQuantity(cartItem.id, cartItem.quantity - 1);
      }
    };
  
    const handleIncrement = () => {
      updateCartItemQuantity(cartItem.id, cartItem.quantity + 1);
    };


  return (
    <div>
      <div className="flex gap-6 w-full items-center border-b pb-8">
        <div className="">
          <img
            src={cartItem?.image}
            alt={cartItem?.name}
            className="size-36 object-cover"
          />
        </div>
        <div className="w-full">
          <h2 className="line-clamp-1 mb-2">{cartItem?.name}</h2>

          <div className="flex justify-between items-center">

            <div>
              <div className="leading-7">
                <p className="font-semibold text-lg">Rs. {cartItem?.price}</p>
                <p className="font-medium">Size: {cartItem?.size}</p>
                <p className="font-medium">Color: {cartItem?.color}</p>
              </div>
            </div>

            <div>
               <div className="border border-gray-300 flex gap-3 p-2 px-3 items-center rounded">
                    <button onClick={handleDecrement} disabled={cartItem.quantity === 1}>-</button>
                    <p className="w-5 text-center">{cartItem?.quantity}</p>
                    <button onClick={handleIncrement}>+</button>
               </div>
            </div>

            <div className="hidden md:block" >
               <p>Rs. {cartItem?.price * cartItem?.quantity}</p>
            </div>

            <div className="hidden md:block">
               <button  onClick={() => removeFromCart(cartItem?.id)} className="text-xl"><AiOutlineDelete /></button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default CartComp;
