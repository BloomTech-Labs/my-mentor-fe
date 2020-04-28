import React from "react";
import { Route, Switch } from "react-router-dom";

import Nav from "./components/Navbar/nav-drawer.js";
import Login from "./components/Login/SignIn";
import MenteeRegister from "./components/Register/menteeRegister";
import MentorRegister from "./components/Register/mentorRegister";

import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/menteeRegister' component={MenteeRegister} />
        <Route path='/mentorRegister' component={MentorRegister} />
      </Switch>
    </>
  );
}

export default App;
