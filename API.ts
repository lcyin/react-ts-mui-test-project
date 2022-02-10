const BUS_ETA_API = 'https://data.etabus.gov.hk/v1';
const ALL_BUS_API = `${BUS_ETA_API}/transport/kmb/stop`;
const ALL_ROUTE_STOP_API = `${BUS_ETA_API}/transport/kmb/route-stop`;
const ALL_ROUTE_API = `${BUS_ETA_API}/transport/kmb/route`;
const STOP_ETA_API = `${BUS_ETA_API}/transport/kmb/stop-eta`;

const apiSetting = {
  getAllBus: async () => {
    return await (await fetch(ALL_BUS_API)).json();
  },
  getAllRouteStop: async (route, bound) => {
    return await (
      await fetch(
        `${ALL_ROUTE_STOP_API}/${route}/${
          bound === 'I' ? 'inbound' : 'outbound'
        }/1`
      )
    ).json();
  },
  getAllRoute: async () => {
    return await (await fetch(ALL_ROUTE_API)).json();
  },
  getAllStopEta: async (busStopId) => {
    return await (await fetch(`${STOP_ETA_API}/${busStopId}`)).json();
  },
};
