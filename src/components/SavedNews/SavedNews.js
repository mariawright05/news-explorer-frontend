import React from 'react';
import './SavedNews.css';
import Header from '../Header/Header';
import CardList from '../CardList/CardList';
import UserInfo from '../UserInfo/UserInfo';

const SavedNews = (props) => {
  const { isAuth } = props;
  const isAlt = true;

  return (
    <div>
      <Header isAlt={isAlt} isAuth={isAuth} />
      <UserInfo />
      <CardList isAlt={isAlt} />
    </div>
  );
};

export default SavedNews;
