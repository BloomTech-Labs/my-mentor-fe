import React, { useState } from "react";
import { AxiosWithAuth } from "../../middleware/axioswithauth";
import { TextField, Button } from "@material-ui/core";

import "./siginin.scss";

const initialLoginState = {
  email: "",
  password: "",
};

const MentorLogin = (props) => {
  const [loginData, setLoginData] = useState(initialLoginState);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    AxiosWithAuth()
      .post("/auth/login/mentor", loginData)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log("responding data:", res);
        props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='login-register'>
      <h2 className='title'>Already have an account</h2>
      <span>Sign in with email and password</span>

      <form className='formInput' onSubmit={login}>
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
        <Button>Register</Button>
      </form>
    </div>
  );
};

export default MentorLogin;
