import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginPopup from '../Popup/LoginPopup';
import RegisterPopup from '../Popup/RegisterPopup';
import SuccessPopup from '../Popup/SuccessPopup';
import PageContext from '../../context/page/PageContext';
import AuthContext from '../../context/auth/authContext';
import './Header.css';
import { ReactComponent as Icon } from '../../images/logout-white.svg';
import { ReactComponent as IconAlt } from '../../images/logout-dark.svg';

const Header = () => {
  const page = useContext(PageContext);
  const authContext = useContext(AuthContext);
  const {
    user,
    handleLoginOpen,
    isLoginOpen,
    isRegisterOpen,
    isSuccessOpen,
    isAuth,
    logout,
  } = authContext;

  const authLinks = (
    // need name on button from auth
    <>
      <li className={`header__nav-link-container ${page === 'saved-news' ? 'header__color_alt' : ''}`}>
        <NavLink
          to="/"
          className={`header__nav-link ${page === 'saved-news' ? 'header__color_alt' : ''}`}
          exact
          activeClassName="header__nav-link_active"
        >
          Home
        </NavLink>
      </li>
      <li className={`header__nav-link-container ${page === 'saved-news' ? 'header__color_alt' : ''}`}>
        <NavLink
          to="/saved-news"
          className={`header__nav-link ${page === 'saved-news' ? 'header__color_alt' : ''}`}
          activeClassName="header__nav-link_alt_active"
        >
          Saved articles
        </NavLink>
      </li>
      <button
        type="button"
        className={`header__nav-button ${page === 'saved-news' ? 'header__color_alt' : ''}`}
        onClick={logout}
      >
        {user.name}
        {
          page === 'saved-news' ? (
            <IconAlt className="header__icon" />
          ) : (
            <Icon className="header__icon" />
          )
        }
      </button>
    </>
  );

  const guestLinks = (
    <>
      <li className="header__nav-link-container">
        <NavLink
          to="/"
          className={`header__nav-link ${page === 'saved-news' ? 'header__color_alt' : ''}`}
          activeClassName="header__nav-link_active"
        >
          Home
        </NavLink>
      </li>
      <button
        type="button"
        className="header__nav-button signin"
        onClick={handleLoginOpen}
      >
        Sign in
      </button>
      {isLoginOpen && <LoginPopup />}
      {isRegisterOpen && <RegisterPopup />}
      {isSuccessOpen && <SuccessPopup />}
    </>
  );

  const [navLinks, setNavLinks] = useState(guestLinks);

  const handleNavLinks = () => {
    setNavLinks(isAuth ? authLinks : guestLinks);
  };

  useEffect(() => {
    handleNavLinks();
  }, [isAuth]);

  return (
    <div className="header">
      <div className="header__contents">
        <h1 className={`header__title ${page === 'saved-news' ? 'header__color_alt' : ''}`}>NewsExplorer</h1>
        <ul className="header__nav-container">
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default Header;
