import React, { useState } from "react";
// @ts-ignore
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

  const handleSubmit = (e) => {
    e.preventDefault();
    AxiosWithAuth()
      .post("/auth/login/mentor", loginData)
      .then((res) => {
        console.log(loginData);

        localStorage.setItem("token", res.data.token);
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
        <Button type='submit' value='Submit Form' />
      </form>
    </div>
  );
};

export default MentorLogin;
