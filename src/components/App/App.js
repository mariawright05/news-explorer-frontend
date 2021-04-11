import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import NewsState from '../../context/news/NewsState';
import './App.css';

function App() {
  // changes formatting of Header
  const isAuth = true;

  return (
    <div className="app">
      <NewsState>
        <Router>
          <>
            <Switch>
              <Route exact path="/">
                <Main isAuth={isAuth} />
              </Route>
              <Route exact path="/saved-news">
                <SavedNews isAuth={isAuth} />
              </Route>
            </Switch>
            <Footer />
          </>
        </Router>
      </NewsState>
    </div>
  );
}

export default App;
