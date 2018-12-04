import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import * as auth from '../lib/authService'

class Navbar extends Component {
  handleLogout = () => {
    auth.logout()
    this.props.removeUser()
  }

  render() {
    const { user, activeItem, handleItemClick } = this.props

    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item as='p' name='home' active={activeItem === 'home'} onClick={handleItemClick} />
          </Link>
          <Link to='/reviews'>
            <Menu.Item
              name='reviews'
              active={activeItem === 'reviews'}
              onClick={handleItemClick}
            />
          </Link>
          
          <Menu.Menu position='right'>
          {user
            ? <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleLogout}
              />
            : <Link to='/login'>
                <Menu.Item
                  name='login'
                  active={activeItem === 'login'}
                  onClick={handleItemClick}
                />
              </Link>
            }
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default Navbar