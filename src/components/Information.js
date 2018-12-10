import React from 'react'
import { 
  Grid,
  Button,
  Card,
  Embed
} from 'semantic-ui-react'

// Components
import HeaderCard from './HeaderCard'
import InfoCard from './InfoCard'
import ViewPDF from './ViewPDF'

const Information = () => {
  return (
    <Grid stackable>
      <Grid.Row centered>
        <Grid.Column mobile={16} tablet={12} computer={8}>
          <HeaderCard
            header={'Metro Monitor Information'}
            subheader={'Product Features'}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
          <Button size={'massive'} color={'violet'}>Subscribe Now</Button>
      </Grid.Row>
      <Grid.Row>
        <ViewPDF path={'/austin-tx.pdf'} />
      </Grid.Row>
    </Grid>
  )
}

export default Information