import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { RxCross1 } from "react-icons/rx";
import { PiUploadSimpleLight } from "react-icons/pi";

const MultipleImage = ({ image, setImage, title, imageNum }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result;
          setImage((prevImages) => [...prevImages, base64String]);
        };

        if (file) {
          reader.readAsDataURL(file);
        }
      });
    },
    [image]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/jpeg": [], "image/png": [], "image/gif": [] },
    multiple: true,
  });

  const handleDeleteImage = (index) => {
    setImage((prevImages) => prevImages.filter((_, idx) => idx !== index));
  };
  return (
    <section>
      {/* Conditionally render the Dropzone if no image has been uploaded */}
      {image.length < imageNum && (
        <div
          {...getRootProps()}
          className={`border-2 border-gray-300 h-[4rem] border-dashed rounded-xl py-2 px-5 content-center text-center cursor-pointer ${
            isDragActive ? "bg-gray-100" : ""
          }`}
        >
          <input {...getInputProps()} required />
          <div className="flex items-center gap-2 justify-center">
            <i className="">
              <PiUploadSimpleLight className="text-2xl" />
            </i>
            <p className=" font-poppins font-[500]">
              Drag drop here or click to upload.
            </p>
          </div>
        </div>
      )}

      {/* Preview Uploaded Image */}
      <div className="mt-[1.3rem] grid grid-cols-3 gap-5">
        {image?.map((item, idx) => (
          <div key={idx} className="relative z-[15] h-[5rem] w-full">
            <img
              src={item}
              className="rounded-lg h-full w-full object-contain border border-gray-400"
              alt="Preview"
            />
            <RxCross1
              className="text-2xl bg-black/50 backdrop-blur-lg text-white absolute top-2 right-2 p-1.5 rounded-md cursor-pointer"
              onClick={() => handleDeleteImage(idx)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MultipleImage;
