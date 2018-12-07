import React from 'react'
import { Redirect } from 'react-router-dom'

// Components
import Review from './Review'

const Reviews = ({ reviews, user }) => {
  const reviewComponents = reviews.map(review => (
    <Review key={review.id}
            market={review.market}
            state={review.state}
            content={review.content}
            />
  ))

  if (!user.id) return <Redirect to='/' />
 
  return (
    <div>
      <h1>Logged in as: {user.email}</h1>
      <h2>Reviews:</h2>
      <div className='user-reviews'>
        { reviewComponents }
      </div>
    </div>
  )
}

export default Reviews