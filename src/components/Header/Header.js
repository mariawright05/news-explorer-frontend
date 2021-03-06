/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import SuccessPopup from '../SuccessPopup/SuccessPopup';
import PageContext from '../../context/page/PageContext';
import AuthContext from '../../context/auth/authContext';
import './Header.css';
import { ReactComponent as LogoutIcon } from '../../images/logout-white.svg';
import { ReactComponent as LogoutIconAlt } from '../../images/logout-dark.svg';

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
    handleLogout,
    handleLoadUser,
  } = authContext;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const linkColor = () => {
    if (page === 'saved-news' && !isSidebarOpen) {
      return 'header__color_alt';
    }
    return '';
  };

  const authLinks = (
    <>
      <li className={`header__nav-link-container ${linkColor()}`}>
        <NavLink
          to="/"
          className={`header__nav-link ${linkColor()}`}
          exact
          activeClassName="header__nav-link_active"
        >
          Home
        </NavLink>
      </li>
      <li className={`header__nav-link-container ${linkColor()}`}>
        <NavLink
          to="/saved-news"
          className={`header__nav-link ${linkColor()}`}
          activeClassName="header__nav-link_alt_active"
        >
          Saved articles
        </NavLink>
      </li>
      <button
        type="button"
        className={`header__nav-button ${linkColor()}`}
        onClick={handleLogout}
      >
        {user.name}
        {
          page === 'saved-news' && !isSidebarOpen ? (
            <LogoutIconAlt className="header__icon_logout" />
          ) : (
            <LogoutIcon className="header__icon_logout" />
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
          className={`header__nav-link ${linkColor()}`}
          activeClassName="header__nav-link_active"
        >
          Home
        </NavLink>
      </li>
      <button
        type="button"
        className={`header__nav-button signin ${linkColor()}`}
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
  }, [isAuth, isRegisterOpen, isLoginOpen, isSuccessOpen, isSidebarOpen]);

  const token = localStorage.getItem('jwt');
  useEffect(() => {
    if (token) {
      handleLoadUser();
    }
  }, []);

  return (
    <div className="header">
      <div className="header__contents">
        <h1 className={
          `header__title ${page === 'saved-news' ? 'header__color_alt' : ''}`
        }
        >
          NewsExplorer
        </h1>
        <ul className="header__nav-container">
          {navLinks}
        </ul>
        <button
          type="button"
          className={`header__sidebar-button 
            ${isSidebarOpen
            ? ((page === 'saved-news')
              ? 'header__sidebar_closed-alt'
              : 'header__sidebar_closed')
            : (page === 'saved-news')
              ? 'header__sidebar_open-alt'
              : 'header__sidebar_open'}`}
          aria-label="open or close sidebar"
          onClick={handleSidebar}
        />
      </div>
      <div className={`header__sidebar ${isSidebarOpen ? 'header__sidebar_opened' : ''}`}>
        <ul className="header__sidebar-container">
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default Header;
