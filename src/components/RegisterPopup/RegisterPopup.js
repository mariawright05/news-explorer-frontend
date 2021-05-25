/* eslint-disable no-use-before-define */
/* eslint-disable arrow-body-style */
import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import './RegisterPopup.css';
import useForm from '../../utils/useForm';
import validate from './validateRegister';

const RegisterPopup = () => {
  const authContext = useContext(AuthContext);
  const {
    register,
    isAuth,
    isRegisterOpen,
    handleLoginOpen,
    handleSuccessOpen,
    closeAllPopups,
  } = authContext;

  const setRegister = () => register(values);

  const {
    values,
    onChange,
    onSubmit,
    errors,
  } = useForm(setRegister, validate);

  const openLogin = () => {
    closeAllPopups();
    handleLoginOpen();
  };

  const openSuccess = () => {
    closeAllPopups();
    handleSuccessOpen();
  };

  useEffect(() => {
    if (isAuth) openSuccess();
  }, [isAuth]);

  return (
    <div className={`registerPopup ${isRegisterOpen ? 'registerPopup_opened' : ''}`}>
      <div className="registerPopup__container">
        <button
          type="button"
          className="registerPopup__close-button"
          aria-label="close registerPopup"
          onClick={closeAllPopups}
        />
        <form action="submit" onSubmit={onSubmit} className="registerPopup__form">
          <h3 className="registerPopup__heading">Sign up</h3>
          <fieldset className="registerPopup__form-group">
            <div className="registerPopup__field-group">
              Email
              <label htmlFor="email" className="registerPopup__form-label">
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={`registerPopup__form-field ${errors.email && 'registerPopup__error'}`}
                  label="Email"
                  placeholder="Enter email"
                  value={values.email || ''}
                  required
                  onChange={onChange}
                />
                {errors.email && <p className="registerPopup__error_visible">{errors.email}</p>}
              </label>
            </div>
            <div className="registerPopup__field-group">
              Password
              <label htmlFor="password" className="registerPopup__form-label">
                <input
                  id="password"
                  type="text"
                  name="password"
                  className={`registerPopup__form-field ${errors.password && 'registerPopup__error'}`}
                  placeholder="Enter password"
                  value={values.password || ''}
                  required
                  onChange={onChange}
                />
                {errors.password && <p className="registerPopup__error_visible">{errors.password}</p>}
              </label>
            </div>
            <div className="registerPopup__field-group">
              Username
              <label htmlFor="username" className="registerPopup__form-label">
                <input
                  id="username"
                  type="text"
                  name="username"
                  className={`registerPopup__form-field ${errors.username && 'registerPopup__error'}`}
                  placeholder="Enter your username"
                  value={values.username || ''}
                  required
                  onChange={onChange}
                />
                {errors.username && <p className="registerPopup__error_visible">{errors.username}</p>}
              </label>
            </div>
          </fieldset>
          <input type="submit" className="registerPopup__button" value="Sign up" onClick={onSubmit} />
          <button type="button" className="registerPopup__message_link" onClick={openLogin}>
            <span className="registerPopup__message">or </span>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPopup;
