import React from 'react';
import BottomBar from './AppBar/BottomBar';
import TopBar from './AppBar/TopBar';
import StationStep from './StationStep/StationStep';
import { rows } from './data';

export default function RouteInfo() {
  const selectedRoute = rows[0];
  return (
    <div className="RouteInfo">
      <TopBar icon="back" title={selectedRoute.route} />
      <StationStep />
      <BottomBar />
    </div>
  );
}
