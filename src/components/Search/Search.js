import React, { useState, useContext } from 'react';
import Header from '../Header/Header';
import NewsContext from '../../context/news/newsContext';
import './Search.css';

const Search = (props) => {
  const newsContext = useContext(NewsContext);

  const [text, setText] = useState('');

  const { isAlt, isAuth } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    newsContext.searchNews(text);
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="search">
      <Header isAlt={isAlt} isAuth={isAuth} />
      <div className="search__container">
        <h2 className="search__title">What&apos;s going on in the world?</h2>
        <p className="search__subtitle">Find the latest news on any topic and save them in your personal account.</p>
        <form className="search__input-wrapper" onSubmit={onSubmit}>
          <input
            type="text"
            name="news"
            className="search__input"
            placeholder="Enter topic"
            value={text}
            onChange={onChange}
          />
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
