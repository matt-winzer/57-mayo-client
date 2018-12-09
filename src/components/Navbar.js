import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link, NavLink, Redirect } from 'react-router-dom'

// Utilities
import * as auth from '../lib/authService'

class Navbar extends Component {
  handleLogout = () => {
    auth.logout()
    this.props.removeUser()
    this.props.history.push('/login')
  }


  render() {
    const { user } = this.props

    return (
        <Menu pointing secondary>
          <Menu.Item
            as={ NavLink }
            exact
            to='/'
            name='home'
            activeClassName='active'
          />
          <Menu.Item
            as={ NavLink }
            to='/information'
            name='information'
            activeClassName='active'
          />
          {user.id
            ? <Menu.Item
                as={ NavLink }
                to='/reviews'
                name='reviews'
                activeClassName='active'
              />
            : <Menu.Item
                  as={ NavLink }
                  to='/signup'
                  name='signup'
                  activeClassName='active'
              />
          }
          
          <Menu.Menu position='right'>
          {user.id
            ? <Menu.Item
                name='logout'
                onClick={this.handleLogout}
              />
            : <Menu.Item
                as={ NavLink }
                to='/login'
                name='login'
                activeClassName='active'
              />
            }
            
          </Menu.Menu>
        </Menu>
    )
  }
}

export default Navbar