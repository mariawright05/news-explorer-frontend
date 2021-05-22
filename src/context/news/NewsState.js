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
  DELETE_CARD,
  SET_SAVED,
  SET_NOT_SAVED,
  SEARCH_ERROR,
} from '../types';
import { SEARCH_URL, API_KEY } from '../../utils/configData.json';
// import NothingFound from '../../components/NothingFound/NothingFound';

const NewsState = (props) => {
  const initialState = {
    cards: [],
    card: {},
    loading: false,
    visibleList: [],
    searchError: false,
  };

  const [state, dispatch] = useReducer(NewsReducer, initialState);

  // Set Loading
  const setLoading = () => {
    console.log('#2 setLoading called');
    dispatch({ type: SET_LOADING });
  };

  const setSearchError = () => {
    console.log('about to dispatch to search_error');
    dispatch({ type: SEARCH_ERROR });
  };

  // Search News
  const searchNews = (searchTerm) => {
    setLoading();
    fetch(`${SEARCH_URL}?q=${searchTerm}&apiKey=${API_KEY}`)
      .then((res) => { return res.json(); })
      .then((res) => {
        console.log('#4 fetched, now checking if res is ok. res.status = ', res.status);
        if (res.status === 'ok') {
          console.log('#5 res status was ok, and about to dispatch to searched_news');
          dispatch({
            type: SEARCHED_NEWS,
            payload: res.articles,
          });
        }
      })
      // .then((cards) => {
      //   console.log(cards.length);
      //   if (cards.length === 0) {
      //     console.log('no cards were found');
      //       <NothingFound />;
      //   }
      // })
      .catch(() => {
        console.log('In catch statement');
        setSearchError();
      });
  };

  // Set isSaved
  const setIsSaved = (card) => {
    // eslint-disable-next-line no-unused-expressions
    card.isSaved
      ? dispatch({
        type: SET_NOT_SAVED,
        payload: card.id,
      })
      : dispatch({
        type: SET_SAVED,
        payload: card.id,
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
      payload: card,
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
