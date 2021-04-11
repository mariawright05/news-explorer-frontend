import React from 'react';
import './SavedNews.css';
import Header from '../Header/Header';
import CardList from '../CardList/CardList';
import UserInfo from '../UserInfo/UserInfo';
import PageContext from '../../context/page/PageContext';

const SavedNews = (props) => {
  const { isAuth } = props;

  return (
    <>
      <PageContext.Provider value="saved-news">
        <Header isAuth={isAuth} />
        <UserInfo />
        <CardList />
      </PageContext.Provider>
    </>
  );
};

export default SavedNews;
