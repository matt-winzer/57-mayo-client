import React from 'react'
import {
  Card,
  Icon
} from 'semantic-ui-react'

const InfoCard = ({ header, contentFirst, contentSecond, icon }) => {
  return (
    <Card fluid>
      <Card.Content textAlign={'center'}>
        <Card.Header>{header}</Card.Header>
      </Card.Content>
      <Card.Content textAlign={'center'}>
        <p className='info-card-content'>{contentFirst}</p>
        <Icon
          name={icon}
          size='big'
        />
        <p className='info-card-content'>{contentSecond}</p>
      </Card.Content>
    </Card>
  )
}

export default InfoCard