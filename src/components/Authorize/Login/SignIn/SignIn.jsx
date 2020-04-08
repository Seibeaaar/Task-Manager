import React, {Component} from 'react';
import {useHistory} from 'react-router-dom';

class SignIn extends Component {
  state = {
    login: '',
    password: ''
  }
  inputHandler = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  signIn = (e) => {
    let history = useHistory();
    e.preventDefault();
    this.props.authorizeUser(this.state.login, this.state.password);
    history.push('/dashboard');
    this.setState({
      login: '',
      password: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.signIn} className="login__form">
        <label>
          Login
          <input type="email" name="login" className="login__input" onChange={this.inputHandler} value={this.state.login} placeholder="Enter your email"/>
        </label>
        <label>
          Password
          <input type="password" name="password" className="login__input" onChange={this.inputHandler} value={this.state.password} placeholder="Enter your password"/>
        </label>
        <button type="submit" className="submit__btn">Login</button>
      </form>
    )
  }
}

export default SignIn;