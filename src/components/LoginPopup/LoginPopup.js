/* eslint-disable no-use-before-define */
/* eslint-disable arrow-body-style */
import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import './LoginPopup.css';
import useForm from '../../utils/useForm';

const LoginPopup = () => {
  const authContext = useContext(AuthContext);
  const {
    login,
    // isAuthenticated,
    isLoginOpen,
    handleRegisterOpen,
    closeAllPopups,
  } = authContext;

  const setLogin = () => login(values);

  const { values, onChange, onSubmit } = useForm(setLogin);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     props.history.push('/');
  //   }
  // // eslint-disable-next-line
  // }, [isAuthenticated, props.history])

  // const [user, setUser] = useState({
  //   email: '',
  //   password: '',
  // });

  // const { email, password } = user;

  // const onChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   login(user);
  // };

  // const setLogin = () => login(values);

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
        <form action="submit" onSubmit={onSubmit} className="loginPopup__form">
          <h3 className="loginPopup__heading">Sign in</h3>
          <fieldset className="loginPopup__form-group">
            <label htmlFor="email" className="loginPopup__form-label">
              Email
              <input
                id="email"
                type="email"
                name="email"
                className="loginPopup__form-field"
                label="Email"
                placeholder="Enter email"
                value={values.email || ''}
                required
                onChange={onChange}
              />
            </label>
            <label htmlFor="password" className="loginPopup__form-label">
              Password
              <input
                id="password"
                type="text"
                name="password"
                className="loginPopup__form-field"
                placeholder="Enter password"
                value={values.password || ''}
                required
                minLength="6"
                onChange={onChange}
              />
            </label>
          </fieldset>
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
