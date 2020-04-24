import React from "react";
import { Route, Switch } from "react-router-dom";

import Nav from "./components/Navbar/nav-drawer.js";
import Login from "./components/Login/SignIn";
import Register from "./components/Register/Register";

import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </>
  );
}

export default App;
