import React from 'react';
import Header from '../Header/Header';
import './Search.css';

const Search = (props) => {
  const { isAlt, isAuth } = props;

  return (
    <div className="search">
      <Header isAlt={isAlt} isAuth={isAuth} />
      <div className="search__container">
        <h2 className="search__title">What&apos;s going on in the world?</h2>
        <p className="search__subtitle">Find the latest news on any topic and save them in your personal account.</p>
        <form className="search__input-wrapper">
          <input type="text" name="news" className="search__input" />
          <input type="submit" value="Search" className="search__button" />
        </form>
      </div>
    </div>
  );
};

export default Search;
