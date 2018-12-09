import React, { Fragment } from 'react'
import { 
  Header,
  Icon,
  Card,
  Button,
  Image,
  Grid
} from 'semantic-ui-react'

import HeaderCard from './HeaderCard'

const Information = () => {
  return (
    <Grid stackable>
      <Grid.Row centered>
        <Grid.Column mobile={16} computer={12}>
          <HeaderCard
            header={'Investors Metro Monitor'}
            subheader={'Highly Practical Advice for Investors'}
          />
        </Grid.Column>
      </Grid.Row>
      <Card fluid>
        <Card.Content>
          <Card.Header>Highly Practical Advice for Investors</Card.Header>
        </Card.Content>
        <Card.Content>
          <p>Connect the dots between economic data and YOUR investment.</p>
        </Card.Content>
        <Card.Content>
          <p>A subscription includes all 200 markets. $195 per month. Click Here to Subscribe!</p>
        </Card.Content>
      </Card>
    </Grid>
  )
}

export default Information