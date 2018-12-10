import React from 'react'
import {
  Image,
  Grid
} from 'semantic-ui-react'

const ReviewChart = ({ chart }) => {
  return (
    <Grid.Column textAlign='center' className='review-image-container'>
      <Image src={chart} className='review-image' />
    </Grid.Column>
  )
}

export default ReviewChart