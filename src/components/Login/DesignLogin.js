import React from 'react';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import './siginin.scss';
import { Link } from 'react-router-dom';
import Button from "../../mentorProfile/src/components/CustomButtons/Button";

import MenteeLogin from './MenteeLogin';
import MentorLogin from './MentorLogin';

const { TabPane } = Tabs;


const Design = () => { 
  return (
    <>
    <div className='nav'>
      <div className='logo'>
        <Link to='/'>
        <img src={require('../../home-components/photos/connector1.png')} alt='logo'/>
        </Link>
      </div>
      <div className='nav-buttons'>
        <Button simple>
          <Link to="/login">Login</Link>
        </Button>
        <Button simple>
          <Link to="/register">Sign Up</Link>
        </Button>
      </div> 
    </div>

    <div className='mainContainer'>
      <div className='leftContainer'>
        <div className='tabContainer'>
          <Tabs className='tabs' defaultActiveKey="1" >
            <TabPane className='tab'tab="Mentor" key="1">
              <MentorLogin />
            </TabPane>
            <TabPane className='tab'tab="Mentee" key="2">
              <MenteeLogin />
            </TabPane>
          </Tabs>
        </div>
      </div>
      <div className='rightContainer'>
      <img
          className="rightPic"
          src={require("../../home-components/photos/woman-using-computer.png")}
          alt="woman-using-computer"
        />
      </div>
    </div>
  </>
  );
}
export default Design;
