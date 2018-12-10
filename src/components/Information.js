import React from 'react'
import { 
  Grid,
  Button,
  Card,
  List,
  Divider
} from 'semantic-ui-react'

// Components
import HeaderCard from './HeaderCard'
import InfoCard from './InfoCard'
import PDFCard from './PDFCard'

const Information = () => {
  return (
    <Grid stackable>
      <Grid.Row centered>
        <Grid.Column mobile={16} tablet={12} computer={8}>
          <HeaderCard
            header={'Metro Monitor Information'}
            subheader={'Product Features & Sample'}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
          <Button size={'massive'} color={'violet'}>Subscribe Now</Button>
      </Grid.Row>
      <Grid.Row columns={3}>

        <Grid.Column>
          <Card fluid>
            <Card.Content>
              <Card.Header textAlign={'center'}>Vital Insight</Card.Header>
            </Card.Content>
            <Card.Content className='info-card-content'>

              <List>
                <List.Item>Target Rent Range
                  <List bulleted>
                    <List.Item>Where the largest concentration of renters is found</List.Item>
                  </List>
                </List.Item>
                <Divider />
                <List.Item>Expected Returns From
                  <List bulleted>
                    <List.Item>Renting (Cash on Cash)</List.Item>
                    <List.Item>Equity Appreciation</List.Item>
                    <List.Item>High - Medium - Low</List.Item>
                  </List>
                </List.Item>
                <Divider />
                <List.Item>Risk
                  <List bulleted>
                    <List.Item>Future Falling Prices</List.Item>
                    <List.Item>Insufficient Rent</List.Item>
                    <List.Item>High - Medium - Low</List.Item>
                  </List>
                </List.Item>
              </List>
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column>
          <Card fluid>
            <Card.Content>
              <Card.Header textAlign={'center'}>Expert Analysis</Card.Header>
            </Card.Content>
            <Card.Content className='info-card-content'>
              <List>
                <List.Item>Positive & Negative Features of the Current Situation
                    <List bulleted>
                    <List.Item>In plain language</List.Item>
                  </List>
                </List.Item>
                <Divider />
                <List.Item>3 Concise Paragraphs
                    <List bulleted>
                    <List.Item>Investment Strategies</List.Item>
                    <List.Item>The Local Economy</List.Item>
                    <List.Item>Investment Risk</List.Item>
                  </List>
                </List.Item>
                <Divider />
                <List.Item>3 Essential Trend Charts
                    <List bulleted>
                    <List.Item>Home Price Change</List.Item>
                    <List.Item>Job Growth Rate</List.Item>
                    <List.Item>Home Price vs Income Price</List.Item>
                    {/* <List.Item>See if a market is OVER-PRICED</List.Item> */}
                  </List>
                </List.Item>
              </List>
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column>
          <Card fluid>
            <Card.Content>
              <Card.Header textAlign={'center'}>Crucial Depth</Card.Header>
            </Card.Content>
            <Card.Content className='info-card-content'>
              <List>
                {/* <List.Item>Positive & Negative Features of the Current Situation
                    <List bulleted>
                    <List.Item>In plain language</List.Item>
                  </List>
                </List.Item>
                <Divider /> */}
                <List.Item>Current Average
                    <List bulleted>
                    <List.Item>Home Price</List.Item>
                    <List.Item>Monthly Rent</List.Item>
                    <List.Item>3-year Forecast for each</List.Item>
                  </List>
                </List.Item>
                <Divider />
                <List.Item>County Sub-Markets
                    <List bulleted>
                    <List.Item>Target Rent Range</List.Item>
                    <List.Item>Home Prices</List.Item>
                    <List.Item>Rents and the Ratio</List.Item>
                    <List.Item>3-year Forecast for each</List.Item>
                    <List.Item>Job Growth in the past 2 years</List.Item>
                  </List>
                </List.Item>
              </List>
            </Card.Content>
            <Card.Content extra>
              2 year Job Growth is an important way to compare sub-markets for the strength of demand for housing - for both homes and rentals.
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column tablet={8} computer={16}>
          <PDFCard header='Sample Review' path={'https://drive.google.com/file/d/1H7bBkYsNfuq7mBIKlm9J8o_IMyq3cHcr/preview'} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Information