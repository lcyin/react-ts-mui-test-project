import React, { useEffect, useState } from 'react';
import TopBar from './AppBar/TopBar';
import BottomBar from './AppBar/BottomBar';
import RouteList from './RouteList/RouteList';
import { useHomeFetch } from '../hooks/useHomeFetch';
import '../style.css';
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
  const { dataRow } = useHomeFetch();
  return (
    <div className="App">
      <TopBar icon="menu" title="Header" />
      <RouteList rows={dataRow} columns={columns} redirect="/routeInfo" />
      {/* <BottomBar /> */}
    </div>
  );
}
