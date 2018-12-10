import React from 'react'
import {
  Card,
  Image,
  Grid
} from 'semantic-ui-react'

const ReviewSample = ({ market, state, date, content, charts }) => {
  const contentComponents = content.map((paragraph, i) => {
    return (
      <p key={i} className='review-paragraph'>{paragraph}</p>
    )
  })

  const chartComponents = charts.map((chart, i) => {
    return (
      <Grid.Column textAlign='center' className='review-image-container'>
        <Image key={i} src={chart} className='review-image' />
      </Grid.Column>
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