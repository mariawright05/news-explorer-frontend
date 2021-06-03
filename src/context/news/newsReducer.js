/* eslint-disable no-param-reassign */
import { slice } from 'lodash';
import {
  SEARCHED_NEWS,
  SET_LOADING,
  SET_SAVED,
  SET_NOT_SAVED,
  SEARCH_ERROR,
  NOT_FOUND,
  SET_QUERY,
  SAVED_CARDS,
  CLEAR_NEWS,
} from '../types';
import { LIMIT } from '../../utils/configData.json';

export default (state, action) => {
  switch (action.type) {
    case SEARCHED_NEWS:
      localStorage.setItem('searchedNews', JSON.stringify(action.payload));
      return {
        ...state,
        cards: action.payload,
        // Initial number of cards in list to show
        visibleList: slice(action.payload, 0, LIMIT),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
        searchError: false,
        notFound: false,
      };
    case SEARCH_ERROR:
      return {
        ...state,
        searchError: true,
      };
    case NOT_FOUND:
      return {
        ...state,
        notFound: true,
      };
    case SET_SAVED:
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.url === action.payload) {
            card.isSaved = true;
            card.keyword = state.query.charAt(0).toUpperCase() + state.query.slice(1);
          }
          return card;
        }),
      };
    case SET_NOT_SAVED:
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.url === action.payload) {
            card.isSaved = false;
          }
          return card;
        }),
      };
    case SET_QUERY:
      localStorage.setItem('searchTerm', action.payload);
      return {
        ...state,
        query: action.payload,
      };
    case SAVED_CARDS:
      return {
        ...state,
        savedCards: action.payload,
      };
    case CLEAR_NEWS:
      return {
        ...state,
        cards: [],
        query: null,
      };
    default:
      return state;
  }
};
