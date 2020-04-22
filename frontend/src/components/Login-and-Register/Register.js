import React from "react";

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      major: "",
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
      major: "",
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
      major,
      username,
      password,
      confirmPassword,
    } = this.state;
    return (
      <div>
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form>
          <input
            type='text'
            name='firstName'
            value={firstName}
            onChange={this.handleChange}
            label='First Name'
            required
          />
          <input
            type='text'
            name='lastName'
            value={lastName}
            onChange={this.handleChange}
            label='Last Name'
            required
          />
          <input
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <input
            type='text'
            name='major'
            value={major}
            onChange={this.handleChange}
            label='Major'
            required
          />
          <input
            type='text'
            name='username'
            value={username}
            onChange={this.handleChange}
            label='Username'
            required
          />
          <input
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <input
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
