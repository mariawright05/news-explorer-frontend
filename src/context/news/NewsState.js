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
      url: 'https://www.treehugger.com/special-sit-spot-nature-5085811',
      image: 'https://www.treehugger.com/thmb/X8foR4t6_Z2dv_1LR6jGGEnC91Q=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sittingonatreestump-ac694d0a1e6146d89f913cc631dfa04c.jpg',
      pubDate: 'November, 4 2020',
      title: 'Everyone Needs a Special \'Sit Spot\' in Nature',
      description: 'Ever since I read Richard Louv\'s influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me.This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...',
      source: 'treehugger',
      keyword: 'Nature',
      isSaved: false,
    },
    {
      id: 2,
      url: 'https://www.nationalgeographic.com/travel/article/partner-content-nature-makes-you-better#:~:text=We%20all%20know%20how%20good,relax%20and%20think%20more%20clearly.',
      image: 'https://i.natgeofe.com/n/4c6ad20b-a935-4c4f-bab6-40b815f0371a/image-5.jpg?w=2880&h=1920',
      pubDate: 'February 19, 2019',
      title: 'Nature makes you better',
      description: 'We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.',
      source: 'national geographic',
      keyword: 'Nature',
      isSaved: false,
    },
    {
      id: 3,
      url: 'https://www.nationalgeographic.com/travel/article/sightseer-american-tourists-in-national-parks',
      image: 'https://images.unsplash.com/photo-1554592977-9fcccf7b4e25?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      pubDate: 'October 19, 2020',
      title: 'Nostalgic Photos of Tourists in U.S. National Parks',
      description: 'Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...',
      source: 'national geographic',
      keyword: 'Yellowstone',
      isSaved: false,
    },
    {
      id: 4,
      url: 'https://www.nationalparkstraveler.org/2020/10/grand-teton-renews-historic-crest-trail#:~:text=%E2%80%9CThe%20linking%20together%20of%20the,visit%20that%20most%20fascinating%20region%E2%80%A6',
      image: 'https://www.nationalparkstraveler.org/sites/default/files/styles/panopoly_image_original/public/media/grte-teton_crest_trailnps_960.jpeg?itok=lLhXZJV9',
      pubDate: 'November, 4 2020',
      title: 'Grand Teton Renews Historic Crest Trail',
      description: '“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...',
      source: 'National parks traveler',
      keyword: 'Parks',
      isSaved: false,
    },
    {
      id: 5,
      url: 'https://www.treehugger.com/polaris-north-star-facts-how-big-far-4859425#:~:text=Polaris%20has%20an%20older%20friend.&text=According%20to%20the%20new%20study,a%20new%20lease%20on%20life.',
      image: 'https://www.treehugger.com/thmb/29MSwyudwok2_gh6AZDAwWH17CE=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2020__03__polaris-north-star-facts-b2a823cf25a44ef89260cd09f5c5c845.jpg',
      pubDate: 'March 16, 2020',
      title: 'Scientists Don\'t Know Why Polaris Is So Weird',
      description: 'Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them.',
      source: 'treehugger',
      keyword: 'Photography',
      isSaved: false,
    },
  ];

  const initialState = {
    cards: [],
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
    setTimeout(() => {
      const res = tempCards;
      dispatch({
        type: SEARCH_NEWS,
        payload: res,
      });
    }, 2000);
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
