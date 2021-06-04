import React, { useContext } from 'react';
import './CardList.css';
import Preloader from '../Preloader/Preloader';
import NothingFound from '../NothingFound/NothingFound';
import NewsContext from '../../context/news/newsContext';
import PageContext from '../../context/page/PageContext';

const CardList = () => {
  const newsContext = useContext(NewsContext);
  const page = useContext(PageContext);

  const {
    loading,
    cards,
    searchError,
    notFound,
    // handleSavedCards,
    searchedList,
    savedList,
    savedCards,
  } = newsContext;

  // const token = localStorage.getItem('jwt');
  // useEffect(() => {
  //   if (token) {
  //     handleSavedCards(token);
  //   }
  // }, []);

  // Preloader || Not Found || Search Error block
  if (loading) {
    return <Preloader />;
  }

  if (notFound || searchError) {
    return <NothingFound />;
  }

  return (
    <div className={(cards.length !== 0 && page === 'home') || (savedCards.length !== 0 && page === 'saved-news') ? 'cardList' : 'cardList_hidden'}>
      <div className="cardList__section-wrapper">
        {page === 'home' ? searchedList : savedList}
      </div>
    </div>
  );
};

export default CardList;
