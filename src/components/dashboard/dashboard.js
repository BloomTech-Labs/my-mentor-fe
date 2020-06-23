import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { AxiosWithAuth } from '../../middleware/axioswithauth';
import Nav from '../../home-components/nav-drawer';
import UserInfo from './UserInfo.js';

import { setUser } from "../../redux/actions/userActions";


function Dashboard(props) {
    const [userLoggedIn, setUserLoggedIn] = useState([]);
    const userStorage = useState(localStorage.getItem('email'));
    console.log(props,"props from the dashboard")
  
    useEffect(() => {
      AxiosWithAuth()
      .get('https://mentor-be.herokuapp.com/api/mentor',{headers: {Authorization: localStorage.getItem('token')}})
      .then(res => {
        const currentUser = res.data.filter(user => (
          user.email === userStorage[0])
        )[0];
        setUserLoggedIn(currentUser);
        props.setUser(currentUser)
      })
      .catch(err => console.log(err.response))
    }, []);

    return (
        <div>  
            <Nav />
            <UserInfo currentUser={userLoggedIn} />
        </div>
    )
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { setUser })(Dashboard);
