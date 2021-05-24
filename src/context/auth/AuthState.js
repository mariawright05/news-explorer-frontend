/* eslint-disable no-unused-expressions */
import React, { useReducer, useState } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  // REGISTER_FAIL,
  USER_LOADED,
  // AUTH_ERROR,
  LOGIN_SUCCESS,
  // LOGIN_FAIL,
  LOGOUT,
  // CLEAR_ERRORS,
} from '../types';
import { AUTH_URL } from '../../utils/configData.json';

const AuthState = (props) => {
  // const tempUser = {
  //   name: 'Elise',
  //   email: 'example@test.com',
  //   password: '123456',
  // };

  const initialState = {
    token: localStorage.getItem('token'),
    isAuth: true,
    loading: true,
    user: {},
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Open/closed states for popups
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const closeAllPopups = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    setIsSuccessOpen(false);
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
  const setUser = (res) => {
    dispatch({
      type: USER_LOADED,
      payload: res,
    });
  };

  // Load user
  const loadUser = () => {
    fetch(`${AUTH_URL}/users/me`)
      .then((res) => { return res.json(); })
      .then((res) => {
        res.status === 'ok' && setUser(res);
        console.log(res);
        return res;
      })
      .catch(() => { console.log('Error loading user'); });
  };

  // Register user
  const register = (formData) => {
    const res = formData;

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    handleSuccessOpen();
  };

  // Login user
  const login = (formData) => {
    const res = formData;

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    loadUser();
    closeAllPopups();
  };

  // Logout
  const logout = () => { dispatch({ type: LOGOUT }); };

  // Clear errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuth: state.isAuth,
        loading: state.loading,
        user: state.user,
        error: state.error,
        isLoginOpen,
        isRegisterOpen,
        isSuccessOpen,
        register,
        loadUser,
        login,
        logout,
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
