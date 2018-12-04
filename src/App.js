import React, { Component } from 'react'
import './App.css'
import { fetchAuthorizedGet } from './lib/fetch'
import * as auth from './lib/authService'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// Components
import { Container } from 'semantic-ui-react'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Reviews from './components/Reviews'
import Navbar from './components/Navbar'

const apiUrl = 'http://localhost:3000/api'

class App extends Component {
  state = {
    apiUrl: apiUrl,
    user: '',
    reviews: [],
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  setUser = (user) => {
    this.setState({ user })
    this.getUserReviews(user.id)
  }

  removeUser = () => {
    this.setState({
      user: '',
      reviews: []
    })
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
    const { setUser, removeUser, handleItemClick } = this
    const { user, apiUrl, reviews, activeItem } = this.state
    const reviewsLoaded = reviews.length > 0

    return (
      <Router>
        <div className="App">
        <Navbar user={user}
                removeUser={removeUser}
                activeItem={activeItem}
                handleItemClick={handleItemClick}
                />
          <Container>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route  path='/login'
                      render={() => <Login
                                apiUrl={apiUrl}
                                setUser={setUser}
                                /> }
              />
              <Route path='/reviews'
                render={() => <Reviews reviews={reviews} />}
              />

            </Switch>
            {/* <div className='authentication-container'>
              <Login  apiUrl={apiUrl}
                      setUser={setUser}
                      />
              <Signup  apiUrl={apiUrl}
                      setUser={setUser}
                      />
            </div>
          {user && <h1>Logged in: {user.email}</h1>}
          {reviewsLoaded
            ? <Reviews reviews={reviews} />
            : <h2>Reviews: None Available</h2>} */}
          </Container>
        </div>
      </Router>
    )
  }
}

export default App