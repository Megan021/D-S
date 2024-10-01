import React, { useState } from "react";
import { Button, Modal, Rating, TextField } from "@mui/material";
import { MdOutlineClose } from "react-icons/md";

const ReviewPopModal = ({ open, handleClose, product }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (e) => {
    setUploadedImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = () => {
    // Handle the review submission logic here
    console.log({ rating, reviewText, uploadedImage });
    handleClose();
  };


  return (
    <Modal open={open} onClose={handleClose} className="px-4 md:px-0">
      <div className="p-4 bg-white rounded-md shadow-lg mx-auto mt-20 md:max-w-md relative">
        <h2 className="border-b pb-1 mb-4">Write Review</h2>
        <div className="flex gap-1 border rounded border-gray-300 relative">
          <div>
            <img
              src={product?.image[0]}
              alt={product?.name}
              className="size-32 object-cover rounded-md"
            />
          </div>
          <div className="p-3">
            <h2 className="font-medium line-clamp-2">{product?.name}</h2>
            <p>Rs. {product?.price}</p>
          </div>
          <div className="absolute -bottom-2 right-2 md:flex gap-2 hidden">
            <div>
              <p>Overall Rating: </p>
            </div>
            <div>
              <Rating
                name="product-rating"
                value={rating}
                onChange={(event, newValue) => setRating(newValue)}
                className="mb-4"
              />
            </div>
          </div>

        </div>
          <div className="flex my-3 md:hidden">
            <div>
              <p>Overall Rating: </p>
            </div>
            <div>
              <Rating
                name="product-rating"
                value={rating}
                onChange={(event, newValue) => setRating(newValue)}
                className="mb-4"
              />
            </div>
          </div>

        <div className="mt-5">
          <TextField
            label="Write your review"
            multiline
            rows={5}
            variant="outlined"
            fullWidth
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
        </div>

        <div className="mt-4">
        <Button variant="contained" color="info" component="label" className="w-full">
          Upload Image
          <input type="file" hidden onChange={handleImageUpload} />
        </Button>
        <button onClick={handleSubmit} className="p-2 w-full border border-black  rounded mt-3">
          Submit
        </button>
        </div>

        <button onClick={handleClose} className="p-1 text-lg rounded-full bg-white absolute -top-3 -right-3 border border-black"><MdOutlineClose /></button>
        {/* <h2 variant="h6" className="mb-4">
          Review for {product?.name}
        </h2>
        <img src={product?.image[0]} alt={product?.name} className="w-32 h-32 object-cover rounded-md mb-4" />
        <Rating
          name="product-rating"
          value={rating}
          onChange={(event, newValue) => setRating(newValue)}
          className="mb-4"
        />
        <TextField
          label="Write your review"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          className="mb-4"
        />
        <button variant="contained" component="label" className="mb-4">
          Upload Image
          <input type="file" hidden onChange={handleImageUpload} />
        </button>
        {uploadedImage && <img src={uploadedImage} alt="Uploaded" className="w-32 h-32 object-cover rounded-md mb-4" />}
        <button variant="contained" color="primary" onClick={handleSubmit}>
          Submit Review
        </button> */}
      </div>
    </Modal>
  );
};

export default ReviewPopModal;
