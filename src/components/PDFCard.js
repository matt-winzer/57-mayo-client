import React from 'react'
import {
  Card
} from 'semantic-ui-react'

const PDFCard = ({ header, path }) => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header textAlign={'center'}>{header}</Card.Header>
      </Card.Content>
      <Card.Content className='pdf-card'>
        <object
          data={path}
          type='application/pdf'
          width='100%'
          height='100%'
        >
        </object>
      </Card.Content>
    </Card>
  )
}

export default PDFCard