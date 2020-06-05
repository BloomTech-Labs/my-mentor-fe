import React from 'react';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import './register.scss';

import MenteeRegister from './menteeRegister';
import MentorRegister from './mentorRegister';

const { TabPane } = Tabs;


const Design = () => { 
  return (
  <div className='tabContainer'>
    <Tabs className='tabs' defaultActiveKey="1" >
      <TabPane className='tab'tab="Mentor" key="1">
        <MentorRegister />
      </TabPane>
      <TabPane className='tab'tab="Mentee" key="2">
        <MenteeRegister />
      </TabPane>
    </Tabs>
  </div>
  );
}
export default Design;