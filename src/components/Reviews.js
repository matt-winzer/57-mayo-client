import React from 'react'
import { Redirect } from 'react-router-dom'

// Components
import Review from './Review'
import ReviewSample from './ReviewSample'

const Reviews = ({ reviews, user }) => {
  const review = {
    id: 1,
    market: 'Austin-Round Rock',
    state: 'Texas',
    date: 'December 1, 2018',
    targetRent: {
      minimum: '1332',
      maximum: '1732'
    },
    expectedReturns: {
      cash: 'Medium',
      equity: 'High',
      risk: 'Medium'
    },
    content: [
      'The high Home Price/Rent ratio means that investors will do best by splitting single-family homes into multiple units.Apartment buildings are a good bet but may be priced too high.Locations near colleges, medical centers, and retail complexes are favored.Aim for the upper end of the Target Rent Range.The good home price forecast suggests that buyers move quickly and encourages rehab re-sales, but can also indicate an eventual price bubble so investors must have an exit strategy if prices stall.',
      'The economy is tied to the large government sector, business services (to the government) and information.Recent growth in government was fair.Total job growth was strong in recent months, up from 3 months ago.Population growth has been high.Over the last three years, home prices rose 23 percent, 7 percent in the past year.Income grew 10 percent(US: 9%).42 percent of housing is rented.The market is now well overpriced, a serious concern for investors. ',
      'In OVERPRICED markets like this, the risk that home prices (and rents) will eventually fall increasesas prices keep rising.The end of the boom is often prompted by a slowing economy.Althoughgrowth is still high, investors must closely monitor the job and price situation.Selling in the next yearis a good option.An exit strategy is essential, even if it just consists of sitting tight.'
    ],
    charts: [
      '/home-price-change.png',
      '/job-growth-rate.png',
      '/home-vs-income.png'
    ]
  }

  // const reviewComponents = reviews.map(review => (
  //   <Review key={review.id}
  //           market={review.market}
  //           state={review.state}
  //           content={review.content}
  //           />
  // ))

  // if (!user.id) return <Redirect to='/' />
 
  return (
    <div>
      <h1>Logged in as: {user.email}</h1>
      <div className='user-reviews'>
        <ReviewSample
          market={review.market}
          state={review.state}
          date={review.date}
          content={review.content}
          charts={review.charts}
        />
      </div>
    </div>
  )
}

export default Reviews