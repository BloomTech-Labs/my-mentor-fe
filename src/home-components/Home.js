import React from "react";
import "./home.css";
import Nav from "../home-components/nav-drawer";
import { Link } from "react-router-dom";
import Button from "../mentorProfile/src/components/CustomButtons/Button";

export default function Home() {

  return (
    <div>
      {/* <Nav /> replace with dynamic routes for mentor/mentee */}
      <Button simple>
        <Link to="/mentorLogin">Mentor Login</Link>
      </Button>
      <Button simple>
        <Link to="/menteeLogin">Mentee Login</Link>
      </Button>
      <div className="home-div">
        <h1 className="home-header">
          Connect to your future, rewrite the past
        </h1>
        <p>Search for mentors</p>
        <p>Sponser a mentee</p>
        <p>Customize your search</p>
        <p>Be apart of a community</p>
        <img
          className="home-pic"
          src={require("./photos/joshua-unsplash.jpg")}
          alt="Mentor and Mentee drinking coffee"
        />
      </div>
    </div>
  );
}

