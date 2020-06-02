import React, {useState, useEffect} from "react";
import { AxiosWithAuth } from '../../middleware/axioswithauth';
import Nav from '../../home-components/nav-drawer';
import UserInfo from './userInfo.js';


function Dashboard(props) {
    const [user, setUser] =useState([]);
    const [userLoggedIn, setUserLoggedIn] = useState([]);
    const userStorage = useState(localStorage.getItem('email'));
  
    useEffect(() => {
      AxiosWithAuth()
      .get('https://mentor-be.herokuapp.com/api/mentor',{headers: {Authorization: localStorage.getItem('token')}})
      .then(res => {
        const currentUser = res.data.filter(user => (
          user.email === userStorage[0])
        )[0];
        setUserLoggedIn(currentUser);
        setUser(res.data);
        console.log(setUserLoggedIn)
      })
      .catch(err => console.log(err.response))
    }, []);
    console.log(userLoggedIn)
    const currentUser = user.filter(list => {
      return list.email === userStorage[0];
    })
    return (
        <div>  
            <Nav />
            <UserInfo currentUser={userLoggedIn} user={user} />
        </div>
    )
};

export default Dashboard;
