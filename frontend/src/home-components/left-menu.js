import React, { Component } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class LeftMenu extends Component {
  render() {
    return (
   <Menu mode="horizontal">
       <Menu.Item key="mail">
          <Link href="" to="/Home">Home</Link>
        </Menu.Item>
        <SubMenu title={<span>Profile</span>}>
          <MenuItemGroup>
            <Menu.Item key="setting:1">My Profile</Menu.Item>
            <Menu.Item key="setting:2">Messages</Menu.Item>
            <Menu.Item key="setting:3">Saved</Menu.Item>
            <Menu.Item key="setting:4">Reviews</Menu.Item>
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