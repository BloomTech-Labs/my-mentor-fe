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
          <Link to='/profilePage'>Mentor-Profile</Link>
        </Menu.Item>
        {/* <Menu.Item key='mailtwo'>
          <Link to='/'>Mentee-Profile</Link>
        </Menu.Item> */}
        {/* <SubMenu title={<span>Profile</span>}>
          <MenuItemGroup>
            <Menu.Item key='setting:1'>Messages</Menu.Item>
            <Menu.Item key='setting:2'>Saved Mentors</Menu.Item>
            <Menu.Item key='setting:3'>something else</Menu.Item>
            <Menu.Item key='setting:4'>something else</Menu.Item>
          </MenuItemGroup>
        </SubMenu> */}
        <Menu.Item key='alipay'>
          <Link to='/dashboard'>Dashboard</Link>
        </Menu.Item>
        <Menu.Item key='g1'>
          <Link to='/mentorLogin'>Login</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
export default LeftMenu;
