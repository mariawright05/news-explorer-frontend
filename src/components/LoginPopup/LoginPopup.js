/* eslint-disable no-use-before-define */
/* eslint-disable arrow-body-style */
import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import './LoginPopup.css';
import useForm from '../../utils/useForm';
import validate from './validateLogin';

const LoginPopup = () => {
  const authContext = useContext(AuthContext);
  const {
    handleLogin,
    isLoginOpen,
    handleRegisterOpen,
    closeAllPopups,
    errorMsg,
  } = authContext;

  const loginCallback = () => handleLogin(values);

  const {
    values,
    onChange,
    onSubmit,
    errors,
  } = useForm(loginCallback, validate);

  const openRegister = () => {
    closeAllPopups();
    handleRegisterOpen();
  };

  return (
    <div className={`loginPopup ${isLoginOpen ? 'loginPopup_opened' : ''}`}>
      <div className="loginPopup__container">
        <button
          type="button"
          className="loginPopup__close-button"
          aria-label="close loginPopup"
          onClick={closeAllPopups}
        />
        <form action="submit" onSubmit={onSubmit} className="loginPopup__form" noValidate>
          <h3 className="loginPopup__heading">Sign in</h3>
          <fieldset className="loginPopup__form-group">
            <div className="loginPopup__field-group">
              Email
              <label htmlFor="email" className="loginPopup__form-label">
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={`loginPopup__form-field ${errors.email && 'loginPopup__error'}`}
                  label="Email"
                  placeholder="Enter email"
                  value={values.email || ''}
                  required
                  onChange={onChange}
                />
                {errors.email && <p className="loginPopup__error_visible">{errors.email}</p>}
              </label>
            </div>
            <div className="loginPopup__field-group">
              <label htmlFor="password" className="loginPopup__form-label">
                Password
                <input
                  id="password"
                  type="text"
                  name="password"
                  className={`loginPopup__form-field ${errors.password && 'loginPopup__error'}`}
                  placeholder="Enter password"
                  value={values.password || ''}
                  required
                  onChange={onChange}
                />
                {errors.password && <p className="loginPopup__error_visible">{errors.password}</p>}
              </label>
            </div>
          </fieldset>
          {errorMsg && <p className="loginPopup__errorMsg_visible">{errorMsg}</p>}
          <input type="submit" className="loginPopup__button" value="Sign in" />
          <button type="button" className="loginPopup__message_link" onClick={openRegister}>
            <span className="loginPopup__message">or </span>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
