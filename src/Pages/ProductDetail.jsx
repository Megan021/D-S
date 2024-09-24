import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Product from "../Data/Product.json";
import { GoChevronDown } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";
import Review from "../Components/ForProductDetail/Review";
import Recomended from "../Components/ForProductDetail/Recomended";
import { toast } from 'react-hot-toast';
import { motion, AnimatePresence } from "framer-motion";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";

const ProductDetail = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const { addToCart } = useContext(CartContext); // Access addToCart from CartContext
  const { addToWishlist } = useContext(WishlistContext); // Access addToWishlist from WishlistContext
  const product = Product.find((item) => item.id === parseInt(id)); // Find the product with the matching id

  // Initialize mainImage with the first image in the array or fallback to the single image property
  const [mainImage, setMainImage] = useState(
    product?.image && product.image.length > 0
      ? product.image[0] // Use the first image from the images array
      : product?.image // Fallback to the main image property
  );

    // State for selected options
    const [selectedColor, setSelectedColor] = useState(""); // Color state
    const [selectedSize, setSelectedSize] = useState(""); // Size state
    const [quantity, setQuantity] = useState(1); // Quantity state
    const [isShippingVisible, setIsShippingVisible] = useState(false);

  if (!product) {
    return (
      <div className="container text-center pt-16">
        <h2 className="pb-4 text-2xl font-semibold">Product not found</h2>
        <Link to="/shop">
          <button className="bg-black text-white p-2 px-5 ">
            Back to Shop
          </button>
        </Link>
      </div>
    );
  }

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
    
    // Handle adding to wishlist
    const handleAddToWishlist = () => {
      const wishlistItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: mainImage,
        quantity: quantity,
    };
    
    addToWishlist(wishlistItem); // Add the item to the wishlist
  };

    // Toggle the visibility of the shipping information
    const toggleShippingVisibility = () => {
      setIsShippingVisible(!isShippingVisible);
    };

  return (
    <>
      <div className="container md:flex py-20 pb-16 gap-20 px-4 md:px-0">
        <div className="md:flex lg:flex-row flex flex-col-reverse md:w-[60%] md:h-[40rem] gap-5">
          <div className="flex lg:flex-col mr-4 gap-5">
            {/* Assuming product.images is an array of image URLs */}
            {product?.image &&
              product?.image.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="size-28 mb-2 cursor-pointer border border-gray-300 object-cover"
                  onClick={() => setMainImage(img)} // Change main image on click
                />
              ))}
          </div>

          {/* Main Product Image */}
          <div className="w-full border border-gray-300 rounded">
            <img
              src={mainImage}
              alt={product?.name}
              className="w-full h-full mx-auto object-cover"
            />
          </div>
        </div>

        <div className="md:w-[40%] mt-12 md:mt-0">
          <h3 className="text-sm">Sku: {product?.sku}</h3>
          <h2 className="text-3xl font-medium py-3">{product?.name}</h2>
          <div className="flex gap-4 items-center border-b pb-4 mb-2">
            {product?.oldprice && (
              <p className="text-gray-500">
                <strike>Rs. {product?.oldprice}</strike>
              </p>
            )}
            <p className="font-semibold text-red-500 text-xl">
              Rs. {product?.price}
            </p>
          </div>

          <div className="text-right p-1">
            <button onClick={handleAddToWishlist} className="text-xl">
              <IoIosHeartEmpty className="hover:text-[red] fill-red-500 overflow-hidden" />
            </button>
          </div>

          <div className="mb-8">
            <h3 className="uppercase text-sm pb-4 font-semibold">Color</h3>
            <ul className="flex gap-7">
            <li
                className={`rounded-full p-5 bg-black hover:ring-2 ring-offset-2 ring-black cursor-pointer ${
                  selectedColor === "black" && "ring-2 ring-offset-2"
                }`}
                onClick={() => setSelectedColor("black")}
              ></li>
              <li
                className={`rounded-full p-5 bg-[maroon] hover:ring-2 ring-offset-2 ring-black cursor-pointer ${
                  selectedColor === "maroon" && "ring-2 ring-offset-2"
                }`}
                onClick={() => setSelectedColor("maroon")}
              ></li>
              <li
                className={`rounded-full p-5 bg-[grey] hover:ring-2 ring-offset-2 ring-black cursor-pointer ${
                  selectedColor === "grey" && "ring-2 ring-offset-2"
                }`}
                onClick={() => setSelectedColor("grey")}
              ></li>
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="uppercase text-sm pb-2 font-semibold">Size</h3>
            <ul className="flex gap-2">
            {product.size.map((size, index) => (
                <li
                  key={index}
                  className={`border border-gray-400 p-2 px-4 text-sm hover:border-black cursor-pointer ${
                    selectedSize === size && "border text-white bg-[black]"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-2 pb-2">
            <button className="p-2 border border-black w-24 items-center flex justify-between">
              Qty: 1 <GoChevronDown />
            </button>
            <button onClick={handleAddToCart} className="p-2 border border-black bg-black text-white font-medium w-full capitalize">
              add to cart
            </button>
          </div>
          <button className="p-2 border border-black w-full capitalize font-medium">
            Checkout
          </button>

          <div className="mt-8">
            <div className="flex border-b border-gray-300 pb-2 justify-between">
              <button className="flex items-center uppercase text-sm font-semibold ">
                <img src="/images/productDetail/detail.svg" className="size-8" />
                details
              </button>
              <button>
                <AiOutlinePlus />
              </button>
            </div>

            <div onClick={toggleShippingVisibility} className="flex border-b border-gray-300 pb-2 justify-between mt-5">
              <button  className="flex items-center uppercase text-sm font-semibold gap-2">
                <img src="/images/productDetail/shipping.svg" className="size-6 ml-1" />
                shipping & returns
              </button>
              <button>
                <AiOutlinePlus />
              </button>
            </div>

             {/* Slide-down content for Shipping & Returns */}
             <AnimatePresence>
              {isShippingVisible && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden bg-gray-100 p-4 mt-2 border border-gray-200"
                >
                  <div className="">

                    <div className="flex gap-4 mb-5">
                      <div><i><LiaShippingFastSolid className="text-3xl rounded-full border border-black p-1" /></i></div>
                      <div>
                        <h2 className="font-medium">Fast Shipping</h2>
                        <p>Fast delivery all over Nepal.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 mb-5">
                      <div><i><MdOutlineCurrencyExchange className="text-3xl rounded-full border border-black p-1" /></i></div>
                      <div>
                        <h2 className="font-medium">Return Policy</h2>
                        <p>Return and exchange goods are not supported.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div><i><AiOutlineSafety className="text-3xl rounded-full border border-black p-1" /></i></div>
                      <div>
                        <h2 className="font-medium">Shopping Security</h2>
                        <p>Secure your shopping payment.</p>
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>

      <Review />
      <Recomended />
    </>
  );
};

export default ProductDetail;