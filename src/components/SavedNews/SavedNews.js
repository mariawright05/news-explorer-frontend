import React, { useEffect, useContext } from 'react';
import './SavedNews.css';
import Header from '../Header/Header';
import CardList from '../CardList/CardList';
import UserInfo from '../UserInfo/UserInfo';
import PageContext from '../../context/page/PageContext';
import NewsContext from '../../context/news/newsContext';

const SavedNews = () => {
  const newsContext = useContext(NewsContext);
  const { handleSavedCards } = newsContext;

  const token = localStorage.getItem('jwt');
  useEffect(() => {
    if (token) {
      handleSavedCards(token);
    }
  }, []);

  return (
    <>
      <PageContext.Provider value="saved-news">
        <Header />
        <UserInfo />
        <CardList />
      </PageContext.Provider>
    </>
  );
};

export default SavedNews;
