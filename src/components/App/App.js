import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  // changes formatting of Header
  const isAuth = true;

  // changes Header and CardList components on saved-news page
  const isAlt = false;

  return (
    <div className="app">
      <Router>
        <>
          <Switch>
            <Route exact path="/">
              <Main isAuth={isAuth} isAlt={isAlt} />
            </Route>
            <Route exact path="/saved-news">
              <SavedNews isAuth={isAuth} isAlt={isAlt} />
            </Route>
          </Switch>
          <Footer />
        </>
      </Router>
    </div>
  );
}

export default App;
