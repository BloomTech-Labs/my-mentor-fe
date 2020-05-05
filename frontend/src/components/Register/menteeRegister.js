import React, { useState } from "react";
import { AxiosWithAuth } from "../../middleware/axioswithauth";
import { TextField, Button } from "@material-ui/core";

import "./register.scss";

const inititalRegState = {
  first_name: "",
  last_name: "",
  city: "",
  state: "",
  title: "",
  image: "",
  description: "",
  email: "",
  password: "",
};

const MenteeRegister = (props) => {
  const [registerData, setRegisterData] = useState(inititalRegState);

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AxiosWithAuth()
      .post("/auth/register/mentee", registerData)
      .then((res) => {
        props.history.push("/menteeLogin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='login-register'>
      <h2 className='title'>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form className='formInput' onSubmit={handleSubmit}>
        <TextField
          type='text'
          name='first_name'
          value={registerData.first_name}
          onChange={handleChange}
          label='First Name'
          required
        />
        <TextField
          type='text'
          name='last_name'
          value={registerData.lastName}
          onChange={handleChange}
          label='Last Name'
          required
        />
        <TextField
          type='text'
          name='city'
          value={registerData.city}
          onChange={handleChange}
          label='City'
          required
        />
        <TextField
          type='text'
          name='state'
          value={registerData.state}
          onChange={handleChange}
          label='State'
          required
        />
        <TextField
          type='email'
          name='email'
          value={registerData.email}
          onChange={handleChange}
          label='Email'
          required
        />
        <TextField
          type='text'
          name='industry'
          value={registerData.industry}
          onChange={handleChange}
          label='Industry'
          required
        />
        <TextField
          type='password'
          name='password'
          value={registerData.password}
          onChange={this.handleChange}
          label='Password'
          required
        />
        <Button type='submit'>SIGN UP</Button>
      </form>
    </div>
  );
};

export default MenteeRegister;
