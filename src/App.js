import React from "react";
import { Route, Switch } from "react-router-dom";

import DesignLogin from "./components/Login/DesignLogin";
import DesignRegister from "./components/Register/DesignRegister";
import Dashboard from "./components/dashboard/dashboard";
import PrivateRoute from "./middleware/privateRoute";
import ProfilePage from './mentorProfile/src/views/ProfilePage/ProfilePage';
import DashboardMentee from './components/dashboard/DashboardMentee';
import Home from "./home-components/Home";
import browseMentor from './components/Browse/browseMentor';
import "./App.css";
import "./home-components/home.css";
import MenteeProfilePage from "./mentee/ProfilePage";

function App() {
 
  return (
    <>
      <Switch >
        <PrivateRoute exact path='/dashboard' component={Dashboard}/>
        <PrivateRoute exact path='/dashboardMentee' component={DashboardMentee} />
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={DesignLogin} />
        <Route exact path='/register' component={DesignRegister} />
        <Route exact path='/profilePage' component={ProfilePage} />
        <Route exact path='/menteeProfilePage' component={MenteeProfilePage} />
        <Route exact path='/browsementor' component={browseMentor} />
      </Switch>
    </>
  );
}

export default App;
