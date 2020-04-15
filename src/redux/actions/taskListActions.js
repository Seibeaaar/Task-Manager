import {LOG_OUT, ADD_SECTION, DELETE_SECTION, EDIT_SECTION, ADD_TASK} from '../constants';

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

export const deleteSection = (id) => {
  return {
    type: DELETE_SECTION,
    id
  }
}

export const editSection = (id, name) => {
  return {
    type: EDIT_SECTION,
    id,
    name
  }
}

export const addTask = (sectionId, name) => {
  return {
    type: ADD_TASK,
    sectionId,
    name
  }
}