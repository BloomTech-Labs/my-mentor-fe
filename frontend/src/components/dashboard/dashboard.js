import React from "react";
import { connect } from 'react-redux';
import Nav from '../../home-components/nav-drawer';
import UserInfo from './userInfo.js';


function Dashboard(props) {
    console.log(props.getMentorData)
    console.log(props.data)
    return (
        <div>  
            <Nav />
            <UserInfo />
        </div>
    )
};

const mapStateToProps = state => {
    return {
        data: state.data
    }
}
export default Dashboard;
