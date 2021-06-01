import React, { useEffect, useContext } from 'react';
import './SavedNews.css';
import Header from '../Header/Header';
import CardList from '../CardList/CardList';
import UserInfo from '../UserInfo/UserInfo';
import PageContext from '../../context/page/PageContext';
import AuthContext from '../../context/auth/authContext';

const SavedNews = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuth, handleLoadUser } = authContext;
  useEffect(() => {
    handleLoadUser();
    if (!isAuth) {
      props.history.push('/');
    }
  }, [isAuth]);

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
