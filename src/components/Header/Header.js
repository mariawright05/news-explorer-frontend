import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import PageContext from '../../context/page/PageContext';
import './Header.css';
import { ReactComponent as Icon } from '../../images/logout-white.svg';
import { ReactComponent as IconAlt } from '../../images/logout-dark.svg';

const Header = (props) => {
  const { isAuth } = props;
  const page = useContext(PageContext);

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
      <button type="button" className={`header__nav-button ${page === 'saved-news' ? 'header__color_alt' : ''}`}>
        Elise
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
