import { combineReducers } from 'redux';
import loginReducer from '../reducers/loginReducers';
import taskReducer from '../reducers/taskReducers';

export default combineReducers({
  login: loginReducer,
  tasks: taskReducer
})