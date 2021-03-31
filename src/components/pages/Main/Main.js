import React from 'react';
import './Main.css';
import SearchForm from '../../cards/SearchForm/SearchForm';
import Preloader from '../../pageLayout/Preloader/Preloader';
import CardList from '../../cards/CardList/CardList';
import UserAbout from '../../pageLayout/UserAbout/UserAbout';

const Main = () => {
  return (
    <div>
      <SearchForm />
      <Preloader />
      <CardList />
      <UserAbout />
    </div>
  );
};

export default Main;
