/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import Sidebar from '../Sidebar/Sidebar';
import LoginPopup from '../Popup/LoginPopup';
import RegisterPopup from '../Popup/RegisterPopup';
import SuccessPopup from '../Popup/SuccessPopup';
import PageContext from '../../context/page/PageContext';
import AuthContext from '../../context/auth/authContext';
import './Header.css';
import { ReactComponent as LogoutIcon } from '../../images/logout-white.svg';
import { ReactComponent as LogoutIconAlt } from '../../images/logout-dark.svg';
import { ReactComponent as CloseSidebarIcon } from '../../images/close-menu-black.svg';
import { ReactComponent as OpenSidebarIcon } from '../../images/open-menu-white.svg';
import { ReactComponent as OpenSidebarIconAlt } from '../../images/open-menu-black.svg';

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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavLinks = () => {
    setNavLinks(isAuth ? authLinks : guestLinks);
  };

  const handleSidebar = () => {
    setSidebarOpen(() => { return !sidebarOpen; });
  };

  const handleSidebarIcon = () => {
    // eslint-disable-next-line no-unused-expressions
    sidebarOpen
      ? <CloseSidebarIcon className="header__icon_sidebar" />
      : page === 'saved-news'
        ? <OpenSidebarIconAlt className="header__icon_sidebar" />
        : <OpenSidebarIcon className="header__icon_sidebar" />;
  };

  useEffect(() => {
    handleNavLinks();
  }, [isAuth, isRegisterOpen, isLoginOpen]);

  return (
    <div className="header">
      <div className="header__contents">
        <h1 className={
          `header__title ${page === 'saved-news' ? 'header__color_alt' : ''}`
        }
        >
          NewsExplorer
        </h1>
        <div className="header__mainMenu">
          <ul className="header__nav-container">
            {navLinks}
          </ul>
        </div>
        <div className="header__mobileMenu">
          <button
            type="button"
            className="header__sidebar-button"
            aria-label="open or close sidebar"
            onClick={handleSidebar}
          >
            <OpenSidebarIcon className="header__sidebar-button" />
          </button>
        </div>
      </div>
      <ul className="header__nav-container_sidebar">
        {navLinks}
      </ul>
    </div>
  );
};

export default Header;
