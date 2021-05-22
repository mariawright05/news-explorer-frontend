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
  DELETE_CARD,
  SET_SAVED,
  SET_NOT_SAVED,
  SEARCH_ERROR,
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
    fetch(`${SEARCH_URL}?q=${searchTerm}&apiKey=${API_KEY}`)
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

  // Delete Card
  const deleteCard = (card) => {
    dispatch({
      type: DELETE_CARD,
      payload: card.url,
    });
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
        setLoading,
        setIsSaved,
        searchNews,
        deleteCard,
        setCardButtonType,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
