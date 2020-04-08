import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Authorize from './components/Authorize/Authorize';
import PrivateRoute from './PrivateRoute';
import {connect} from 'react-redux';
import TaskList from './components/TaskList/TaskList';

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Authorize} status={props.online}/>
        <PrivateRoute path="/dashboard" component={TaskList} status={props.online} />
      </Switch>
    </Router>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    online: state.login
  }
}

export default connect(mapStateToProps)(App);