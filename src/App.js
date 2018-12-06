import React, { Component } from 'react'
import './App.css'
import { fetchAuthorizedGet } from './lib/fetch'
import * as auth from './lib/authService'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
    user: {},
    reviews: []
  }

  setUser = (user) => {
    this.setState({ user: user, activeItem: 'reviews' })
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
    const { setUser, removeUser } = this
    const { user, apiUrl, reviews, activeItem } = this.state

    return (
      <Router>
        <div>
          <Route
            path='/'
            render={props =>  <Navbar
                                history={props.history}
                                user={user}
                                removeUser={removeUser}
                                activeItem={activeItem}
                              />}
          />
          <Container>
            <Switch>
              <Route
                exact path='/' 
                component={Home}
              />
              <Route 
                path='/login'
                render={() => <Login
                                apiUrl={apiUrl}
                                setUser={setUser}
                                user={user}
                              /> }
              />
              <Route 
                path='/signup'
                render={() => <Signup
                                apiUrl={apiUrl}
                                setUser={setUser}
                                user={user}
                              /> }
              />
              <Route
                path='/reviews'
                render={() => <Reviews
                                reviews={reviews}
                                user={user}
                                />}
              />
            </Switch>
          </Container>
        </div>
      </Router>
    )
  }
}

export default App