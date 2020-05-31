import React, { useState } from 'react';
import { Drawer, Input } from 'antd';
import Mentor from './mentor';

const { Search } = Input;
const Filter = (props) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className='filterbutton' onClick={showDrawer}>
        Filter
      </div>
      <Drawer
        title="Filter"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>
        <Search placeholder="search by name" onSearch={value => console.log(value)} enterButton />
        
        </p>
        <div>Some contents...</div>
        <p>Some contents...</p>
      </Drawer>
      <div>
        {props.mentor.map(mentor => (
          <Mentor mentor={mentor} key={mentor.id} />
        ))}
      </div>
    </>
  );
};

export default Filter;