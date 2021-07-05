/* eslint-disable quote-props */
/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-expressions */
import React, { useReducer, useState } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  CLEAR_ERRORS,
  LOGIN_FAIL,
} from '../types';
import { loadUser, login, register } from './AuthApi';

const AuthState = (props) => {
  const initialState = {
    token: null,
    isAuth: false,
    errorMsg: null,
    user: {},
  };

  // const history = useHistory();
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Open/closed states for popups
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  // Clear error message
  const clearErrorMsg = () => dispatch({ type: CLEAR_ERRORS });

  // Controls when popups are open or closed
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

  // Load user
  const handleLoadUser = async () => {
    const jwt = localStorage.getItem('jwt');
    try {
      const res = await loadUser(jwt);
      const token = localStorage.getItem('jwt');
      dispatch({
        type: USER_LOADED,
        payload: { res, token },
      });
      state.token = jwt;
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: err,
      });
    }
  };

  // Login
  const handleLogin = async (formData) => {
    try {
      const res = await login(formData);
      res?.token
        ? dispatch({ type: LOGIN_SUCCESS, payload: res })
        : dispatch({ type: LOGIN_FAIL, payload: res });
      closeAllPopups();
      await handleLoadUser();
    } catch (err) {
      dispatch({ type: LOGIN_FAIL, payload: err.toString() });
    }
  };

  // Register
  const handleRegister = async (formData) => {
    try {
      await register(formData);
      closeAllPopups();
      handleSuccessOpen();
    } catch (err) {
      dispatch({ type: REGISTER_FAIL, payload: err.toString() });
    }
    register(formData)
      .then(() => {
        closeAllPopups();
        handleSuccessOpen();
      })
      .catch((err) => dispatch({ type: REGISTER_FAIL, payload: err.toString() }));
  };

  // Logout
  const handleLogout = () => dispatch({ type: LOGOUT });

  // Clear errors
  const handleClearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuth: state.isAuth,
        errorMsg: state.errorMsg,
        user: state.user,
        handleLoadUser,
        handleLogin,
        handleRegister,
        handleLogout,
        handleSuccessOpen,
        handleRegisterOpen,
        handleLoginOpen,
        handleClearErrors,
        isLoginOpen,
        isRegisterOpen,
        isSuccessOpen,
        closeAllPopups,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
