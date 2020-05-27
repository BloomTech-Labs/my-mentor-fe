import React from "react";
import { connect } from 'react-redux';
import Nav from '../../home-components/nav-drawer';
import UserInfo from './userInfo.js';


function Dashboard(props) {

    return (
        <div>  
            <Nav />
            <UserInfo />
        </div>
    )
};

export default Dashboard;
