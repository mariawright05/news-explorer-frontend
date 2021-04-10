import React, { useReducer } from 'react';
import NewsContext from './newsContext';
import NewsReducer from './newsReducer';
import {
  SEARCH_NEWS,
  SET_LOADING,
  SET_SAVED,
} from '../types';

const NewsState = (props) => {
  const tempCards = [
    {
      id: 1,
      url: 'https://practicum.yandex.com/',
      image: '../../images/image_06.png',
      pubDate: 'November, 4 2020',
      title: 'Everyone Needs a Special \'Sit Spot\' in Nature',
      description: 'Ever since I read Richard Louv\'s influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me.This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...',
      source: 'treehugger',
      keyword: 'Nature',
      isSaved: false,
    },
    {
      id: 2,
      url: 'https://practicum.yandex.com/',
      image: '../../images/image_01.png',
      pubDate: 'February 19, 2019',
      title: 'Nature makes you better',
      description: 'We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.',
      source: 'national geographic',
      keyword: 'Nature',
      isSaved: false,
    },
    {
      id: 3,
      url: 'https://practicum.yandex.com/',
      image: '../../images/image_05.png',
      pubDate: 'October 19, 2020',
      title: 'Nostalgic Photos of Tourists in U.S. National Parks',
      description: 'Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...',
      source: 'national geographic',
      keyword: 'Yellowstone',
      isSaved: false,
    },
    {
      id: 4,
      url: 'https://practicum.yandex.com/',
      image: '../../images/image_02.png',
      pubDate: 'November, 4 2020',
      title: 'Grand Teton Renews Historic Crest Trail',
      description: '“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...',
      source: 'National parks traveler',
      keyword: 'Parks',
      isSaved: false,
    },
    {
      id: 5,
      url: 'https://practicum.yandex.com/',
      image: '../../images/image_04.png',
      pubDate: 'March 16, 2020',
      title: 'Scientists Don\'t Know Why Polaris Is So Weird ',
      description: 'Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them.',
      source: 'treehugger',
      keyword: 'Photography',
      isSaved: false,
    },
  ];

  const initialState = {
    cards: tempCards,
    card: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(NewsReducer, initialState);

  // Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  // Set isSaved
  const setIsSaved = () => {
    dispatch({ type: SET_SAVED });
  };

  // Search News
  const searchNews = () => {
    setLoading();

    // will retrieve news cards from api
    const res = tempCards;

    dispatch({
      type: SEARCH_NEWS,
      payload: res.data.items,
    });
  };

  return (
    <NewsContext.Provider
      value={{
        cards: state.cards,
        loading: state.loading,
        setLoading,
        setIsSaved,
        searchNews,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
