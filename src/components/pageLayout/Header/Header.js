import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const isAuthenticated = true;
  // const logOut = true;

  const authLinks = (
    // need button icon
    // name on button from auth
    <>
      <li className="header__nav-text">
        <Link to="/" className="header__nav-link">Home</Link>
      </li>
      <li className="header__nav-text">
        <Link to="/saved-news" className="header__nav-link">Saved articles</Link>
      </li>
      <button type="button" className="header__nav-button">Elise</button>
    </>
  );

  const guestLinks = (
    <>
      <li className="header__nav-text">
        <Link to="/" className="header__nav=link">Home</Link>
      </li>
      <button type="button" className="header__nav-button">Sign in</button>
    </>
  );

  return (
    <div className="header">
      <div className="header__contents">
        <h1 className="header__title">NewsExplorer</h1>
        <ul className="header__nav-container">
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </div>
  );
};

export default Header;
