import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class RightMenu extends Component {
  handleLogout = () => {
    localStorage.removeItem('token');
  }
  render() {
    return (
      <Menu mode='horizontal'>
        <Menu.Item key='mail'>
          <Link to='/mentorLogin' onClick={this.handleLogout}>Log Out</Link>
          
        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;
