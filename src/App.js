import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Authorize from './components/Authorize/Authorize';
import PrivateRoute from './PrivateRoute';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import TaskListContainer from './components/TaskList/TaskListContainer';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = (props) => {
  return (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Authorize} status={props.online}/>
        <PrivateRoute path="/dashboard" component={TaskListContainer} />
      </Switch>
    </Router>
  </Provider>
  )
}

export default App;