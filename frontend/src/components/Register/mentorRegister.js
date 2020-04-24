import React from "react";
import TextField from "@material-ui/core/TextField";

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      profession: "",
      username: "",
      password: "",
      confirmpassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      profession: "",
      username: "",
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
      email,
      profession,
      username,
      password,
      confirmPassword,
    } = this.state;
    return (
      <div>
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form>
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
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <TextField
            type='text'
            name='profession'
            value={profession}
            onChange={this.profession}
            label='Profession'
            required
          />
          <TextField
            type='text'
            name='username'
            value={username}
            onChange={this.handleChange}
            label='Username'
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
          <button type='submit'>SIGN UP</button>
        </form>
      </div>
    );
  }
}

export default Register;
