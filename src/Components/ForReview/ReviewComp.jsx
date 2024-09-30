import React, { useState } from "react";
import Rating from "@mui/material/Rating";

const ReviewComp = () => {
     const [value, setValue] = useState(4);

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
        </div>
      </div>
    </>
  );
};

export default ReviewComp;
