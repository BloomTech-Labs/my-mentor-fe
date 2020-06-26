import React, { Component} from 'react'
import { loginUser, logoutUser } from '../redux/actions/index';

import { Link } from "react-router-dom";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class RightMenu extends Component {
  handleLogout = () => {
    localStorage.removeItem('token');
  }
  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props
    return (
      <Menu mode='horizontal'>
        <Menu.Item key='mail'>
          <Link to='/' onClick={this.handleLogout}>Log Out</Link>

        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;
