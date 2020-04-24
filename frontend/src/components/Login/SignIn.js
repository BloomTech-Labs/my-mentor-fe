import React from "react";
import { Button, TextField } from "@material-ui/core";

import "./siginin.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className='login-register'>
        <h2 className='title'>Already have an account</h2>
        <span>Sign in with email and password</span>

        <form className='inputForm' onSubmit={this.handleSubmit}>
          <TextField
            name='email'
            type='email'
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <label>Email</label>
          <TextField
            name='password'
            type='password'
            onChange={this.handleChange}
            value={this.state.password}
            required
          />
          <label>Password</label>
          <Button type='submit' value='Submit Form' />
        </form>
      </div>
    );
  }
}

export default SignIn;
