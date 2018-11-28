import React from 'react'
import { Card } from 'semantic-ui-react'

const Review = ({ market, state, content }) => (
  <Card>
    <Card.Content>
      <Card.Header>{market} {state}</Card.Header>
      <p>{content}</p>
    </Card.Content>
  </Card>
)

export default Review