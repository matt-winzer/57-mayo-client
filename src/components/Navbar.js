import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

import * as auth from '../lib/authService'

class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLogout = () => {
    auth.logout()
    this.props.removeUser()
  }

  render() {
    const { activeItem } = this.state
    const { user } = this.props

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
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
              onClick={this.handleItemClick}
              />
            }
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default Navbar