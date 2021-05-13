import React from 'react';
import './SavedNews.css';
import Header from '../Header/Header';
import CardList from '../CardList/CardList';
import UserInfo from '../UserInfo/UserInfo';
import PageContext from '../../context/page/PageContext';

const SavedNews = () => {
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
