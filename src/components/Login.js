import React, { Component } from 'react'
import { Button, Card, Form, Message } from 'semantic-ui-react'
import jwtDecode from 'jwt-decode'
import { fetchPost } from '../lib/fetch'
import * as auth from '../lib/authService'

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
          this.resetMessage()
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
    const { message } = this.state

    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>Login</Card.Header>
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>Email</label>
              <input placeholder='Email' type='email' name='email' onChange={handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder='Password' type='password' name='password' onChange={handleChange} />
            </Form.Field>
            <Button positive type='submit'>Login</Button>
          </Form>
          {message && <Message error>{message}</Message>}
          </Card.Content>
      </Card>
    )
  }
}

export default Login