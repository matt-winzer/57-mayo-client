import React, { Component } from 'react'
import './App.css'
import { fetchAuthorizedGet } from './lib/fetch'
import * as auth from './lib/authService'

// Components
import { Container } from 'semantic-ui-react'
import Login from './components/Login'
import Signup from './components/Signup'
import Reviews from './components/Reviews'

const apiUrl = 'http://localhost:3000/api'

class App extends Component {
  state = {
    apiUrl: apiUrl,
    user: '',
    reviews: []
  }

  setUser = (user) => {
    this.setState({ user })
    this.getUserReviews(user.id)
  }

  getUserReviews = (id) => {
    fetchAuthorizedGet(`${this.state.apiUrl}/users/${id}/reviews`, auth.getToken())
      .then(({ error, reviews }) => {
        if (error) {
          console.log(error)
        }
        else this.setState({ reviews })
      })
  }

  render() {
    const { setUser } = this
    const { user, apiUrl, reviews } = this.state
    const reviewsLoaded = reviews.length > 0

    return (
      <div className="App">
        <Container>
          <div className='authentication-container'>
            <Login  apiUrl={apiUrl}
                    setUser={setUser}
                    />
            <Signup  apiUrl={apiUrl}
                    setUser={setUser}
                    />
          </div>
        {user && <h1>Logged in: {user.email}</h1>}
        {reviewsLoaded && <Reviews reviews={reviews} />}
        </Container>
      </div>
    )
  }
}

export default App