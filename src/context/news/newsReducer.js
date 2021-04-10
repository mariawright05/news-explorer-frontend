import {
  SEARCH_NEWS,
  SET_LOADING,
  SET_SAVED,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_NEWS:
      return {
        ...state,
        cards: action.payload,
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
    default:
      return state;
  }
};
