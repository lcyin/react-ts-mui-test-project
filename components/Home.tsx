import React, { useEffect, useState } from 'react';
import API from '../API';
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
  const [dataRow, setDataRow] = useState([]);

  useEffect(() => {
    const getAllRoute = async () => {
      const allRoute = await API.getAllRoute();
      const routeDataRow = allRoute.data.map((data, id) => {
        return {
          id,
          route: data.route,
          title: `往: ${data.dest_tc} `,
          mins: `- 分鐘`,
          bound: data.bound,
        };
      });
      // .filter((data) => data.route === '296C');
      setDataRow(routeDataRow);
    };
    getAllRoute();
  }, []);
  return (
    <div className="App">
      <TopBar icon="menu" title="Header" />
      <RouteList rows={dataRow} columns={columns} redirect="/routeInfo" />
      <BottomBar />
    </div>
  );
}
