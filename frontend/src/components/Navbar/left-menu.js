import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LeftMenu extends Component {
  render() {
    return (
   <Menu mode="horizontal">
       <Menu.Item key="mail">
          <a href="">Home</a>
        </Menu.Item>
        <SubMenu title={<span>Profile</span>}>
          <MenuItemGroup>
            <Menu.Item key="setting:1">Messages</Menu.Item>
            <Menu.Item key="setting:2">Saved Mentors</Menu.Item>
            <Menu.Item key="setting:3">something else</Menu.Item>
            <Menu.Item key="setting:4">something else</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="">Feed</a>
        </Menu.Item>
        <Menu.Item key="g1">
          <a href="">Account</a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default LeftMenu;