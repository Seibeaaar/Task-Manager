import {ADD_SECTION, LOG_OUT, DELETE_SECTION} from '../constants';
import {read_cookie, bake_cookie} from 'sfcookies';

const defaultState = {
  sections: [],
  currentFirstName: '',
  currentLastName: '',
  currentId: ''
}

const updateServer = (state, sections) => {
  let users = read_cookie('users');
  users[identifyingCurrent(users, state.currentId)].sections = sections;
  bake_cookie('users', users);
  bake_cookie('current', users[identifyingCurrent(users, state.currentId)]);
}

const identifyingCurrent = (users, id) => {
  return users.indexOf(users.filter(user => user.id === id)[0]);
}

const removeById = (arr, id) => {
  return arr.filter(section => section.id !== id);
}

const editById = (arr, id) => {
  
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
      if(!action.sectionName) return state;
      sections = [...state.sections, {name: action.sectionName, tasks: [], id: Date.now()}];
      updateServer(state, sections);
      return {...state, sections};
    case DELETE_SECTION:
      sections = removeById(state.sections, action.id);
      updateServer(state, sections);
      return {...state, sections}
    default: 
      return state;
  }
}

export default taskReducer;