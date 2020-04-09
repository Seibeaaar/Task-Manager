import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, store, ...rest}) => {
  console.log(store.getState());
  return (
    <Route
    {...rest}
    render={props => {
      return store.getState().login.status ? (<Component />) : (<Redirect to="/" />)
    }}
    />
  )
}

export default PrivateRoute;