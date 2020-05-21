import React from "react";
import { Route, Switch } from "react-router-dom";

import Nav from "./home-components/nav-drawer.js";
import MenteeLogin from "./components/Login/MenteeLogin";
import MentorLogin from "./components/Login/MentorLogin";
import MenteeRegister from './components/Register/menteeRegister';
import MentorRegister from "./components/Register/mentorRegister";
import MentorLogout from './components/Logout/mentorLogout'
import Dashboard from "./components/dashboard/dashboard";
import PrivateRoute from "./middleware/privateRoute";
import ProfilePage from './mentorProfile/src/views/ProfilePage/ProfilePage'
import DashboardMentee from './components/dashboard/DashboardMentee';
import Home from "./home-components/Home";

import "./App.css";
import "./home-components/home.css";
import MenteeProfilePage from "./mentee/ProfilePage";

function App() {
  return (
    <>
      <Switch>
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
         <PrivateRoute exact path='/dashboardMentee' component={DashboardMentee} />
        <Route exact path='/' component={Home} />
        <Route exact path='/menteeLogin' component={MenteeLogin} />
        <Route exact path='/mentorLogin' component={MentorLogin} />
        <Route exact path='/menteeRegister' component={MenteeRegister} />
        <Route exact path='/mentorRegister' component={MentorRegister} />
        <Route exact path='/profilePage' component={ProfilePage} />

        <Route exact path='/menteeProfilePage' component={MenteeProfilePage} />
        
      </Switch>
    </>
  );
}

export default App;
