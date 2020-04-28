import React from "react";
import { TextField, Button } from "@material-ui/core";

import "./register.scss";

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      city: "",
      state: "",
      email: "",
      industry: "",
      password: "",
      confirmpassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      firstName: "",
      lastName: "",
      city: "",
      state: "",
      email: "",
      industry: "",
      password: "",
      confirmPassword: "",
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      firstName,
      lastName,
      city,
      state,
      email,
      industry,
      password,
      confirmPassword,
    } = this.state;
    return (
      <div className='login-register'>
        <h2 className='title'>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form className='formInput' onSubmit={this.handleSubmit}>
          <TextField
            type='text'
            name='firstName'
            value={firstName}
            onChange={this.handleChange}
            label='First Name'
            required
          />
          <TextField
            type='text'
            name='lastName'
            value={lastName}
            onChange={this.handleChange}
            label='Last Name'
            required
          />
          <TextField
            type='text'
            name='city'
            value={city}
            onChange={this.handleChange}
            label='City'
            required
          />
          <TextField
            type='text'
            name='state'
            value={state}
            onChange={this.handleChange}
            label='State'
            required
          />
          <TextField
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <TextField
            type='text'
            name='industry'
            value={industry}
            onChange={this.handleChange}
            label='Industry'
            required
          />
          <TextField
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <TextField
            type='password'
            name='confimPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <Button type='submit'>SIGN UP</Button>
        </form>
      </div>
    );
  }
}

export default Register;
