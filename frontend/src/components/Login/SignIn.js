import React from "react";
import { AxiosWithAuth } from "../../middleware/axioswithauth";
import { Button, TextField } from "@material-ui/core";

import "./siginin.scss";

class SignIn extends React.Component {
  state = {
    credentials: {
      email: "",
      password: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    AxiosWithAuth()
      .post("/login", this.state.credentials)
      .then((result) => {
        localStorage.setItem("token", result.data.payload);
        this.props.history.push();
      })
      .catch((error) => console.log(error));
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div className='login-register'>
        <h2 className='title'>Already have an account</h2>
        <span>Sign in with email and password</span>

        <form className='formInput' onSubmit={this.handleSubmit}>
          <TextField
            name='email'
            type='email'
            onChange={this.handleChange}
            value={this.state.credentials.email}
            required
          />
          <label>Email</label>
          <TextField
            name='password'
            type='password'
            onChange={this.handleChange}
            value={this.state.credentials.password}
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
