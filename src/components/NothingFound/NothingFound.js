import React, { useContext } from 'react';
import NewsContext from '../../context/news/newsContext';
import './NothingFound.css';

const NothingFound = () => {
  const newsContext = useContext(NewsContext);
  const {
    searchError,
  } = newsContext;
  return (
    <section className="nothingFound">
      <i className="nothingFound__circle" />
      <p className="nothingFound__title">{searchError ? 'Server Error' : 'Nothing found'}</p>
      <p className="nothingFound__text">
        {searchError
          ? 'Sorry, something went wrong during the request.'
          : 'Sorry, but nothing matched your search terms.'}
      </p>
    </section>
  );
};

export default NothingFound;
