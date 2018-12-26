import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './views/home';
import Results from './views/search-results';
import ArticleDescription from './views/article-description';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/items/:id" component={ArticleDescription} />
            <Route path="/items" component={Results} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
