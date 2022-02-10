import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BottomBar from './AppBar/BottomBar';
import TopBar from './AppBar/TopBar';
import StationStep from './StationStep/StationStep';
import { rows } from './data';
import API from '../API';

export default function RouteInfo() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [stepData, setStepDate] = useState([]);
  useEffect(async () => {
    const route = searchParams.get('route');
    const bound = searchParams.get('bound');
    const allBusStop = await API.getAllBusStop();
    const allRouteBusStop = await API.getAllRouteStop(route, bound);
    const _stepData = allRouteBusStop.data.map((data) => {
      const busStop = allBusStop.data.find((stop) => stop.stop === data.stop);
      const result = {
        label: busStop.name_tc,
        fee: '8.8',
        schedule: [
          {
            time: 0,
          },
          {
            time: 10,
          },
          {
            time: 20,
          },
        ],
      };

      return result;
    });

    setStepDate(_stepData);
  }, []);

  const selectedRoute = rows[0];
  return (
    <div className="RouteInfo">
      <TopBar icon="back" title={selectedRoute.route} />
      <StationStep steps={stepData} />
      <BottomBar />
    </div>
  );
}
