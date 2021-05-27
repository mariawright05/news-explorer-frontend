/* eslint-disable import/no-anonymous-default-export */
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_ERRORS,
  AUTH_ERROR,
  LOGIN_FAIL,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      console.log('$$$in userLoaded reducer, action.payload: ', action.payload);
      localStorage.setItem('username', action.payload.name);
      return {
        ...state,
        ...action.payload,
        username: action.payload.name,
        isAuth: true,
        loading: false,
        user: action.payload,
      };
    case REGISTER_SUCCESS:
      // localStorage.setItem('token', action.payload.token);
      // localStorage.setItem('username', action.payload.name);
      return {
        ...state,
        ...action.payload,
        // user: {
        //   name: action.payload.name,
        //   email: action.payload.email,
        // },
        isAuth: false,
        loading: false,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuth: false,
        loading: false,
        user: null,
        errorMsg: action.payload,
      };
    case LOGIN_SUCCESS:
      // localStorage.setItem('token', action.payload.token);
      console.log('***action payload in login reducer', action.payload);
      return {
        ...state,
        ...action.payload,
        token: action.payload.token,
        isAuth: true,
        loading: false,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuth: false,
        loading: false,
        user: {},
        errorMsg: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errorMsg: null,
      };
    default:
      return state;
  }
};
