import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './components/Hello/Hello';
import TopBar from './components/AppBar/TopBar';
import BottomBar from './components/AppBar/BottomBar';

import './style.css';

function App() {
  return (
    <div className="App">
      <TopBar title="Header" />
      <Hello name="React" />
      <BottomBar />
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

render(<App />, document.getElementById('root'));
