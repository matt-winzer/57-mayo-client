import React, { Fragment } from 'react'
import { 
  Grid
} from 'semantic-ui-react'

import HeaderCard from './HeaderCard'
import InfoCard from './InfoCard'

const Information = () => {
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
            content={'Reviews of 200 major real estate markets in the US and their most popular counties.'}
          />
        </Grid.Column>
        <Grid.Column >
          <InfoCard
            header={'Connect the Dots'}
            content={'Connect the dots between economic data and YOUR investment.'}
          />
        </Grid.Column>
        <Grid.Column >
          <InfoCard
            header={'Subscribe'}
            content={'A subscription includes all 200 markets. $195 per month.'}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Information