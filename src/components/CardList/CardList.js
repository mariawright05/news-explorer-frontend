import React, { useContext } from 'react';
import './CardList.css';
import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader';
import NewsContext from '../../context/news/newsContext';

const CardList = (props) => {
  const newsContext = useContext(NewsContext);

  const { loading, cards } = newsContext;

  console.log(cards);
  console.log('loading: ', loading);

  if (loading) {
    return <Preloader />;
  }
  if (!cards) {
    return (
      <p>Nothing found</p>
    );
  }
  return (
    <div className="cardList">
      <div className="cardList__section-wrapper">
        {
          !props.isAlt
          && <h2 className="cardList__title">Search results</h2>
        }
        <ul className="cardList__card-wrapper">
          {cards.map((card) => {
            return <Card key={card.id} card={card} />;
          })}
        </ul>
        {
          !props.isAlt
          && <input type="submit" value="Show more" className="cardList__button" />
        }
      </div>
    </div>
  );
};

export default CardList;
