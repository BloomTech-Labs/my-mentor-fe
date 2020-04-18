import React from "react";

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

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h2>Already have an account</h2>
        <span>Sign in with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            name='email'
            type='email'
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <label>Email</label>
          <input
            name='password'
            type='password'
            onChange={this.handleChange}
            value={this.state.password}
            required
          />
          <label>Password</label>
          <input type='submit' value='Submit Form' />
        </form>
      </div>
    );
  }
}

export default SignIn;
