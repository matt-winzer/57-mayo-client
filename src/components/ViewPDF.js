import React from 'react'
import {
  Card,
  Embed
} from 'semantic-ui-react'

const ViewPDF = ({ path }) => {
  return (
    <Card fluid>
      <Card.Content>
        <Embed
          url={path}
          active
        />
      </Card.Content>
    </Card>
  )
}

export default ViewPDF