/* eslint-disable no-unused-expressions */
/* eslint-disable quote-props */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable-next-line no-unused-expressions */

import React, { useReducer } from 'react';
// import axios from 'axios';
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
import { SEARCH_URL, API_KEY } from '../../utils/configData.json';

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

  // Adds news results to card list
  const setSearchedNews = (res) => {
    state.cards = [];
    dispatch({
      type: SEARCHED_NEWS,
      payload: res.articles,
    });
  };

  // Assigns searchError to true if server error
  const setSearchError = () => {
    dispatch({ type: SEARCH_ERROR });
  };

  // Assigns notFound to true if no news found
  const setNotFound = () => {
    dispatch({ type: NOT_FOUND });
  };

  // Fetch news from NewsAPI
  const searchNews = (searchTerm) => {
    setLoading();
    const today = new Date();
    const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    // Formats date for API request parameter requirements
    const ISOToday = today.toISOString();
    const ISOLastWeek = lastWeek.toISOString();

    fetch(`${SEARCH_URL}?q=${searchTerm}&apiKey=${API_KEY}&from=${ISOLastWeek}&to=${ISOToday}&pageSize=${100}&sortBy=publishedAt&language=en`)
      .then((res) => { return res.json(); })
      .then((res) => {
        res.status === 'ok' && setSearchedNews(res);
        return res;
      })
      .then((res) => { res.articles.length === 0 && setNotFound(); })
      .catch(() => { setSearchError(); });
  };

  // Updates saved card list
  const setSavedCards = () => {
    dispatch({
      type: SAVED_CARDS,
    });
  };

  // Sets if isSaved is true or false and assigns keyword
  const setIsSaved = (card) => {
    card.isSaved
      ? dispatch({
        type: SET_NOT_SAVED,
        payload: card.url,
      })
      : dispatch({
        type: SET_SAVED,
        payload: card.url,
      });
    setSavedCards();
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
        setIsSaved,
        searchNews,
        setCardButtonType,
        setQuery,
        setSavedCards,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
