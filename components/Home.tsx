import React, { Component } from 'react';
import TopBar from './AppBar/TopBar';
import BottomBar from './AppBar/BottomBar';
import List from './VirtualizedTable/VirtualizedTable';

import '../style.css';

export default function Home() {
  return (
    <div className="App">
      <TopBar title="Header" />
      <List />
      <BottomBar />
    </div>
  );
}
