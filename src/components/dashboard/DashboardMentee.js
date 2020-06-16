import React from "react";
import { connect } from 'react-redux';
import Nav from '../../mentee/menteeNav';
import UserInfoMentee from './userInfoMentee.js';


function DashboardMentee(props) {

    return (
        <div>  
            <Nav />
            <UserInfoMentee />
        </div>
    )
};

export default DashboardMentee;