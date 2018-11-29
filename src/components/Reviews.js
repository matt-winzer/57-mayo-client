import React from 'react'

// Components
import Review from './Review'

const Reviews = ({ reviews }) => {
  const reviewComponents = reviews.map(review => (
    <Review key={review.id}
            market={review.market}
            state={review.state}
            content={review.content}
            />
  ))
 
  return (
    <div>
      <h2>Reviews:</h2>
      <div className='user-reviews'>
        { reviewComponents }
      </div>
    </div>
  )
}

export default Reviews