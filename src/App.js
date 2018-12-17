import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './components/search-box';
import Results from './components/results';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBox />
        </header>
        <main className="App-main justify-content-center">
          <Results />
        </main>
      </div>
    );
  }
}

export default App;
