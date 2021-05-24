/* eslint-disable no-unused-expressions */
/* eslint-disable quote-props */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
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
  };

  const [state, dispatch] = useReducer(NewsReducer, initialState);

  // Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const setSearchedNews = (res) => {
    state.cards = [];
    console.log(state.cards.length);
    dispatch({
      type: SEARCHED_NEWS,
      payload: res.articles,
    });
  };

  const setSearchError = () => {
    dispatch({ type: SEARCH_ERROR });
  };

  const setNotFound = () => {
    dispatch({ type: NOT_FOUND });
  };

  // Search News
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

  // Set isSaved
  const setIsSaved = (card) => {
    // eslint-disable-next-line no-unused-expressions
    card.isSaved
      ? dispatch({
        type: SET_NOT_SAVED,
        payload: card.url,
      })
      : dispatch({
        type: SET_SAVED,
        payload: card.url,
      });
  };

  // Set current query term
  const setQuery = (query) => {
    dispatch({
      type: SET_QUERY,
      payload: query,
    });
  };

  // Set card button type
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
        setLoading,
        setIsSaved,
        searchNews,
        setCardButtonType,
        setQuery,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
