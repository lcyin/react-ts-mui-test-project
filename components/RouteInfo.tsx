import React from 'react';
import { rows } from './data';

export default function RouteInfo() {
  const selectedRoute = rows[0];
  return (
    <div className="RouteInfo">
      <TopBar title={selectedRoute.route} />
      <BottomBar />
    </div>
  );
}
