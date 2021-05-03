import React, { useState, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import './RegisterPopup.css';

const RegisterPopup = () => {
  const authContext = useContext(AuthContext);
  const {
    register,
    // isAuthenticated,
    isRegisterOpen,
    handleLoginOpen,
    handleSuccessOpen,
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

  const openLogin = () => {
    closeAllPopups();
    handleLoginOpen();
  };

  const openSuccess = () => {
    closeAllPopups();
    handleSuccessOpen();
  };

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
            <label htmlFor="email" className="registerPopup__form-label">
              Email
              <input
                id="email"
                type="text"
                name="email"
                className="registerPopup__form-field"
                label="Email"
                placeholder="Enter email"
                value={email}
                required
                onChange={onChange}
              />
            </label>
            <label htmlFor="password" className="registerPopup__form-label">
              Password
              <input
                id="password"
                type="text"
                name="password"
                className="registerPopup__form-field"
                placeholder="Enter password"
                value={password}
                required
                onChange={onChange}
              />
            </label>
            <label htmlFor="name" className="registerPopup__form-label">
              Username
              <input
                id="name"
                type="text"
                name="name"
                className="registerPopup__form-field"
                placeholder="Enter your username"
                value={name}
                required
                onChange={onChange}
              />
            </label>
          </fieldset>
          <input type="submit" className="registerPopup__button" value="Sign up" onClick={openSuccess} />
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