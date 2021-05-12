import React from 'react';
import './NothingFound.css';

const NothingFound = () => {
  return (
    <div className="nothingFound">
      <i className="nothingFound__circle" />
      <p className="nothingFound__title">Nothing found</p>
      <p className="nothingFound__text">Sorry, but nothing matched your search terms.</p>
    </div>
  );
};

export default NothingFound;
