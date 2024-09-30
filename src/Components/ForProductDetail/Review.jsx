import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import ReviewComp from '../ForReview/ReviewComp';

const Review = ({product}) => {
const review = [1,1,1];

  return (
    <>
     <div className='container px-4 md:px-0'>
      <div className='mb-10 flex justify-between border-b border-gray-300 pb-2'>
          <h2 className='font-medium text-xl uppercase'>Review</h2>
          <Link to={`/review-page/${product?.id}`}>
          <button className='flex items-center gap-1 group'>View All <BsArrowRight className='group-hover:-rotate-45 duration-200' /></button>
          </Link>
      </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-5">
            {review.map(() => (
              <ReviewComp />
            ))}
          </div>
     </div>
    </>
  )
}

export default Review