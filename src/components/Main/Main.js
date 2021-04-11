import React from 'react';
import './Main.css';
import Search from '../Search/Search';
import CardList from '../CardList/CardList';
import Author from '../Author/Author';
import PageContext from '../../context/page/PageContext';

const Main = (props) => {
  const { isAuth } = props;

  return (
    <>
      <PageContext.Provider value="home">
        <Search isAuth={isAuth} />
        <CardList isAuth={isAuth} />
        <Author />
      </PageContext.Provider>
    </>
  );
};

export default Main;
