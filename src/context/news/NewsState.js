/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable quote-props */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable-next-line no-unused-expressions */

import React, { useEffect, useReducer } from 'react';
import NewsContext from './newsContext';
import NewsReducer from './newsReducer';
import {
  SEARCHED_NEWS,
  SET_LOADING,
  NOT_FOUND,
  SET_SAVED,
  SET_NOT_SAVED,
  SEARCH_ERROR,
  SET_QUERY,
  SAVED_CARDS,
} from '../types';
import { searchNews, updateSave, getSavedCards } from './NewsApi';

const NewsState = (props) => {
  const initialState = {
    cards: [],
    card: {},
    loading: false,
    visibleList: [],
    searchError: false,
    notFound: false,
    savedCards: [],
  };

  const [state, dispatch] = useReducer(NewsReducer, initialState);

  // Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  // Check to see if there are searched cards in localStorage
  const searchedNews = JSON.parse(localStorage.getItem('searchedNews'));

  useEffect(() => {
    if (searchedNews) {
      setLoading();
      dispatch({
        type: SEARCHED_NEWS,
        payload: searchedNews,
      });
    }
  }, []);

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
      .then((res) => {
        res.articles.length === 0
          && dispatch({ type: NOT_FOUND });
      })
      .catch((err) => dispatch({ type: SEARCH_ERROR, payload: err.toString() }));
  };

  // Updates saved card list
  const handleSavedCards = (token) => {
    getSavedCards(token)
      .then((res) => {
        dispatch({
          type: SAVED_CARDS,
          payload: res,
        });
      });
  };

  // Sets if isSaved is true or false and assigns keyword
  const handleUpdateSave = (card, token) => {
    card.isSaved
      ? dispatch({
        type: SET_NOT_SAVED,
        payload: card.url,
      })
      : dispatch({
        type: SET_SAVED,
        payload: card.url,
      });
    handleSavedCards(token);
    updateSave(card, token)
      .catch((err) => dispatch({ type: SEARCH_ERROR, payload: err.toString() }));
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
      card.cardButtonType = 'card__icon_trash';
    } else if (card.isSaved) {
      card.cardButtonType = 'card__icon_save_true';
    } else {
      card.cardButtonType = 'card__icon_save';
    }
  };

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
