import React from "react";
import Nav from "./home-components/nav-drawer";
import { Route } from "react-router-dom";
import Home from "./home-components/Home"
import "./App.css";
import SignInSignUp from "./components/signin-and-signup/signin-signup";

function App() {
  return (
    // <div className='App'>
    //   <header className='App-header'>
    //     <SignInSignUp />
    //   </header>
    // </div>
    //<Nav />

    <div className='App'>
    <Nav />
    <Route exact path="/" component={Home}/>
</div>
  );
}

export default App;
