import React from "react";
import Product from "../Data/Product.json";
import { useParams } from "react-router-dom";
import { CiFilter } from "react-icons/ci";
import { HiArrowsUpDown } from "react-icons/hi2";
import ReviewComp from "../Components/ForReview/ReviewComp";
import { Pagination, Stack } from "@mui/material";
// import Rating from "@mui/material/Rating";

const ReviewPage = () => {
  const { id } = useParams();
  const product = Product.find((item) => item.id === parseInt(id));
  const review = [1, 1, 1,1,1];
  //   const [valueOne, setValueOne] = useState(5);
  //   const [valueTwo, setValueTwo] = useState(4);
  //   const [valueThree, setValueThree] = useState(3);
  //   const [valueFour, setValueFour] = useState(2);
  //   const [valueFive, setValueFive] = useState(1);

  if (!product) {
    return (
      <div className="container text-center pt-16 px-4 md:px-0">
        <h2 className="pb-4 text-2xl font-semibold">Product not found</h2>
        <Link to="/shop">
          <button className="bg-black text-white p-2 px-5 ">
            Back to Shop
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-8 md:mt-16 px-4 md:px-0">
      <div className="md:flex gap-5">
        <div className="md:w-[45%]">
          <div className="sticky top-8">
            <div className="border flex items-center gap-1 rounded border-gray-300 mb-6">
              <img
                src={product?.image[0]}
                alt={product?.name}
                className="size-32 rounded-l object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg leading-5 font-medium mb-2">
                  {product?.name}
                </h2>
                <p className="">Rs. {product?.price}</p>
              </div>
            </div>

            <div className="border rounded border-gray-300 p-5 mb-7 md:mb-0">
              <h2 className="font-medium text-lg mb-6">Averge Rating</h2>
              <div className="flex items-center gap-12 justify-center">
                <div className="text-center">
                  <h2 className="text-5xl font-medium">5/5</h2>
                  <p>(200 Reviews)</p>
                </div>
                <div>
                  <div className="rounded-full h-1 w-44 mb-5 flex gap-3 items-center">
                    <p>5</p>
                    <div className="w-[100%] bg-black rounded-full text-[2.5px]">
                      s
                    </div>
                  </div>
                  <div className="rounded-full h-1 w-40 mb-5 flex gap-3 items-center">
                    <p>4</p>
                    <div className="w-[80%] bg-black rounded-full text-[2.5px]">
                      s
                    </div>
                  </div>
                  <div className="rounded-full h-1 w-40 mb-5 flex gap-3 items-center">
                    <p>3</p>
                    <div className="w-[60%] bg-black rounded-full text-[2.5px]">
                      s
                    </div>
                  </div>
                  <div className="rounded-full h-1 w-40 mb-5 flex gap-3 items-center">
                    <p>2</p>
                    <div className="w-[40%] bg-black rounded-full text-[2.5px]">
                      s
                    </div>
                  </div>
                  <div className="rounded-full h-1 w-40 flex gap-3 items-center">
                    <p className="ml-1">1</p>
                    <div className="w-[20%] bg-black rounded-full text-[2.5px]">
                      s
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[55%] md:border-l border-gray-300  md:pl-5 py-3">
          <div>
            <div className="md:flex justify-between border-b pb-3 mb-8">
              <h2 className="font-medium pb-5 md:pb-0 text-xl md:text-base">Product Review</h2>
              <div className="flex">
                <div className="group relative">
                  <button className="flex items-center gap-2 ">
                    <HiArrowsUpDown />
                    Sort: Relevance
                  </button>
                  <ul className="z-10 group-hover:block hidden absolute text-gray-700 pt-1 shadow md:w-full w-auto">
                    <li className="rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer">
                      Relevence
                    </li>
                    <li className="rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer">
                      Recent
                    </li>
                    <li className="rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer">
                      High to Low
                    </li>
                    <li className="rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer">
                      Low to High
                    </li>
                  </ul>
                </div>

                <hr className="h-full border mx-4" />

                <div className="group relative">
                  <button className="flex items-center gap-2">
                    <CiFilter />Filter: All Stars
                  </button>
                  <ul className="z-10 group-hover:block hidden absolute text-gray-700 pt-1 shadow md:w-full w-auto">
                    <li className="rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer">
                      All Stars
                    </li>
                    <li className="rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer">
                      Star 5
                    </li>
                    <li className="rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer">
                      Star 4
                    </li>
                    <li className="rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer">
                      Star 3
                    </li>
                    <li className="rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer">
                      Star 2
                    </li>
                    <li className="rounded-t bg-gray-200 hover:bg-gray-300 p-2 px-4 block whitespace-nowrap cursor-pointer">
                      Star 1
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid justify-between gap-5">
              {review.map(() => (
                <ReviewComp />
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-8">
          <Stack spacing={2}>
            <Pagination count={10} />
          </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
