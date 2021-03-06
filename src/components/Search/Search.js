/* eslint-disable no-use-before-define */
import React, { useContext, useEffect } from 'react';
import Header from '../Header/Header';
import NewsContext from '../../context/news/newsContext';
import AuthContext from '../../context/auth/authContext';
import useForm from '../../utils/useForm';
import validate from './validateSearch';

import './Search.css';

const Search = () => {
  const newsContext = useContext(NewsContext);
  const { handleSearchNews, setQuery } = newsContext;

  const authContext = useContext(AuthContext);
  const { isAuth } = authContext;

  const searchCallback = () => {
    handleSearchNews(values.query);
    setQuery(values.query);
  };

  const {
    values,
    onChange,
    onSubmit,
    errors,
  } = useForm(searchCallback, validate);

  const searchTerm = localStorage.getItem('searchTerm');

  useEffect(() => {
    if (searchTerm && isAuth) {
      values.query = searchTerm;
    } else {
      values.query = '';
    }
  }, [isAuth]);

  return (
    <div className="search">
      <Header />
      <div className="search__container">
        <h2 className="search__title">What&apos;s going on in the world?</h2>
        <p className="search__subtitle">Find the latest news on any topic and save them in your personal account.</p>
        <form className="search__input-wrapper" onSubmit={onSubmit}>
          <input
            type="text"
            name="query"
            className="search__input"
            placeholder="Enter topic"
            value={values.query || ''}
            onChange={onChange}
          />
          {errors.query && <p className="search__error">{errors.query}</p> }
          <input
            type="submit"
            value="Search"
            className="search__button"
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
