import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addUser} from '../../../../redux/actions/loginActions';

class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
    login: '',
    password: ''
  }
  inputHandler = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  addUser = (e) => {
    e.preventDefault();
    this.props.addUser(this.state.firstName, this.state.lastName, this.state.login, this.state.password);
    this.setState({
      firstName: '',
      lastName: '',
      login: '',
      password: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.addUser} className="login__form">
        <label htmlFor="">
          First name
          <input type="text" name="firstName" className="login__input" onChange={this.inputHandler} value={this.state.firstName} placeholder="Name"/>
        </label>
        <label htmlFor="">
          Last name
          <input type="text" name="lastName" className="login__input" onChange={this.inputHandler} value={this.state.lastName} placeholder="Surname"/>
        </label>
        <label htmlFor="">
          Email
          <input type="email" name="login" className="login__input" onChange={this.inputHandler} value={this.state.login} placeholder="Email"/>
        </label>
        <label htmlFor="">
          Password
          <input type="password" name="password" className="login__input" onChange={this.inputHandler} value={this.state.password} placeholder="Password"/>
        </label>
        <button type="submit" className="submit__btn">Create</button>
      </form>
    )
  }
}

export default connect(null, {addUser})(Register);