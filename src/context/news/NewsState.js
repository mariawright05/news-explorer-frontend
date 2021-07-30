/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
import React, {
  useEffect,
  useContext,
  useReducer,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { slice, concat } from 'lodash';
import Card from '../../components/Card/Card';
import NewsContext from './newsContext';
import NewsReducer from './newsReducer';
import AuthContext from '../auth/authContext';
import {
  SEARCHED_NEWS,
  SET_LOADING,
  NOT_FOUND,
  SET_SAVED,
  SET_NOT_SAVED,
  SEARCH_ERROR,
  SET_QUERY,
  SAVED_CARDS,
  CLEAR_NEWS,
} from '../types';
import {
  searchNews,
  getSavedCards,
  updateSave,
} from './NewsApi';
import { ARRAY_LENGTH, LIMIT } from '../../utils/configData.json';

const NewsState = (props) => {
  const initialState = {
    cards: [],
    card: {},
    loading: false,
    visibleList: [],
    searchError: false,
    notFound: false,
    savedCards: [],
    query: '',
  };

  const [state, dispatch] = useReducer(NewsReducer, initialState);

  const authState = useContext(AuthContext);
  const { isAuth } = authState;

  // Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  // NEWS SEARCHING
  // Determines if there are any more cards to show up to ARRAY_LENGTH
  const [showMore, setShowMore] = useState(true);
  // Group of cards shown after each Show More button click
  const [list, setList] = useState([]);
  // Count of cards to show up to ARRAY_LENGTH
  const [index, setIndex] = useState(LIMIT);

  // Function to show initial cards, number determined by LIMIT
  const showVisibleList = () => {
    setList(state.visibleList);
  };

  // Load More button functionality
  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < (Math.min(ARRAY_LENGTH - 1, state.cards.length));
    const newList = concat(list, slice(state.cards, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  };

  // Resets initial cards with every search
  useEffect(() => {
    showVisibleList();
  }, [state.visibleList]);

  // Check on page load to see if cards have been set from localStorage
  useEffect(() => {
    if (state.cards.length !== 0) {
      loadMore();
    }
  }, []);

  const searchedList = (
    <>
      {state.cards.length !== 0 && <h2 className="cardList__title">Search results</h2>}
      <ul className="cardList__card-wrapper">
        {list.map((card) => {
          return <Card key={uuidv4()} card={card} />;
        })}
      </ul>
      {showMore && <button type="submit" className="cardList__button" onClick={loadMore}>Show more</button>}
    </>
  );

  // Fetch news from NewsAPI
  const handleSearchNews = async (searchTerm) => {
    setLoading();
    try {
      const res = await searchNews(searchTerm);
      state.cards = [];
      dispatch({
        type: SEARCHED_NEWS,
        payload: res.articles,
      });
      if (res.articles.length !== 0) {
        return searchedList;
      // eslint-disable-next-line no-else-return
      } else {
        dispatch({ type: NOT_FOUND });
        return [];
      }
    } catch (err) {
      dispatch({ type: SEARCH_ERROR, payload: err.toString() });
    }
  };

  // SAVED NEWS
  // Displays cards on the saved page
  const savedList = (
    <>
      <ul className="cardList__card-wrapper">
        {state.savedCards.map((card) => {
          return <Card key={uuidv4()} card={card} />;
        })}
      </ul>
    </>
  );

  // Updates saved card list
  const handleSavedCards = async (token) => {
    try {
      const res = await getSavedCards(token);
      dispatch({
        type: SAVED_CARDS,
        payload: res,
      });
      if (res.length !== 0) {
        return savedList;
      }
      return null;
    } catch (err) {
      dispatch({ type: SEARCH_ERROR, payload: err.toString() });
    }
  };

  // Set current query term to assign to keyword
  const setQuery = (query) => {
    dispatch({
      type: SET_QUERY,
      payload: query,
    });
  };

  // Sets if card has id (is saved) and assigns keyword
  const handleUpdateSave = async (card, token) => {
    const method = card._id ? 'DELETE' : 'POST';
    const id = card._id || '';
    const body = JSON.stringify({
      keyword: state.query || '',
      title: card.title,
      text: card.description,
      date: card.publishedAt,
      source: card.source.name,
      url: card.url,
      image: card.urlToImage,
    });
    try {
      const res = await updateSave(method, id, body, token);
      if (method === 'POST') {
        dispatch({
          type: SET_SAVED,
          payload: res,
        });
        localStorage.setItem('searchedNews', JSON.stringify(state.cards));
      } else {
        dispatch({
          type: SET_NOT_SAVED,
          payload: card.url,
        });
        localStorage.setItem('searchedNews', JSON.stringify(state.cards));
        handleSavedCards(token);
      }
    } catch (err) {
      dispatch({ type: SEARCH_ERROR, payload: err.toString() });
    }
  };

  // Check to see if there are searched cards and query in localStorage
  // and return if user is logged in
  const searchedNews = JSON.parse(localStorage.getItem('searchedNews'));
  const searchTerm = localStorage.getItem('searchTerm');

  useEffect(() => {
    if (searchedNews && isAuth) {
      setLoading();
      dispatch({
        type: SEARCHED_NEWS,
        payload: searchedNews,
      });
      setQuery(searchTerm);
    } else {
      dispatch({ type: CLEAR_NEWS });
    }
  }, [isAuth]);

  useEffect(() => {
    return () => {
      console.log('cleaned up');
    };
  }, []);

  return (
    <NewsContext.Provider
      value={{
        cards: state.cards,
        loading: state.loading,
        visibleList: state.visibleList,
        searchError: state.searchError,
        notFound: state.notFound,
        keyword: state.keyword,
        savedCards: state.savedCards,
        query: state.query,
        searchedList,
        savedList,
        setLoading,
        handleUpdateSave,
        handleSearchNews,
        setQuery,
        handleSavedCards,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
