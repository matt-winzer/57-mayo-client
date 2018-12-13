import React from 'react'
import {
  Card,
  Grid,
  Statistic,
  Icon
} from 'semantic-ui-react'

// Components
import ReviewChart from './ReviewChart'
import ReviewTable from './ReviewTable';

function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const ReviewSample = ({ market,
                        state,
                        date,
                        content,
                        charts,
                        rentMin,
                        rentMax,
                        returnCash,
                        returnEquity,
                        returnRisk,
                        table
                      }) => {
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
              <h2>Target Rent</h2>
              <Statistic.Group size={'mini'} widths={'3'}>
                <Statistic color={'green'}>
                  <Statistic.Value>${numberWithCommas(rentMin)}</Statistic.Value>
                  <Statistic.Label>Min</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value><Icon name='arrows alternate horizontal'/></Statistic.Value>
                  <Statistic.Label>Range</Statistic.Label>
                </Statistic>
                <Statistic color={'green'}>
                  <Statistic.Value>${numberWithCommas(rentMax)}</Statistic.Value>
                  <Statistic.Label>Max</Statistic.Label>
                </Statistic>
              </Statistic.Group>
              
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <h2>Expected Returns</h2>
              <Statistic.Group size={'mini'} widths={'3'}>
                <Statistic color={'blue'}>
                  <Statistic.Value>{returnCash}</Statistic.Value>
                  <Statistic.Label>Cash</Statistic.Label>
                </Statistic>
                <Statistic color={'blue'}>
                  <Statistic.Value>{returnEquity}</Statistic.Value>
                  <Statistic.Label>Equity</Statistic.Label>
                </Statistic>
                <Statistic color={'red'}>
                  <Statistic.Value>{returnRisk}</Statistic.Value>
                  <Statistic.Label>Risk</Statistic.Label>
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
      <Card.Content>
        <Grid stackable>
          <Grid.Row divided columns={2}>
            <Grid.Column textAlign='center'>
              <h2>Current</h2> 
              <ReviewTable
                market={table.market}
              />
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <h2>3 Year Forecast</h2>  
              <ReviewTable
                market={table.usAverage}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  )
}

export default ReviewSample