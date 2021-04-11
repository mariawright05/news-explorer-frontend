import React, { useContext } from 'react';
import './CardList.css';
import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader';
import NewsContext from '../../context/news/newsContext';

const CardList = ({ isAlt }) => {
  const newsContext = useContext(NewsContext);

  const { loading, cards } = newsContext;

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className={cards.length === 0 ? 'cardList_hidden' : 'cardList'}>
      <div className="cardList__section-wrapper">
        {
          (!isAlt && cards.length !== 0)
          && <h2 className="cardList__title">Search results</h2>
        }
        <ul className="cardList__card-wrapper">
          {cards.map((card) => {
            return <Card key={card.id} card={card} />;
          })}
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
