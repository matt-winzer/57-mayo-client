import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

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
          <Menu.Item name='home' active={activeItem === 'home'} onClick={handleItemClick} />
          <Menu.Item
            name='reviews'
            active={activeItem === 'reviews'}
            onClick={handleItemClick}
          />
          <Menu.Menu position='right'>
          {user
            ? <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleLogout}
              />
            : <Menu.Item
              name='login'
              active={activeItem === 'login'}
              onClick={handleItemClick}
              />
            }
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default Navbar