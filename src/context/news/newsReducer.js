import { slice } from 'lodash';
import {
  SEARCH_NEWS,
  SET_LOADING,
  SET_SAVED,
} from '../types';
import { LIMIT } from '../../utils/configData.json';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_NEWS:
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
      };
    case SET_SAVED:
      return {
        ...state,
        isSaved: !state.isSaved,
      };
    // case SET_LIST:
    //   return {
    //     ...state,
    //     list: action.payload,
    //   };
    default:
      return state;
  }
};
