import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {
  Button,
  Card,
  Form,
  Message,
  Grid
} from 'semantic-ui-react'

// Utilities
import jwtDecode from 'jwt-decode'
import { fetchPost } from '../lib/fetch'
import * as auth from '../lib/authService'

// Components
import HeaderCard from './HeaderCard'

class Login extends Component {
  state = {
    email: '',
    password: '',
    message: ''
  }

  componentDidMount() {
    const token = auth.getToken()
    if (token) this.props.setUser(jwtDecode(token))
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetchPost(`${this.props.apiUrl}/auth/login`, this.state)
      .then(({ error, token }) => {
        if (error) this.setState({ message: error})
        else {
          auth.setToken(token)
          this.props.setUser(jwtDecode(token))
        }
      })
  }

  resetMessage = () => {
    this.setState({ message: '' })
  }

  resetForm = () => {
    this.setState({
      email: '',
      password: '',
      message: ''
    })
  }

  render() {
    const { handleChange, handleSubmit } = this
    const { message, email, password } = this.state
    const { user } = this.props

    if (user.id) return <Redirect to='/reviews' />

    return (
      <Grid stackable>
        <Grid.Row centered>
          <Grid.Column mobile={16} tablet={12} computer={8}>
            <HeaderCard
              header={'Investors Metro Monitor'}
              subheader={'Login to Existing Account'}
            />
          </Grid.Column>
        </Grid.Row>
        <Card fluid>
          <Card.Content>
            <Card.Header>Login</Card.Header>
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <label>Email</label>
                <input  placeholder='Email'
                        type='email'
                        name='email'
                        onChange={handleChange}
                        value={email}
                        />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input  placeholder='Password'
                        type='password'
                        name='password'
                        onChange={handleChange}
                        value={password}
                        />
              </Form.Field>
              <Button positive type='submit'>Login</Button>
            </Form>
            {message && <Message error>{message}</Message>}
            </Card.Content>
        </Card>
      </Grid>
    )
  }
}

export default Login