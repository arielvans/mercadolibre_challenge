import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './components/search-box'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBox />
        </header>
      </div>
    );
  }
}

export default App;
