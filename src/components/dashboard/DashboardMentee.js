
import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import Nav from '../../mentee/menteeNav';

import { AxiosWithAuth } from '../../middleware/axioswithauth';
import UserInfoMentee from './userInfoMentee.js';


function DashboardMentee(props) {
    const [userLoggedIn, setUserLoggedIn] = useState([]);
    const userStorage = useState(localStorage.getItem('email'));
  
    useEffect(() => {
      AxiosWithAuth()
      .get('https://mentor-be.herokuapp.com/api/mentee',{headers: {Authorization: localStorage.getItem('token')}})
      .then(res => {
        const currentUser = res.data.filter(user => (
          user.email === userStorage[0])
        )[0];
        setUserLoggedIn(currentUser);
      })
      .catch(err => console.log(err.response))
    }, []);
    return (
        <div>  
            <Nav />
            <UserInfoMentee currentUser={userLoggedIn} />
        </div>
    )
};

export default DashboardMentee;