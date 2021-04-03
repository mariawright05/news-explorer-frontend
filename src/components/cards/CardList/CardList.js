import React from 'react';
import './CardList.css';
import Card from '../Card/Card';

const CardList = () => {
  return (
    <div className="cardList">
      <div className="cardList__section-wrapper">
        <h2 className="cardList__title">Search results</h2>
        <div className="cardList__card-wrapper">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default CardList;
