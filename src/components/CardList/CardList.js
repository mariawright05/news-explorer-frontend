import React, { useContext, useState, useEffect } from 'react';
import { slice, concat } from 'lodash';
import './CardList.css';
import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader';
import NewsContext from '../../context/news/newsContext';
import PageContext from '../../context/page/PageContext';
import { ARRAY_LENGTH, LIMIT } from '../../utils/configData.json';

const CardList = () => {
  const newsContext = useContext(NewsContext);
  const page = useContext(PageContext);

  const {
    loading,
    cards,
    visibleList,
  } = newsContext;

  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState([]);
  const [index, setIndex] = useState(LIMIT);

  const showInitialList = () => {
    setList(visibleList);
  };

  useEffect(() => {
    showInitialList();
  }, [visibleList]);

  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < (ARRAY_LENGTH - 1);
    const newList = concat(list, slice(cards, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  };

  const savedCards = cards.filter((e) => { return e.isSaved === true; });

  if (loading) {
    return <Preloader />;
  }

  const searchedList = (
    <>
      {cards.length !== 0 && <h2 className="cardList__title">Search results</h2>}
      <ul className="cardList__card-wrapper">
        {list.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </ul>
      {showMore && <button type="submit" className="cardList__button" onClick={loadMore}>Show more</button>}
    </>
  );

  const savedList = (
    <>
      <ul className="cardList__card-wrapper">
        {savedCards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </ul>
    </>
  );

  return (
    <div className={cards.length === 0 ? 'cardList_hidden' : 'cardList'}>
      <div className="cardList__section-wrapper">
        {page === 'home' ? searchedList : savedList}
      </div>
    </div>
  );
};

export default CardList;
