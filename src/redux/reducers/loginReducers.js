import {ADD_USER, AUTHORIZE_USER, LOG_OUT} from '../constants';
import {bake_cookie, read_cookie, delete_cookie} from 'sfcookies';


const defaultState = {
  users: [],
  status: false
}

const chooseCurrent = (state = [], login, password) => {
  return state.filter(user => user.login === login && user.password === password);
}

const loginReducer = (state = defaultState, action) => {
  let users = [];
  state.users = read_cookie('users');
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
        let currentUser = chooseCurrent(state.users, action.login, action.password)[0];
        bake_cookie('current', currentUser);
        document.body.style.background = 'url("https://embedwistia-a.akamaihd.net/deliveries/d5ae8190f0aa7dfbe0b01f336f29d44094b967b5.webp?image_crop_resized=1280x720") no-repeat top / cover';
        return {...state, status: true};
      } else {
        alert('No users found');
        return state;
      }
    case LOG_OUT: 
      delete_cookie('current');
      document.body.style.background = 'transparent';
      return {...state, status: action.status};
    default: 
      return state;
  }
}

export default loginReducer;