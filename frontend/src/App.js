import React from "react";
import { Route, Switch } from "react-router-dom";

import Nav from "./home-components/nav-drawer.js";
import MenteeLogin from "./components/Login/MenteeLogin";
import MentorLogin from "./components/Login/MentorLogin";
import MenteeRegister from './components/Register/menteeRegister';
import MentorRegister from "./components/Register/mentorRegister";
import Dashboard from "./components/dashboard/dashboard";
import PrivateRoute from "./middleware/privateRoute";
import ProfilePage from './mentorProfile/src/views/ProfilePage/ProfilePage'

import "./App.css";

function App() {
  return (
    <>
      <Nav>
      <Switch>
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <Route exact path='/menteeLogin' component={MenteeLogin} />
        <Route exact path='/mentorLogin' component={MentorLogin} />
        <Route exact path='/menteeRegister' component={MenteeRegister} />
        <Route exact path='/mentorRegister' component={MentorRegister} />
        <ProfilePage />
      </Switch>
      </Nav> 
    </>
  );
}

export default App;
