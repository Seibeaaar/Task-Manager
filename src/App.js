import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Authorize from './components/Authorize/Authorize';
import PrivateRoute from './PrivateRoute';
import TaskList from './components/TaskList/TaskList';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './redux/reducers/rootReducer';

const store = createStore(rootReducer);

const App = (props) => {
  return (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Authorize} status={props.online}/>
        <PrivateRoute path="/dashboard" component={TaskList} store={store} />
      </Switch>
    </Router>
  </Provider>
  )
}

export default App;