import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import Popup from '../Popup/LoginPopup';
import NewsState from '../../context/news/NewsState';
import AuthState from '../../context/auth/AuthState';
import './App.css';

function App() {
  return (
    <div className="app">
      <AuthState>
        <NewsState>
          <Router>
            <>
              <Switch>
                <Route exact path="/">
                  <Main />
                </Route>
                <Route exact path="/saved-news">
                  <SavedNews />
                </Route>
              </Switch>
              <Footer />
              <Popup />
            </>
          </Router>
        </NewsState>
      </AuthState>
    </div>
  );
}

export default App;
