import React from 'react'
import {
  Header,
  Card
} from 'semantic-ui-react'

const InfoCard = ({ header, content }) => {
  return (
    <Card fluid>
      <Card.Content textAlign={'center'}>
        <Card.Header>{header}</Card.Header>
      </Card.Content>
      <Card.Content textAlign={'center'}>
        <p className='info-card-content'>{content}</p>
      </Card.Content>
    </Card>
  )
}

export default InfoCard