import React from 'react';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import './siginin.scss';

import MenteeLogin from './MenteeLogin';
import MentorLogin from './MentorLogin';

const { TabPane } = Tabs;


const Design = () => { 
  return (
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
  );
}
export default Design;