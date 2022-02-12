//@ts-nocheck

import React, { useEffect, useState } from "react";
import API from "../API";

const fetchStationScuedule = async (station) => {
  return (await API.getAllStopEta(station.stopId)).data
    .map((schedule) => {
      if (schedule.route === station.route && schedule.dir === station.bound) {
        const routeTime = new Date(schedule.eta);
        const different = routeTime.valueOf() - new Date().valueOf();
        const remaining =
          different > 0 ? new Date(different).getMinutes() : "Passed";
        return { time: remaining };
      }
    })
    .filter((schedule) => schedule);
};

export const useStationFetch = (steps) => {
  const [intervalId, setIntervalId] = useState(0);

  const [stationData, setStationData] = useState(steps);

  const [station, setStation] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});

  useEffect(async () => {
    setStationData(steps);
    setStation(steps[activeStep]);

    if (station) {
      clearInterval(intervalId);
      const interval = setInterval(async () => {
        const stationSchedule = await fetchStationScuedule(station);
        console.log(stationSchedule);
        stationData.forEach((data) => {
          if (data.stopId === station.stopId) {
            data.schedule = stationSchedule;
          }
        });

        setStationData([...stationData]);
      }, 10000);
      setIntervalId(interval as any);
      console.log(interval);
    }
  }, [steps, station]);
  return {
    stationData,
    setStationData,
    station,
    setStation,
    activeStep,
    setActiveStep,
    completed,
    setCompleted,
  };
};
