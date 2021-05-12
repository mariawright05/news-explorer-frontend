/* eslint-disable import/no-anonymous-default-export */
import {
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: action.payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
        loading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
        loading: false,
        popupOpen: false,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuth: false,
        loading: false,
        user: '',
        error: action.payload,
      };

    default:
      return state;
  }
};
