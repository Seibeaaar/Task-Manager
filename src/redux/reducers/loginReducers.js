import {ADD_USER, AUTHORIZE_USER} from '../constants';
import {bake_cookie, read_cookie} from 'sfcookies';

const chooseCurrent = (state = [], login, password) => {
  return state.filter(user => user.login === login && user.password === password);
}

const loginReducer = (state = [], action) => {
  let users = [], current, online = false;
  state = read_cookie('users');
  switch(action.type) {
    case ADD_USER:
      if(!state.users.filter(user => user.login === action.user.login).length) {
        users = [...state, action.user];
        bake_cookie('users', users);
      } else {
        alert('Already here');
      }
      return users;
    case AUTHORIZE_USER: 
      current = chooseCurrent(state, action.login, action.password);
      online = true;
      return {
        current,
        status: online
      };
    default: 
      return state;
  }
}

export default loginReducer;