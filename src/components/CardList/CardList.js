/* eslint-disable no-unused-vars */
// /* eslint-disable consistent-return */
import React, { useContext, useState, useEffect } from 'react';
import { slice, concat } from 'lodash';
import './CardList.css';
import { v4 as uuidv4 } from 'uuid';
import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader';
import NothingFound from '../NothingFound/NothingFound';
import NewsContext from '../../context/news/newsContext';
import PageContext from '../../context/page/PageContext';
import AuthContext from '../../context/auth/authContext';
import { ARRAY_LENGTH, LIMIT } from '../../utils/configData.json';

const CardList = () => {
  const newsContext = useContext(NewsContext);
  const page = useContext(PageContext);
  const authContext = useContext(AuthContext);

  const {
    loading,
    cards,
    // visibleList,
    searchError,
    notFound,
    // savedCards,
    handleSavedCards,
    searchedList,
    savedList,
  } = newsContext;

  const { token } = authContext;

  // // Determines if there are any more cards to show up to ARRAY_LENGTH
  // const [showMore, setShowMore] = useState(true);
  // // Group of cards shown after each Show More button click
  // const [list, setList] = useState([]);
  // // Count of cards to show up to ARRAY_LENGTH
  // const [index, setIndex] = useState(LIMIT);

  // // Function to show initial cards, number determined by LIMIT
  // const showVisibleList = () => {
  //   setList(visibleList);
  // };

  // const token = localStorage.getItem('jwt');
  // useEffect(() => {
  //   if (token) {
  //     handleSavedCards(token);
  //   }
  // }, []);

  // // Resets initial cards with every search
  // useEffect(() => {
  //   showVisibleList();
  // }, [visibleList]);

  // // Load More button functionality
  // const loadMore = () => {
  //   const newIndex = index + LIMIT;
  //   const newShowMore = newIndex < (Math.min(ARRAY_LENGTH - 1, cards.length));
  //   const newList = concat(list, slice(cards, index, newIndex));
  //   setIndex(newIndex);
  //   setList(newList);
  //   setShowMore(newShowMore);
  // };

  // // Check on page load to see if cards have been set from localStorage
  // useEffect(() => {
  //   if (cards.length !== 0) {
  //     loadMore();
  //   }
  // }, []);

  // Preloader || Not Found || Search Error block
  if (loading) {
    return <Preloader />;
  }

  if (notFound || searchError) {
    return <NothingFound />;
  }

  // // Displays cards on the home page
  // const searchedList = (
  //   <>
  //     {cards.length !== 0 && <h2 className="cardList__title">Search results</h2>}
  //     <ul className="cardList__card-wrapper">
  //       {list.map((card) => {
  //         return <Card key={uuidv4()} card={card} />;
  //       })}
  //     </ul>
  //     {showMore
  //      && <button type="submit"
  //      className = "cardList__button"
  //      onClick = { loadMore } > Show more</button >}
  //   </>
  // );

  // // Displays cards on the saved page
  // const savedList = (
  //   <>
  //     <ul className="cardList__card-wrapper">
  //       {savedCards.map((card) => {
  //         return <Card key={uuidv4()} card={card} />;
  //       })}
  //     </ul>
  //   </>
  // );

  return (
    <div className={cards.length === 0 ? 'cardList_hidden' : 'cardList'}>
      <div className="cardList__section-wrapper">
        {page === 'home' ? searchedList : savedList}
      </div>
    </div>
  );
};

export default CardList;
