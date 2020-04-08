import { combineReducers } from 'redux';
import loginReducer from '../reducers/loginReducers';

export default combineReducers({
  login: loginReducer
})