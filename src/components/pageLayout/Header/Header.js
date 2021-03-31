import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const isAuthenticated = false;
  // const logOut = true;

  const authLinks = (
    // need button icon
    // name on button from auth
    <>
      <li>Home</li>
      <li>
        <Link to="/saved-news">Saved articles</Link>
      </li>
      <button type="button">Elise</button>
    </>
  );

  const guestLinks = (
    <>
      <li>Home</li>
      <button type="button">Sign in</button>
    </>
  );

  return (
    <div className="header">
      <h1 className="header__title">NewsExplorer</h1>
      <ul>
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </div>
  );
};

export default Header;
