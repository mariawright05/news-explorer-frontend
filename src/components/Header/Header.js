import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
  const { isAlt, isAuth } = props;
  console.log(isAuth);

  const authLinks = (
    // need button icon
    // name on button from auth
    <>
      <li className={`header__nav-text ${isAlt ? 'header__color_alt' : ''}`}>
        <Link to="/" className={`header__nav-link ${isAlt ? 'header__color_alt' : ''}`}>Home</Link>
      </li>
      <li className={`header__nav-text ${isAlt ? 'header__color_alt' : ''}`}>
        <Link to="/saved-news" className={`header__nav-link ${isAlt ? 'header__color_alt' : ''}`}>Saved articles</Link>
      </li>
      <button type="button" className={`header__nav-button ${isAlt ? 'header__color_alt' : ''}`}>Elise</button>
    </>
  );

  const guestLinks = (
    <>
      <li className="header__nav-text">
        <Link to="/" className={`header__nav-link ${isAlt ? 'header__color_alt' : ''}`}>Home</Link>
      </li>
      <button type="button" className="header__nav-button">Sign in</button>
    </>
  );

  return (
    <div className="header">
      <div className="header__contents">
        <h1 className={`header__title ${isAlt ? 'header__color_alt' : ''}`}>NewsExplorer</h1>
        <ul className="header__nav-container">
          {isAuth ? authLinks : guestLinks}
        </ul>
      </div>
    </div>
  );
};

export default Header;
