import React, { useReducer, useState } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../types';

const AuthState = (props) => {
  const tempUser = {
    name: 'Elise',
    email: 'example@test.com',
    password: '123456',
  };

  const initialState = {
    isAuth: true,
    loading: true,
    user: tempUser,
  };

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

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load user
  const loadUser = () => {
    const res = tempUser;

    dispatch({
      type: USER_LOADED,
      payload: res,
    });
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

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuth: state.isAuth,
        loading: state.loading,
        user: state.user,
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
      { props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
