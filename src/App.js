import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css'

// Utilities
import { fetchAuthorizedGet } from './lib/fetch'
import * as auth              from './lib/authService'

// Semantic
import { Container } from 'semantic-ui-react'

// Components
import Home         from './components/Home'
import Login        from './components/Login'
import Signup       from './components/Signup'
import Reviews      from './components/Reviews'
import Navbar       from './components/Navbar'
import Information  from './components/Information'

// API
const localApi    = 'http://localhost:3000/api'
const deployedApi = 'https://fifty-seven-mayo.herokuapp.com/api'

class App extends Component {
  state = {
    apiUrl: localApi,
    user: {},
    reviews: []
  }

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
    const { setUser, removeUser }   = this
    const { user, apiUrl, reviews } = this.state

    return (
      <Router>
        <Fragment>
          <Route
            path='/'
            render={props =>  <Navbar
                                history={props.history}
                                user={user}
                                removeUser={removeUser}
                              />}
          />
          <Container>
            <Switch>
              <Route
                exact path='/' 
                component={Home}
              />
              <Route
                path='/information' 
                component={Information}
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
        </Fragment>
      </Router>
    )
  }
}

export default App