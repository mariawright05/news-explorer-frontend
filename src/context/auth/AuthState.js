/* eslint-disable quote-props */
/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-expressions */
import React, { useReducer, useState } from 'react';
// import { useHistory } from 'react-router-dom';
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
  const handleLoadUser = () => {
    console.log('5 - loading user');
    const jwt = localStorage.getItem('jwt');
    loadUser(jwt)
      .then((res) => {
        dispatch({
          type: USER_LOADED,
          payload: res,
        });
      })
      .catch(err => {
        console.log('auth error');
        dispatch({
          type: AUTH_ERROR,
          payload: err,
        });
      });
  };

  // Login
  const handleLogin = (formData) => {
    login(formData)
      .then((res) => {
        res?.token
          ? dispatch({ type: LOGIN_SUCCESS, payload: res })
          : dispatch({ type: LOGIN_FAIL, payload: res });
        closeAllPopups();
        console.log('4 - after dispatching and now redirecting to main');
        // history.push('/');
      })
      .then(() => handleLoadUser())
      .catch((err) => {
        console.log('in catch');
        dispatch({ type: LOGIN_FAIL, payload: err.toString() });
      });
  };

  // useEffect(() => {
  //   console.log('jwt: ', localStorage.getItem('jwt'));
  //   console.log('token: ', state.token);
  //   console.log('user: ', state.user);
  //   console.log('isAuth: ', state.isAuth);
  // }, [state]);

  // Register
  const handleRegister = (formData) => {
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

// Adds fetched user to user state
// const setUser = (res) => {
//   dispatch({
//     type: USER_LOADED,
//     payload: res,
//   });
// };

//   // Load user
//   const loadUser = () => {
//     console.log('#1 in loadUser, token: ', state.token);
//     return fetch(`${DEV_AUTH_URL}/users/me`, {
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'x-auth-token': state.token,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log('#2 data before reducer: ', data);
//         dispatch({
//           type: USER_LOADED,
//           payload: data,
//         });
//       })
//       .catch((err) => {
//         console.log('in the catch');
//         dispatch({
//           type: AUTH_ERROR,
//           payload: err.toString(),
//         });
//       });
//   };

//   // Register user
//   const register = async (formData) => {
//     try {
//       const res = await fetch(`${DEV_AUTH_URL}/signup`, {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       await (
//         res.ok
//           ? res.json()
//           : res.json().then(err => Promise.reject(err))
//       );
//       dispatch({ type: REGISTER_SUCCESS });
//       closeAllPopups();
//       handleSuccessOpen();
//     } catch (err) {
//       dispatch({
//         type: REGISTER_FAIL,
//         payload: err.toString(),
//       });
//     }
//   };

//   const login = (formData) => {
//     console.log('a - start login');
//     return fetch(`${DEV_AUTH_URL}/signin`, {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         return dispatch({
//           type: LOGIN_SUCCESS,
//           payload: data,
//         });
//       })
//       .then(() => {
//         console.log('c - heres where loadUser should happen');
//         console.log('c2 - isAuth: ', state.isAuth);
//         loadUser();
//       })
//       .catch((err) => {
//         dispatch({
//           type: LOGIN_FAIL,
//           payload: err.toString(),
//         });
//       });
//   };

//   // Logout
//   const logout = () => { dispatch({ type: LOGOUT }); };

//   return (
//     <AuthContext.Provider
//       value={{
//         token: state.token,
//         isAuth: state.isAuth,
//         loading: state.loading,
//         username: state.username,
//         errorMsg: state.errorMsg,
//         isLoginOpen,
//         isRegisterOpen,
//         isSuccessOpen,
//         register,
//         loadUser,
//         login,
//         logout,
//         clearErrorMsg,
//         handleLoginOpen,
//         handleRegisterOpen,
//         handleSuccessOpen,
//         closeAllPopups,
//       }}
//     >
//       {props.children}
//     </AuthContext.Provider>
//   );
// };
