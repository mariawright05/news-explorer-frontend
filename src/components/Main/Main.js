import React, { useContext, useEffect } from 'react';
import './Main.css';
import Search from '../Search/Search';
import CardList from '../CardList/CardList';
import Author from '../Author/Author';
import PageContext from '../../context/page/PageContext';
import AuthContext from '../../context/auth/authContext';

const Main = () => {
  const authContext = useContext(AuthContext);
  const { handleLoadUser } = authContext;

  const jwt = localStorage.getItem('jwt');
  useEffect(() => {
    if (jwt) {
      handleLoadUser();
    }
  }, []);

  return (
    <>
      <PageContext.Provider value="home">
        <Search />
        <CardList />
        <Author />
      </PageContext.Provider>
    </>
  );
};

export default Main;
