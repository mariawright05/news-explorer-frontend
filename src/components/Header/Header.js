import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PageContext from '../../context/page/PageContext';
import './Header.css';

const Header = (props) => {
  const { isAuth } = props;
  const page = useContext(PageContext);

  const authLinks = (
    // need button icon
    // name on button from auth
    <>
      <li className={`header__nav-text ${page === 'saved-news' ? 'header__color_alt' : ''}`}>
        <Link to="/" className={`header__nav-link ${page === 'saved-news' ? 'header__color_alt' : ''}`}>Home</Link>
      </li>
      <li className={`header__nav-text ${page === 'saved-news' ? 'header__color_alt' : ''}`}>
        <Link to="/saved-news" className={`header__nav-link ${page === 'saved-news' ? 'header__color_alt' : ''}`}>Saved articles</Link>
      </li>
      <button type="button" className={`header__nav-button ${page === 'saved-news' ? 'header__color_alt' : ''}`}>Elise</button>
    </>
  );

  const guestLinks = (
    <>
      <li className="header__nav-text">
        <Link to="/" className={`header__nav-link ${page === 'saved-news' ? 'header__color_alt' : ''}`}>Home</Link>
      </li>
      <button type="button" className="header__nav-button">Sign in</button>
    </>
  );

  return (
    <div className="header">
      <div className="header__contents">
        <h1 className={`header__title ${page === 'saved-news' ? 'header__color_alt' : ''}`}>NewsExplorer</h1>
        <ul className="header__nav-container">
          {isAuth ? authLinks : guestLinks}
        </ul>
      </div>
    </div>
  );
};

export default Header;
