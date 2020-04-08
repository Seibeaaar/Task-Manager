import {ADD_USER, AUTHORIZE_USER} from '../constants';

export const addUser = (firstName, lastName, login, password) => {
  return {
    type: ADD_USER,
    user: {
      firstName,
      lastName,
      login,
      password,
      id: Date.now()
    }
  }
}

export const authorizeUser = (login, password) => {
  return {
    type: AUTHORIZE_USER,
    login,
    password
  }
}