import React from 'react';
import './Main.css';
import Search from '../Search/Search';
import CardList from '../CardList/CardList';
import Author from '../Author/Author';

const Main = (props) => {
  const { isAuth } = props;
  const isAlt = false;

  return (
    <>
      <Search isAuth={isAuth} />
      <CardList isAuth={isAuth} isAlt={isAlt} />
      <Author />
    </>
  );
};

export default Main;
