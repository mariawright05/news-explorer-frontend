import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import NewsState from '../../context/news/NewsState';
import AuthState from '../../context/auth/AuthState';
import ProtectedRoute from '../../utils/ProtectedRoute';
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
                <ProtectedRoute
                  exact
                  path="/saved-news"
                  component={SavedNews}
                />
                <Redirect to="/" />
              </Switch>
              <Footer />
            </>
          </Router>
        </NewsState>
      </AuthState>
    </div>
  );
}

export default App;
