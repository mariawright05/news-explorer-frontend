import React from 'react';
import './Main.css';
import Search from '../Search/Search';
import CardList from '../CardList/CardList';
import Author from '../Author/Author';

const Main = (props) => {
  const { isAlt, isAuth } = props;

  return (
    <div>
      <Search isAlt={isAlt} isAuth={isAuth} />
      <CardList isAlt={isAlt} isAuth={isAuth} />
      <Author />
    </div>
  );
};

export default Main;
