import {ADD_SECTION, LOG_OUT} from '../constants';
import {read_cookie} from 'sfcookies';

const defaultState = {
  sections: [],
  currentFirstName: '',
  currentLastName: ''
}

const taskReducer = (state = defaultState, action) => {
  let sections = [];
  const currentUser = read_cookie('current');
  state.sections = currentUser.sections;
  state.currentFirstName = currentUser.firstName;
  state.currentLastName = currentUser.lastName;
  switch(action.type) {
    case LOG_OUT: 
      return {...state, sections: [], currentFirstName: '', currentLastName: ''};
    case ADD_SECTION:
      sections = [...state.sections, {name: action.sectionName, tasks: []}];
      return {...state, sections};
    default: 
      return state;
  }
}

export default taskReducer;