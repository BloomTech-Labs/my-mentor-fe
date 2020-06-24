import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Button from "../mentorProfile/src/components/CustomButtons/Button";

export default function Home() {
  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid  rgb(56, 142, 255)}";
    document.body.appendChild(css);
};

  return (
    <div>
      <div className='nav'>
        <div className='logo'>
          <img src={require('./photos/connector1.png')} alt='logo'/>
        </div>
        <div className='nav-buttons'>
          <Button simple>
            <Link to="/login">Login</Link>
          </Button>
          <Button simple>
            <Link to="/register">Sign Up</Link>
          </Button>
        </div>  
      </div>
      <div className="home-div">
         <h1 className="home-header">
          <a href="/" className="typewrite" data-period="2000" data-type='["Find a mentor.", "Become a mentor.", "Become your best self.", "Career advice for tomorrow&#39;s leaders."]'>
            <span className='wrap'></span>
          </a>
        </h1>
        <img
          className="home-pic"
          src={require("./photos/joshua-unsplash.jpg")}
          alt="Mentor and Mentee drinking coffee"
        />
      </div>
    </div>
  );
}

