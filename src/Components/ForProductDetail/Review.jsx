import React, { useState } from 'react'
import { LuUserCircle } from "react-icons/lu";
import Rating from "@mui/material/Rating";

const Review = () => {
     const [value, setValue] = useState(4);

  return (
    <>
     <div className='container'>
          <h2 className='font-medium text-center  text-xl mb-5 uppercase'>Review</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-5">
            <div className="border border-gray-300 rounded shadow p-5">
              <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center mb-5">
                  <div>
                    <i>
                      <LuUserCircle className="size-10 stroke-1" />
                    </i>
                  </div>
                  <div className="leading-3">
                    <h3 className="text-xl font-medium">John Deo</h3>
                    <p>7 Aug, 2024</p>
                  </div>
                </div>

                <div>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </div>
              </div>

              <div>
                <p>
                  Lorem ipsum dolor sit amet, pornstar nun adipisicing elit.
                  Culpa minus ut asperiores a veniam quaerat, doloribus
                  architecto consequatur molestias aperiam.
                </p>
              </div>
            </div>
            <div className="border border-gray-300 rounded shadow p-5">
              <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center mb-5">
                  <div>
                    <i>
                      <LuUserCircle className="size-10 stroke-1" />
                    </i>
                  </div>
                  <div className="leading-3">
                    <h3 className="text-xl font-medium">John Deo</h3>
                    <p>7 Aug, 2024</p>
                  </div>
                </div>

                <div>
                  {" "}
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </div>
              </div>

              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Culpa minus ut asperiores a veniam quaerat, doloribus
                  architecto consequatur molestias aperiam.
                </p>
              </div>
            </div>
            <div className="border border-gray-300 rounded shadow p-5">
              <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center mb-5">
                  <div>
                    <i>
                      <LuUserCircle className="size-10 stroke-1" />
                    </i>
                  </div>
                  <div className="leading-3">
                    <h3 className="text-xl font-medium">John Deo</h3>
                    <p>7 Aug, 2024</p>
                  </div>
                </div>

                <div>
                  {" "}
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </div>
              </div>

              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Culpa minus ut asperiores a veniam quaerat, doloribus
                  architecto consequatur molestias aperiam.
                </p>
              </div>
            </div>
          </div>
     </div>
    </>
  )
}

export default Review