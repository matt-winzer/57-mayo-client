import React, { Component } from 'react'
import './App.css'

// Components
import { Container } from 'semantic-ui-react'
import Login from './components/Login'

const apiUrl = 'http://localhost:3000/api'

class App extends Component {
  state = {
    apiUrl: apiUrl,
    user: ''
  }

  setUser = (user) => {
    this.setState({ user })
  }

  render() {
    const { setUser } = this
    const { user, apiUrl } = this.state
    
    return (
      <div className="App">
        <Container>
          <Login  apiUrl={apiUrl}
                  setUser={setUser}
                  />
        {user && <h1>{user.email}</h1> }
        </Container>
      </div>
    )
  }
}

export default App