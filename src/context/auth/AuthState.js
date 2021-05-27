/* eslint-disable quote-props */
/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-expressions */
import React, { useReducer, useState } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  // REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  // LOGIN_FAIL,
  LOGOUT,
  REGISTER_FAIL,
  CLEAR_ERRORS,
  LOGIN_FAIL,
} from '../types';
import { DEV_AUTH_URL } from '../../utils/configData.json';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuth: null,
    loading: true,
    username: null,
    errorMsg: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Open/closed states for popups
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  // Clear error message
  const clearErrorMsg = () => dispatch({ type: CLEAR_ERRORS });

  const closeAllPopups = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    setIsSuccessOpen(false);
    clearErrorMsg();
  };

  const handleLoginOpen = () => {
    setIsLoginOpen(true);
  };

  const handleRegisterOpen = () => {
    setIsRegisterOpen(true);
  };

  const handleSuccessOpen = () => {
    setIsSuccessOpen(true);
  };

  // Adds fetched user to user state
  // const setUser = (res) => {
  //   dispatch({
  //     type: USER_LOADED,
  //     payload: res,
  //   });
  // };

  // Load user
  const loadUser = () => {
    console.log('#1 in loadUser, token: ', state.token);
    return fetch(`${DEV_AUTH_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token': state.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('#2 data before reducer: ', data);
        dispatch({
          type: USER_LOADED,
          payload: data,
        });
      })
      .catch((err) => {
        console.log('in the catch');
        dispatch({
          type: AUTH_ERROR,
          payload: err.toString(),
        });
      });
  };

  // Register user
  const register = async (formData) => {
    try {
      const res = await fetch(`${DEV_AUTH_URL}/signup`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      await (
        res.ok
          ? res.json()
          : res.json().then(err => Promise.reject(err))
      );
      dispatch({ type: REGISTER_SUCCESS });
      closeAllPopups();
      handleSuccessOpen();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.toString(),
      });
    }
  };

  const login = (formData) => {
    console.log('a - start login');
    return fetch(`${DEV_AUTH_URL}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        return dispatch({
          type: LOGIN_SUCCESS,
          payload: data,
        });
      })
      .then(() => {
        console.log('c - heres where loadUser should happen');
        console.log('c2 - isAuth: ', state.isAuth);
        loadUser();
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.toString(),
        });
      });
  };

  // Logout
  const logout = () => { dispatch({ type: LOGOUT }); };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuth: state.isAuth,
        loading: state.loading,
        username: state.username,
        errorMsg: state.errorMsg,
        isLoginOpen,
        isRegisterOpen,
        isSuccessOpen,
        register,
        loadUser,
        login,
        logout,
        clearErrorMsg,
        handleLoginOpen,
        handleRegisterOpen,
        handleSuccessOpen,
        closeAllPopups,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
