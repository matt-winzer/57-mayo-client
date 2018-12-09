import React from 'react'
import {
  Header,
  Card
} from 'semantic-ui-react'

const HeaderCard = ({ header, subheader }) => {
  return (
    <Card fluid className='header-card'>
      <Card.Content textAlign={'center'}>
        <Header as='h1'>
          <Header.Content className='header-card-header'>{header}</Header.Content>
          <Header.Subheader>{subheader}</Header.Subheader>
        </Header>
      </Card.Content>
    </Card>
  )
}

export default HeaderCard