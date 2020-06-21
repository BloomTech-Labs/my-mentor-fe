import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LeftMenu extends Component {
  handleLogout = () => {
    localStorage.removeItem('token');
  }
  render() {
    return (
      <Menu mode='horizontal'>
        <Menu.Item key='mail'>
          <Link to='/menteeProfilePage'>Mentee-Profile</Link>
        </Menu.Item>
        <Menu.Item key='alipay'>
          <Link to='/dashboardMentee'>Dashboard</Link>
        </Menu.Item>
        <Menu.Item key='g1'>
        <Link to='/browsementor'>Browse</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
export default LeftMenu;
