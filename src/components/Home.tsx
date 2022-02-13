import React, { useEffect, useState } from 'react';
import TopBar from './AppBar/TopBar';
import BottomBar from './AppBar/BottomBar';
import RouteList from './RouteList/RouteList';
import { useHomeFetch } from '../hooks/useHomeFetch';
import '../style.css';
const columns = [
  {
    width: 100,
    label: '路線',
    dataKey: 'route',
  },
  {
    width: 200,
    label: '目的地',
    dataKey: 'title',
  },
  {
    width: 100,
    label: '分鐘',
    dataKey: 'mins',
  },
];

export default function Home() {
  const { dataRow } = useHomeFetch();
  return (
    <div className="App">
      <TopBar icon="menu" title="九巴時間表" />
      <RouteList rows={dataRow} columns={columns} redirect="/routeInfo" />
      {/* <BottomBar /> */}
    </div>
  );
}
