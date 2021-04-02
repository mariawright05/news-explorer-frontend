import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../pages/Main/Main';
import SavedNews from '../pages/SavedNews/SavedNews';
import Footer from '../pageLayout/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/saved-news" component={SavedNews} />
          </Switch>
          <Footer />
        </>
      </Router>
    </div>
  );
}

export default App;
