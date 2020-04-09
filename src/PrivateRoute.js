import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, status, ...rest}) => {
  return (
    <Route
    {...rest}
    render={props => {
      return  status ? (<Component />) : (<Redirect to="/" />)
    }}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    status: state.login.status
  }
}

export default connect(mapStateToProps)(PrivateRoute);