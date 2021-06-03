/* eslint-disable arrow-body-style */
// /* eslint-disable no-unused-expressions */

import React, {
  useEffect,
  useContext,
  useReducer,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { slice, concat } from 'lodash';
import Card from '../../components/Card/Card';
import NewsContext from './newsContext';
import NewsReducer from './newsReducer';
import AuthContext from '../auth/authContext';
import {
  SEARCHED_NEWS,
  SET_LOADING,
  NOT_FOUND,
  SET_SAVED,
  SET_NOT_SAVED,
  SEARCH_ERROR,
  SET_QUERY,
  SAVED_CARDS,
  CLEAR_NEWS,
} from '../types';
import { searchNews, updateSave, getSavedCards } from './NewsApi';
import { ARRAY_LENGTH, LIMIT } from '../../utils/configData.json';

const NewsState = (props) => {
  const initialState = {
    cards: [],
    card: {},
    loading: false,
    visibleList: [],
    searchError: false,
    notFound: false,
    savedCards: [],
    query: null,
  };

  const [state, dispatch] = useReducer(NewsReducer, initialState);

  const authState = useContext(AuthContext);
  const { isAuth } = authState;

  // Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  // Determines if there are any more cards to show up to ARRAY_LENGTH
  const [showMore, setShowMore] = useState(true);
  // Group of cards shown after each Show More button click
  const [list, setList] = useState([]);
  // Count of cards to show up to ARRAY_LENGTH
  const [index, setIndex] = useState(LIMIT);

  // Function to show initial cards, number determined by LIMIT
  const showVisibleList = () => {
    setList(state.visibleList);
  };

  // Load More button functionality
  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < (Math.min(ARRAY_LENGTH - 1, state.cards.length));
    const newList = concat(list, slice(state.cards, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  };

  // Resets initial cards with every search
  useEffect(() => {
    showVisibleList();
  }, [state.visibleList]);

  // Check on page load to see if cards have been set from localStorage
  useEffect(() => {
    if (state.cards.length !== 0) {
      loadMore();
    }
  }, []);

  const searchedList = (
    <>
      {state.cards.length !== 0 && <h2 className="cardList__title">Search results</h2>}
      <ul className="cardList__card-wrapper">
        {list.map((card) => {
          return <Card key={uuidv4()} card={card} />;
        })}
      </ul>
      {showMore && <button type="submit" className="cardList__button" onClick={loadMore}>Show more</button>}
    </>
  );

  // Fetch news from NewsAPI
  const handleSearchNews = (searchTerm) => {
    setLoading();
    searchNews(searchTerm)
      .then((res) => {
        state.cards = [];
        dispatch({
          type: SEARCHED_NEWS,
          payload: res.articles,
        });
        return res;
      })
      // eslint-disable-next-line consistent-return
      .then((res) => {
        if (res.articles.length !== 0) {
          return searchedList;
        }
        if (res.articles.length === 0) {
          dispatch({ type: NOT_FOUND });
        }
      })
      .catch((err) => dispatch({ type: SEARCH_ERROR, payload: err.toString() }));
  };

  // Displays cards on the saved page
  const savedList = (savedCards) => {
    return (
      <>
        <ul className="cardList__card-wrapper">
          {savedCards.map((card) => {
            return <Card key={uuidv4()} card={card} />;
          })}
        </ul>
      </>
    );
  };

  // Updates saved card list
  const handleSavedCards = (token) => {
    getSavedCards(token)
      .then((res) => {
        dispatch({
          type: SAVED_CARDS,
          payload: res,
        });
        savedList(res);
      })
      .catch((err) => dispatch({ type: SEARCH_ERROR, payload: err.toString() }));
  };

  // Sets if isSaved is true or false and assigns keyword
  const handleUpdateSave = (card, token) => {
    // card.isSaved
    // ? dispatch({
    //   type: SET_NOT_SAVED,
    //   payload: card.url,
    // })
    // : dispatch({
    //   type: SET_SAVED,
    //   payload: card.url,
    // });
    if (card.isSaved) {
      dispatch({
        type: SET_NOT_SAVED,
        payload: card.url,
      });
    } else {
      dispatch({
        type: SET_SAVED,
        payload: card.url,
      });
    }
    updateSave(card, token)
      .catch((err) => dispatch({ type: SEARCH_ERROR, payload: err.toString() }));
    handleSavedCards(token);
  };

  // Set current query term
  const setQuery = (query) => {
    dispatch({
      type: SET_QUERY,
      payload: query,
    });
  };

  // Set card button type depending on card state or page
  const setCardButtonType = (card, page) => {
    if (page === 'saved-news') {
      state.card.cardButtonType = 'card__icon_trash';
    } else if (card.isSaved) {
      state.card.cardButtonType = 'card__icon_save_true';
    } else {
      state.card.cardButtonType = 'card__icon_save';
    }
  };

  // Check to see if there are searched cards and query in localStorage
  const searchedNews = JSON.parse(localStorage.getItem('searchedNews'));
  const searchTerm = localStorage.getItem('searchTerm');

  useEffect(() => {
    if (searchedNews) {
      setLoading();
      dispatch({
        type: SEARCHED_NEWS,
        payload: searchedNews,
      });
      setQuery(searchTerm);
    } else {
      dispatch({ type: CLEAR_NEWS });
    }
  }, [isAuth]);

  return (
    <NewsContext.Provider
      value={{
        cards: state.cards,
        loading: state.loading,
        visibleList: state.visibleList,
        isSaved: state.isSaved,
        searchError: state.searchError,
        notFound: state.notFound,
        keyword: state.keyword,
        savedCards: state.savedCards,
        query: state.query,
        searchedList,
        savedList,
        setLoading,
        handleUpdateSave,
        handleSearchNews,
        setCardButtonType,
        setQuery,
        handleSavedCards,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
