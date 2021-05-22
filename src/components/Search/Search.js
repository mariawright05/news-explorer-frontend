import React, { useState, useContext } from 'react';
import Header from '../Header/Header';
import NewsContext from '../../context/news/newsContext';
import './Search.css';

const Search = () => {
  const newsContext = useContext(NewsContext);
  const { searchNews } = newsContext;

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('#1 calling searchNews function with text: ', text);
    searchNews(text);
    setText('');
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="search">
      <Header />
      <div className="search__container">
        <h2 className="search__title">What&apos;s going on in the world?</h2>
        <p className="search__subtitle">Find the latest news on any topic and save them in your personal account.</p>
        <form className="search__input-wrapper" onSubmit={onSubmit}>
          <input
            type="text"
            name="text"
            className="search__input"
            placeholder="Enter topic"
            value={text}
            onChange={onChange}
            required
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
