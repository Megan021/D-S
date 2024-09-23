import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SlClose } from "react-icons/sl";
import { toast } from 'react-hot-toast';
import { GoChevronDown } from "react-icons/go";
import { CartContext } from "../Context/CartContext";
import { HiArrowUpRight } from "react-icons/hi2";

const QuickView = ({ isOpen, onClose, product }) => {
     
     if (!isOpen || !product) return null;
     // Close modal if clicked outside of the modal content
     const handleOutsideClick = (e) => {
          if (e.target.id === "modal-overlay") {
               onClose(); // Close the modal
          }
     };

     const { addToCart } = useContext(CartContext);
     
     const [selectedColor, setSelectedColor] = useState("");
     const [selectedSize, setSelectedSize] = useState("");
     const [quantity, setQuantity] = useState(1);

  // Attach event listener to handle outside clicks when the modal is open
  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
    } else {
      window.removeEventListener("click", handleOutsideClick);
    }
    return () => {
      window.removeEventListener("click", handleOutsideClick); // Cleanup on component unmount
    };
  }, [isOpen]);

   // Initialize mainImage with the first image in the array or fallback to the single image property
   const [mainImage, setMainImage] = useState(
     product?.image && product.image.length > 0
       ? product.image[0] // Use the first image from the images array
       : product?.image // Fallback to the main image property
   );

      // Handle adding to cart
      const handleAddToCart = () => {
          if (!selectedColor || !selectedSize) {
            toast.error("Please select a color and size."); // Display toast error message
            return;
          }
      
          const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            color: selectedColor,
            size: selectedSize,
            quantity: quantity,
            image: mainImage,
          };
          
          addToCart(cartItem);
        };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-lg w-[100%] md:w-1/2 relative flex gap-4" // Added 'relative' for proper positioning of the close button
      >

        <div className="w-[50%] h-[70vh]">
          <img
            src={
              Array.isArray(product.image) ? product.image[0] : product.image
            }
            alt={product.name}
            className="rounded-l-lg h-full w-full object-cover border-r border-gray-300 rounded"
          />
        </div>

        <div className="w-[50%] p-5">
          <div className="border-b border-gray-300 pb-3">
            <p className="text-sm">{product?.sku}</p>
            <h2 className="text-lg py-1">{product?.name}</h2>
            {product?.oldprice && (
              <p className="text-gray-500">
                <strike>Rs. {product?.oldprice}</strike>
              </p>
            )}
            <p className="font-semibold text-red-500 text-lg">
              Rs. {product?.price}
            </p>
          </div>
          
          {/* for color */}
          <div className="my-4 mb-6">
            <h3 className="uppercase text-sm pb-4 font-semibold">Color</h3>
            <ul className="flex gap-4">
            <li
                className={`rounded-full p-3 bg-black hover:ring-2 ring-offset-2 ring-black cursor-pointer ${
                  selectedColor === "black" && "ring-2 ring-offset-2"
                }`}
                onClick={() => setSelectedColor("black")}
              ></li>
              <li
                className={`rounded-full p-3 bg-[maroon] hover:ring-2 ring-offset-2 ring-black cursor-pointer ${
                  selectedColor === "maroon" && "ring-2 ring-offset-2"
                }`}
                onClick={() => setSelectedColor("maroon")}
              ></li>
              <li
                className={`rounded-full p-3 bg-[grey] hover:ring-2 ring-offset-2 ring-black cursor-pointer ${
                  selectedColor === "grey" && "ring-2 ring-offset-2"
                }`}
                onClick={() => setSelectedColor("grey")}
              ></li>
            </ul>
          </div>

          {/* for size */}
          <div className="mb-9">
            <h3 className="uppercase text-sm pb-2 font-semibold">Size</h3>
            <ul className="flex gap-2">
            {product.size.map((size, index) => (
                <li
                  key={index}
                  className={`border border-gray-400 p-1 px-3 text-sm hover:border-black cursor-pointer ${
                    selectedSize === size && "border text-white bg-[black]"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>

          {/* for qty and add to cart button */}
          <div className="flex gap-2 pb-2">
            <button className="p-2 border border-black w-24 items-center flex justify-between">
              Qty: 1 <GoChevronDown />
            </button>
            <button onClick={handleAddToCart} className="p-2 border border-black bg-black text-white font-medium w-full capitalize">
              add to cart
            </button>
          </div>
          <button className="flex items-center gap-1 border-b border-black pb-px mt-6">View full details <HiArrowUpRight className="text-xs" /></button>
        </div>

        <button className="absolute top-2 right-2 text-xl font-bold" onClick={onClose}>
          <SlClose />
        </button>

      </motion.div>
    </div>
  );
};

export default QuickView;
