/* eslint-disable import/no-anonymous-default-export */
import {
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
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('jwt', action.payload.token);
      return {
        ...state,
        token: action.payload.token,
      };
    case AUTH_ERROR:
      return {
        ...state,
        token: null,
        user: {},
        isAuth: false,
        errorMsg: action.payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        token: null,
        user: {},
        isAuth: false,
        errorMsg: action.payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        token: null,
        user: {},
        isAuth: false,
        errorMsg: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errorMsg: null,
      };
    case LOGOUT:
      localStorage.removeItem('jwt');
      localStorage.removeItem('searchTerm');
      localStorage.removeItem('searchedNews');
      return {
        ...state,
        token: null,
        user: {},
        isAuth: false,
      };
    default:
      return state;
  }
};
