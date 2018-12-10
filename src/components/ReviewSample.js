import React from 'react'
import {
  Card,
  Grid
} from 'semantic-ui-react'

// Components
import ReviewChart from './ReviewChart'

const ReviewSample = ({ market, state, date, content, charts }) => {
  const contentComponents = content.map((paragraph, i) => {
    return (
      <p key={i} className='review-paragraph'>{paragraph}</p>
    )
  })

  const chartComponents = charts.map((chart, i) => {
    return (
      <ReviewChart key={i} chart={chart} />
    )
  })

  return (
    
      <Card fluid>
        <Card.Content>
          <p className='review-date'>{date}</p>
          <Card.Header>{market}</Card.Header>
          <Card.Meta>{state}</Card.Meta>
        </Card.Content>
        <Card.Content>
          { contentComponents }
        </Card.Content>
        <Card.Content>
        <Grid stackable centered>
          <Grid.Row centered columns={3}>
            { chartComponents }
          </Grid.Row>
        </Grid>
        </Card.Content>
      </Card>
  )
}

export default ReviewSample