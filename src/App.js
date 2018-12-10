import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.scss'

// Utilities
import { fetchAuthorizedGet } from './lib/fetch'
import * as auth              from './lib/authService'

// Semantic
import { Container, Image } from 'semantic-ui-react'

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
    apiUrl: deployedApi,
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
          <img id='background-image' src={`https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80`} />
          <Route
            path='/'
            render={props =>  <Navbar
              history={props.history}
              user={user}
              removeUser={removeUser}
              />}
          />
          <Container>
          <Image className='logo-image-header' src='https://www.localmarketmonitor.com/images/logo.png' />
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