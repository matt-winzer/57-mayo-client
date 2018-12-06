import React, { Fragment } from 'react'
import { Header, Icon, Card, Button, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Fragment>
      <Header as='h1'>
        <Icon name='home' />
        <Header.Content>Welcome to 57 Mayo</Header.Content>
      </Header>
      <Button as={ Link } to='/signup'>Signup</Button>
      <Button as={ Link } to='/login'>Login</Button>
      <Card fluid>
        <Card.Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Content>
      </Card>
      <Image src='/jesse-roberts-house-unsplash.jpg'></Image>
    </Fragment>
  )
}
