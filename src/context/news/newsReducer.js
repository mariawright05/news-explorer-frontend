/* eslint-disable no-param-reassign */
import { slice } from 'lodash';
import {
  DELETE_CARD,
  SEARCHED_NEWS,
  SET_LOADING,
  SET_SAVED,
  SET_NOT_SAVED,
  SEARCH_ERROR,
} from '../types';
import { LIMIT } from '../../utils/configData.json';

export default (state, action) => {
  switch (action.type) {
    case SEARCHED_NEWS:
      console.log('#6 inside searched_news reducer, action.payload.length = ', action.payload.length);
      return {
        ...state,
        cards: action.payload,
        visibleList: slice(action.payload, 0, LIMIT),
        loading: false,
      };
    case SET_LOADING:
      console.log('#3 inside set_loading reducer and loading will be true');
      return {
        ...state,
        loading: true,
      };
    case SEARCH_ERROR:
      console.log('inside search_error reducer and searchError will be true');
      return {
        ...state,
        searchError: true,
      };
    case SET_SAVED:
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id === action.payload) {
            card.isSaved = true;
          }
          return card;
        }),
      };
    case SET_NOT_SAVED:
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id === action.payload) {
            card.isSaved = false;
          }
          return card;
        }),
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter(
          (card) => {
            return card.id !== action.payload;
          },
        ),
      };
    default:
      return state;
  }
};
