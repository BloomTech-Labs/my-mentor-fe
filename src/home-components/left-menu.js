import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";


class LeftMenu extends Component {
  handleLogout = () => {
    localStorage.removeItem('token');
  }
  render() {
    return (
      <Menu mode='horizontal'>
        <Menu.Item key='mail'>
          <Link to='/profilePage'>Mentor-Profile</Link>
        </Menu.Item>
        <Menu.Item key='alipay'>
          <Link to='/dashboard'>Dashboard</Link>
        </Menu.Item>
        <Menu.Item key='g1'>
        {/* </Menu.Item>
          <Link to='/mentorLogin'>Logout</Link>
        <Menu.Item key='ali'> */}
          <Link to='/browsementor'>Browse</Link>
        </Menu.Item>

      </Menu>
    );
  }
}
export default LeftMenu;
