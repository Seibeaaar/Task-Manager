import {ADD_USER, AUTHORIZE_USER, LOG_OUT, ADD_SECTION} from '../constants';
import {bake_cookie, read_cookie} from 'sfcookies';


const defaultState = {
  users: read_cookie('users'),
  current: '',
  status: false,
  sections: []
}

const chooseCurrent = (state = [], login, password) => {
  return state.filter(user => user.login === login && user.password === password);
}

const loginReducer = (state = defaultState, action) => {
  let users = [];
  switch(action.type) {
    case ADD_USER:
      if(!state.users.filter(user => user.login === action.user.login).length) {
        users = [...state.users, action.user];
        bake_cookie('users', users);
      } else {
        alert('Already here');
      }
      return {...state, users};
    case AUTHORIZE_USER: 
      if(chooseCurrent(state.users, action.login, action.password).length) {
        return {...state, current: chooseCurrent(state.users, action.login, action.password)[0], status: true};
      } else {
        alert('No users found');
        return state;
      }
    case LOG_OUT: 
      return {...state, current: '', status: action.status};
    case ADD_SECTION:
      return {...state, sections: [...state.sections, action.sectionName]};
    default: 
      return state;
  }
}

export default loginReducer;