import React, { useState } from "react";
import SubMenu from "../../Components/ForDashboard/SubMenu";
import Product from "../../Data/Product.json";
import ReviewPopModal from "../../Components/ForReview/ReviewPopModel";
import { Rating } from "@mui/material";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Review = () => {
  const [rating, setRating] = useState(4);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("toReview");
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/product/product1.webp",
    "/images/product/product2.webp",
    "/images/product/product1.webp",
  ];

  const newProduct = Product.filter(
    (product) => product?.tag === "best seller"
  );

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <SubMenu />
      <div className="container my-8">
        <ul className="flex gap-4 items-center">
          <li
            className={`p-1 px-4 rounded-full cursor-pointer ${
              activeTab === "toReview"
                ? "bg-gray-500 text-white"
                : "hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("toReview")}
          >
            To Review
          </li>
          <hr className="h-6 bg-gray-300 w-px" />
          <li
            className={`p-1 px-4 rounded-full cursor-pointer ${
              activeTab === "viewReview"
                ? "bg-gray-500 text-white"
                : "hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("viewReview")}
          >
            View Review
          </li>
        </ul>
      </div>

      <div className="container px-4 md:px-0">
        {activeTab === "toReview" && (
          <motion.div
            className="grid md:grid-cols-2 gap-3 gap-y-6 md:gap-6"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={tabVariants}
            transition={{ duration: 0.3 }}
          >
            {newProduct.map((product, index) => (
              <div key={index}>
                <div className="flex border rounded border-gray-300 shadow relative">
                  <div className="w-[24%]">
                    <img
                      src={product?.image[0]}
                      alt={product?.name}
                      className="md:size-36 object-cover rounded-l"
                    />
                  </div>
                  <div className="w-[80%] px-3">
                    <h2 className="font-medium mt-2 line-clamp-2">
                      {product?.name}
                    </h2>
                    <p className="text-muted text-sm">(red-free)</p>
                    <p className="pt-1">Rs. {product?.price}</p>
                  </div>
                  <button
                    className="absolute bottom-4 right-4 p-1 px-4 rounded hover:bg-black hover:text-white duration-300 border border-black"
                    onClick={() => handleOpenModal(product)}
                  >
                    Review
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === "viewReview" && (
          <motion.div
            className="grid md:grid-cols-2 gap-3 gap-y-6 md:gap-6"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={tabVariants}
            transition={{ duration: 0.3 }}
          >
            {newProduct.map((product, index) => (
              <div key={index}>
                <div className="flex border rounded border-gray-300 shadow relative">
                  <div className="">
                    <img
                      src={product?.image[0]}
                      alt={product?.name}
                      className="w-[40vh] h-full object-cover rounded-l"
                    />
                  </div>
                  <div className="w-[80%] px-3">
                    <h2 className="font-medium mt-4 line-clamp-1">
                      {product?.name}
                    </h2>
                    <p className="text-muted text-sm">(red-free)</p>
                    <p className="pt-1">Rs. {product?.price}</p>

                    <p className="pt-3 line-clamp-3">
                      <span className="font-semibold text-lg">" </span>Lorem,
                      ipsum dolor sit amet consectetur adipisicing elit. Tempore
                      distinctio ducimus corrupti commodi. Quos, assumenda!
                      <span className="font-semibold text-lg"> "</span>
                    </p>
                    <div className="flex gap-2 py-5">
                      {images.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`review image ${index}`}
                          className="size-16 cursor-pointer"
                          onClick={() => handleImageClick(index)}
                        />
                      ))}
                    </div>
                    <Rating
                      name="product-rating"
                      value={rating}
                      onChange={(event, newValue) => setRating(newValue)}
                      className="mb-4"
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {selectedProduct && (
        <ReviewPopModal
          open={isModalOpen}
          handleClose={handleCloseModal}
          product={selectedProduct}
        />
      )}

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={images.map((src) => ({ src }))}
          index={currentImageIndex}
          onIndexChange={setCurrentImageIndex}
        />
      )}
    </>
  );
};

export default Review;
