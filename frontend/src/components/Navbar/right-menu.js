import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class RightMenu extends Component {
  render() {
    return (
      <Menu mode='horizontal'>
        <Menu.Item key='mail'>
          <Link to='/login'>Log Out</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
export default RightMenu;
