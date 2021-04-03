import React from 'react';
import './Main.css';
import Search from '../../cards/Search/Search';
import Preloader from '../../pageLayout/Preloader/Preloader';
import CardList from '../../cards/CardList/CardList';
import Author from '../../pageLayout/Author/Author';

const Main = () => {
  return (
    <div>
      <Search />
      <Preloader />
      <CardList />
      <Author />
    </div>
  );
};

export default Main;
