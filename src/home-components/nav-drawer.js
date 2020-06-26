import React, { Component, PropTypes } from 'react'

import Dashboard from '../components/dashboard/dashboard'
import LeftMenu from "./left-menu";
import RightMenu from "./right-menu";
import { Drawer, Button } from "antd";
import ProfilePageSample from '../mentorProfile/src/views/ProfilePage/ProfilePage';
import { Link } from "react-router-dom";
import './home.css';
class Navbar extends Component {
  state = {
    current: "mail",
    visible: false,
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
  
    return (
      <nav className="menuBar">
          <Link to="/" className='logo'>
            <img src={require('./photos/connector1.png')} alt='logo'/>
          </Link>
        <div className="menuCon">
          <div className="leftMenu">
            <LeftMenu />
          </div>
          <div className="rightMenu">
            <RightMenu />
          </div>
          <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
            <span className="barsBtn"></span>
          </Button>
          <Drawer
            title="Home Portal"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            
            <LeftMenu />
            {/* <RightMenu /> */}
          </Drawer>
        </div>
      </nav>
    );
  }
}
export default Navbar;
