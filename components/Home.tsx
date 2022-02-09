import React, { Component } from 'react';
import TopBar from './AppBar/TopBar';
import BottomBar from './AppBar/BottomBar';
import RouteList from './RouteList/RouteList';

import '../style.css';

export default function Home() {
  return (
    <div className="App">
      <TopBar title="Header" />
      <RouteList />
      <BottomBar />
    </div>
  );
}
