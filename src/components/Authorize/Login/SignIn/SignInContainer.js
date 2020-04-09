import React from 'react';
import SignIn from './SignIn';
import {connect} from 'react-redux';

const SignInContainer = (props) => {
  return (
    <SignIn status={props.online}/>
  )
}

const mapStateToProps = (state) => {
  return {
    online: state.login.status
  }
}

export default connect(mapStateToProps, null)(SignInContainer);