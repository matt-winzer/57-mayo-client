import React from 'react'
import {
  Card,
  Grid,
  Statistic
} from 'semantic-ui-react'

// Components
import ReviewChart from './ReviewChart'

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const ReviewSample = ({ market, state, date, content, charts, rentMin, rentMax }) => {
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
        <Grid stackable>
          <Grid.Row divided columns={2}>

            <Grid.Column textAlign='center'>
              <Statistic.Group size={'mini'} widths={'3'}>
                <Statistic>
                  <Statistic.Value>${numberWithCommas(rentMin)}</Statistic.Value>
                  <Statistic.Label>Min</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value>Target Rent</Statistic.Value>
                  <Statistic.Label>Range</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value>${numberWithCommas(rentMax)}</Statistic.Value>
                  <Statistic.Label>Max</Statistic.Label>
                </Statistic>
              </Statistic.Group>
              
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Statistic.Group size={'mini'} widths={'3'}>
                <Statistic>
                  <Statistic.Value>${numberWithCommas(rentMin)}</Statistic.Value>
                  <Statistic.Label>Min</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value>Target Rent</Statistic.Value>
                  <Statistic.Label>Range</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value>${numberWithCommas(rentMax)}</Statistic.Value>
                  <Statistic.Label>Max</Statistic.Label>
                </Statistic>
              </Statistic.Group>
              
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
      <Card.Content>
        { contentComponents }
      </Card.Content>
      <Card.Content>
        <Grid stackable centered>
          <Grid.Row columns={3}>
            { chartComponents }
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  )
}

export default ReviewSample