import React, { Component } from 'react';
import { render } from 'react-dom';
import TopBar from './components/AppBar/TopBar';
import BottomBar from './components/AppBar/BottomBar';
import List from './components/List/List';

import './style.css';

function App() {
  return (
    <div className="App">
      <TopBar title="Header" />
      <List />
      <BottomBar />
    </div>
  );
}

render(<App />, document.getElementById('root'));
