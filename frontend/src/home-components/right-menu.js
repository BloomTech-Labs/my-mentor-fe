import React, { Component, PropTypes } from 'react'
import Login from '../components/Login/MentorLogin';
import Logout from '../components/Logout/mentorLogout';
import { loginUser, logoutUser } from '../redux/actions/index';

import { Link } from "react-router-dom";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class RightMenu extends Component {
  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props
    return (
      <Menu mode='horizontal'>
        <Menu.Item key='mail'>
          {/* <Link to='/mentorLogin' >Log Out</Link> */}
          {!isAuthenticated &&
              <Login
                errorMessage={errorMessage}
                onLoginClick={ creds => dispatch(loginUser(creds)) }
              />
            }
        </Menu.Item>
        <Menu.Item key='mail'>
          {/* <Link to='/mentorLogin'>Log In</Link> */}
          {isAuthenticated &&
              <Logout onLogoutClick={() => dispatch(logoutUser())} />
            }
        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;
