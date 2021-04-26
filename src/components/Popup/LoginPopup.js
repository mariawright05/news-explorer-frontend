import React, { useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import './Popup.css';

const LoginPopup = () => {
  const authContext = useContext(AuthContext);
  const {
    register,
    // isAuthenticated,
    isLoginOpen,
    handleRegisterOpen,
    closeAllPopups,
  } = authContext;

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     props.history.push('/');
  //   }
  // // eslint-disable-next-line
  // }, [isAuthenticated, props.history])

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    register({ name, email, password });
  };

  const openRegister = () => {
    closeAllPopups();
    handleRegisterOpen();
  };

  return (
    <div className={`popup ${isLoginOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          aria-label="close popup"
          onClick={closeAllPopups}
        />
        <form action="submit" onSubmit={onSubmit} className="popup__form">
          <h3 className="popup__heading">Sign in</h3>
          <fieldset className="popup__form-group">
            <label htmlFor="email" className="popup__form-label">
              Email
              <input
                id="email"
                type="text"
                name="email"
                className="popup__form-field"
                label="Email"
                placeholder="Enter email"
                value={email}
                required
                onChange={onChange}
              />
            </label>
            <label htmlFor="password" className="popup__form-label">
              Password
              <input
                id="password"
                type="text"
                name="password"
                className="popup__form-field"
                placeholder="Enter password"
                value={password}
                required
                onChange={onChange}
              />
            </label>
          </fieldset>
          <input type="submit" className="popup__button" value="Sign in" />
          <button type="button" className="popup__message_link" onClick={openRegister}>
            <span className="popup__message">or </span>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
