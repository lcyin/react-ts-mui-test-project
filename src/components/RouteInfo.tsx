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
    const _stepData = await Promise.all(
      allRouteBusStop.data.map(async (data) => {
        const busStop = allBusStop.data.find((stop) => stop.stop === data.stop);
        const result = {
          label: busStop.name_tc,
          fee: '8.8',
          schedule: [],
          stopId: data.stop,
          route: route,
          bound: bound,
        };

        const busStopEta = await API.getAllStopEta(data.stop);
        busStopEta.data.forEach((etaData) => {
          if (etaData.route === route && etaData.dir === bound) {
            const routeTime = new Date(etaData.eta);
            const different = routeTime - new Date();
            const remaining =
              different > 0 ? new Date(different).getMinutes() : 'Passed';

            result.schedule.push({ time: remaining });
          }
        });

        return result;
      })
    );

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
