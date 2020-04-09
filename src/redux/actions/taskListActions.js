import {LOG_OUT, ADD_SECTION} from '../constants';

export const logOut = () => {
  return {
    type: LOG_OUT,
    status: false
  }
}

export const addSection = (sectionName) => {
  return {
    type: ADD_SECTION,
    sectionName
  }
}