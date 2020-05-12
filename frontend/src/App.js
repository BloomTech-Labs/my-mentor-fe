import React from "react";
import Nav from "./home-components/nav-drawer";
import { Route } from "react-router-dom";
import Home from "./home-components/Home"
import ProfilePage from './mentorProfile/src/views/ProfilePage/ProfilePage'

import "./App.css";

function App() {
  return (
    <div className='App'>
          <Nav />
          <Route exact path="/" component={Home}/>
          <ProfilePage /> 
    </div>
  );
}

export default App;
