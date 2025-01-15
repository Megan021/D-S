import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ReviewComp = () => {
  const [value, setValue] = useState(4);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/product/product1.webp",
    "/images/product/product2.webp",
    "/images/product/product1.webp",
  ];

  // Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  // const handleNext = () => {
  //   setCurrentImageIndex((currentImageIndex + 1) % images.length);
  // };

  // const handlePrev = () => {
  //   setCurrentImageIndex(
  //     (currentImageIndex + images.length - 1) % images.length
  //   );
  // };

  return (
    <>
      <div className="border border-gray-300 rounded shadow p-5">
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center mb-5">
            <div>
              <i>
                <img
                  src="/images/review/reviewimg.jpg"
                  alt="review image"
                  className="size-12 object-cover rounded-full"
                />
              </i>
            </div>
            <div className="leading-3">
              <h3 className="text-xl font-medium">John Deo</h3>
              <p>7 Aug, 2024</p>
            </div>
          </div>

          <div>
            <Rating name="simple-controlled" value={value} readOnly />
          </div>
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            minus ut asperiores a veniam quaerat, doloribus architecto
            consequatur molestias aperiam.
          </p>
          <div className="flex gap-2 pt-5">
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
        </div>
      </div>

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

export default ReviewComp;