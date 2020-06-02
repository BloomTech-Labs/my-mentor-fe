import React, { useState } from "react";
import { AxiosWithAuth } from "../../middleware/axioswithauth";
import { TextField, Button, CircularProgress } from "@material-ui/core";

import "./register.scss";

const initialRegState = {
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
  const [registerData, setRegisterData] = useState(initialRegState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    setError('')
    console.log('here')
    AxiosWithAuth()
      .post("/auth/register/mentee", registerData)
      .then((res) => {
        setIsLoading(false)
        console.log(registerData);
        setRegisterData(initialRegState)
        props.history.push("/menteeLogin");
      })
      .catch((err) => {
        setIsLoading(false)
        console.log(err);
        setError(err.message)
      });
  };

  if (isLoading) {
    return (
      <div>
        <CircularProgress color="primary" size="100px" />
      </div>
    );
  } else {

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
            value={registerData.last_name}
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
            name='title'
            value={registerData.title}
            onChange={handleChange}
            label='Industry'
            required
          />
          <TextField
            type='password'
            name='password'
            value={registerData.password}
            onChange={handleChange}
            label='Password'
            required
          />
          <Button type='submit'>SIGN UP</Button>
        </form>
      </div>
    );
  };
}

export default MenteeRegister;
