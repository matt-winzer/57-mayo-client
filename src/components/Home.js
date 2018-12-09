import React from 'react'
import {
  Grid, Button
} from 'semantic-ui-react'

// Components
import HeaderCard from './HeaderCard'
import InfoCard from './InfoCard'

const Home = () => {
  return (
    <Grid stackable>
      <Grid.Row centered>
        <Grid.Column mobile={16} tablet={12} computer={8}>
          <HeaderCard
            header={'Investors Metro Monitor'}
            subheader={'Highly Practical Advice for Investors'}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={3}>
        <Grid.Column >
          <InfoCard
            header={'Expert Advice'}
            content={'Reviews of 200 Real Estate Markets\n+\nPopular Counties'}
          />
        </Grid.Column>
        <Grid.Column >
          <InfoCard
            header={'Connect the Dots'}
            content={'Between Economic Data\n&\nYour Investment'}
          />

        </Grid.Column>
        <Grid.Column >
          <InfoCard
            header={'Subscribe'}
            content={'Subscription Includes:\n200 Markets\n$195/month'}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Button size={'massive'} color={'violet'}>Subscribe Now</Button>
      </Grid.Row>
    </Grid>
  )
}

export default Home