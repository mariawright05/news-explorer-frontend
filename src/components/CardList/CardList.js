import React from 'react';
import './CardList.css';
import Card from '../Card/Card';

const CardList = (props) => {
  const { isAlt } = props;

  return (
    <div className="cardList">
      <div className="cardList__section-wrapper">
        {
          !isAlt
          && <h2 className="cardList__title">Search results</h2>
        }
        <ul className="cardList__card-wrapper">
          <Card />
          <Card />
          <Card />
        </ul>
        {
          !isAlt
          && <input type="submit" value="Show more" className="cardList__button" />
        }
      </div>
    </div>
  );
};

export default CardList;
