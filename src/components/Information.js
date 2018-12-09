import React, { Fragment } from 'react'
import { Header, Icon, Card, Button, Image } from 'semantic-ui-react'

const Information = () => {
  return (
    <Fragment>
      <header className='information-header'>
        {/* <Header as='h1' className='page-header'>57 Mayo: Investors Metro Monitor</Header> */}
      </header>
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
    </Fragment>
  )
}

export default Information