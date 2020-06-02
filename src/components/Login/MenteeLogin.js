import React, { useState } from "react";
import { AxiosWithAuth } from "../../middleware/axioswithauth";
import { TextField, Button } from "@material-ui/core";

import "./siginin.scss";
import { Link } from "react-router-dom";

const initialLoginState = {
  email: "",
  password: "",
};

const MenteeLogin = (props) => {
  const [loginData, setLoginData] = useState(initialLoginState);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AxiosWithAuth()
      .post("/auth/login/mentee", loginData)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res)
        props.history.push("/dashboardMentee");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='login-register'>
      <h2 className='title'>Already have an account</h2>
      <span>Sign in with email and password</span>

      <form className='formInput' onSubmit={handleSubmit}>
        <TextField
          name='email'
          type='email'
          onChange={handleChange}
          value={loginData.email}
          required
        />
        <label>Email</label>
        <TextField
          name='password'
          type='password'
          onChange={handleChange}
          value={loginData.password}
          required
        />
        <label>Password</label>
        <Button type='submit' value='Submit Form'>Log In</Button>
        <Button>
          <Link to='/menteeRegister'>Register</Link>
        </Button>
      </form>
    </div>
  );
};

export default MenteeLogin;
