import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({component: Component, status, ...rest}) => {
  console.log(Component);
  return (
    <Route
    {...rest}
    render={props => {
      return true ? (<Component />) : (<Redirect to={{
        pathname: '/login'
      }} />)
    }}
    />
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    status: state
  }
}

export default connect(mapStateToProps)(PrivateRoute);