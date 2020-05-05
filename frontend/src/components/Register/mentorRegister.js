import React, { useState } from "react";
import { AxiosWithAuth } from "../../middleware/axioswithauth";
import { TextField, Button } from "@material-ui/core";

import "./register.scss";

const initialRegState = {
  first_name: "",
  last_name: "",
  city: "",
  state: "",
  profession: "",
  image: "",
  email: "",
  password: "",
};

const MentorRegister = (props) => {
  const [registerData, setRegisterData] = useState(initialRegState);
  console.log(initialRegState);

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AxiosWithAuth()
      .post("/auth/register/mentor", registerData)
      .then((res) => {
        console.log(registerData);
        props.history.push("/mentorLogin");
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
          type='text'
          name='profession'
          value={registerData.profession}
          onChange={handleChange}
          label='Profession'
          required
        />
        <TextField
          type='img'
          name='image'
          value={registerData.image}
          onChange={handleChange}
          label='Image'
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

export default MentorRegister;
