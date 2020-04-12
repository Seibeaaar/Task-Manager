import {ADD_SECTION, LOG_OUT} from '../constants';
import {read_cookie, bake_cookie} from 'sfcookies';

const defaultState = {
  sections: [],
  currentFirstName: '',
  currentLastName: '',
  currentId: ''
}

const identifyingCurrent = (users, id) => {
  console.log(users.indexOf(users.filter(user => user.id === id)[0]));
  return users.indexOf(users.filter(user => user.id === id)[0]);
}

const taskReducer = (state = defaultState, action) => {
  let sections = [];
  const currentUser = read_cookie('current');
  state.sections = currentUser.sections;
  state.currentFirstName = currentUser.firstName;
  state.currentLastName = currentUser.lastName;
  state.currentId = currentUser.id;
  switch(action.type) {
    case LOG_OUT: 
      return {...state, sections: [], currentFirstName: '', currentLastName: ''};
    case ADD_SECTION:
      sections = [...state.sections, {name: action.sectionName, tasks: []}];
      let users = read_cookie('users');
      users[identifyingCurrent(users, state.currentId)].sections = sections;
      bake_cookie('users', users);
      bake_cookie('current', users[identifyingCurrent(users, state.currentId)]);
      return {...state, sections};
    default: 
      return state;
  }
}

export default taskReducer;