import React, { Component } from 'react';
import TopBar from './AppBar/TopBar';
import BottomBar from './AppBar/BottomBar';
import RouteList from './RouteList/RouteList';

import '../style.css';
import { rows } from './data';
const columns = [
  {
    width: 120,
    label: 'Route',
    dataKey: 'route',
  },
  {
    width: 200,
    label: 'Destination',
    dataKey: 'title',
  },
  {
    width: 60,
    label: 'Minutes',
    dataKey: 'mins',
  },
];

export default function Home() {
  return (
    <div className="App">
      <TopBar title="Header" />
      <RouteList rows={rows} columns={columns} />
      <BottomBar />
    </div>
  );
}
