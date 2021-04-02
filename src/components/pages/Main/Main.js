import React from 'react';
import './Main.css';
import Search from '../../cards/Search/Search';
import Preloader from '../../pageLayout/Preloader/Preloader';
import CardList from '../../cards/CardList/CardList';
import UserAbout from '../../pageLayout/UserAbout/UserAbout';

const Main = () => {
  return (
    <div>
      <Search />
      <Preloader />
      <CardList />
      <UserAbout />
    </div>
  );
};

export default Main;
