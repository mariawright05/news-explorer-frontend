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
} from '../types';
import { LIMIT } from '../../utils/configData.json';

export default (state, action) => {
  switch (action.type) {
    case SEARCHED_NEWS:
      return {
        ...state,
        cards: action.payload,
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
            card.keyword = state.query;
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
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};
