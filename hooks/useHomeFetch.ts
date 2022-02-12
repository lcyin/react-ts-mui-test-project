import React, { useEffect, useState } from 'react';
import API from '../API';

export const useHomeFetch = () => {
  const [dataRow, setDataRow] = useState([]);
  useEffect(() => {
    const getAllRoute = async () => {
      const allRoute = await API.getAllRoute();
      const routeDataRow = allRoute.data
        .map((data, id) => {
          return {
            id,
            route: data.route,
            title: `往: ${data.dest_tc} `,
            mins: `- 分鐘`,
            bound: data.bound,
          };
        })
        .filter((data) => data.route === '296C');
      setDataRow(routeDataRow);
    };
    getAllRoute();
  }, []);

  return { dataRow };
};
