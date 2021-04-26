import React from 'react';
import './Main.css';
import Search from '../Search/Search';
import CardList from '../CardList/CardList';
import Author from '../Author/Author';
import PageContext from '../../context/page/PageContext';

const Main = () => {
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
