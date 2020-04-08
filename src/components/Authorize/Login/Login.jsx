import React, {Component} from 'react';
import Register from './Register/Register';
import SignIn from './SignIn/SignIn';
import './Login.scss';

class Login extends Component {
  state = {
    register: false
  }
  switchToLogin = () => {
    this.setState({
      register: false
    })
  }
  switchToRegister = () => {
    this.setState({
      register: true
    })
  }
  render() {
    return (
      <div className="login">
        <h1 className="login__title">Task Manager</h1>
        <span>For your personal convenience</span>
        <div className="login__switcher">
          <button onClick={this.switchToLogin} className={this.state.register ? "switcher__btn" : "switcher__btn switcher__btn--active"}>Sign up</button>
          <button onClick={this.switchToRegister} className={this.state.register ? "switcher__btn switcher__btn--active" : "switcher__btn"}>Create an account</button>
        </div>
        {this.state.register ? <Register /> : <SignIn />}
      </div>
    )
  }
}

export default Login;