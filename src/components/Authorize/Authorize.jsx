import React from 'react';
import Login from './Login/Login';
import './Authorize.scss';

const Authorize = () => {
  return (
    <div className="authorize">
      <div className="authorize__banner"></div>
      <Login />
    </div>
  )
}

export default Authorize;