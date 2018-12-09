import React from 'react'
import {
  Grid,
  Button,
  Icon
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
            icon='plus'
            contentFirst={'Reviews of 200 Real Estate Markets'}
            contentSecond={'Popular Counties'}
          />
        </Grid.Column>
        <Grid.Column >
          <InfoCard
            header={'Connect the Dots'}
            icon='angle double down'
            contentFirst={'Between Economic Data'}
            contentSecond={'Your Investment'}
          />

        </Grid.Column>
        <Grid.Column >
          <InfoCard
            header={'Subscribe'}
            icon='arrows alternate vertical'
            contentFirst={'200 Markets'}
            contentSecond={'$195/month'}
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