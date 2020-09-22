import React, { Component } from 'react';
import Header from './components/header/Header';
import './App.scss';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
      </main>
    );
  }
}

export default App;
