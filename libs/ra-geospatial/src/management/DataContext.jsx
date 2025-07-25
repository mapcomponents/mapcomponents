import React, { useEffect, useState } from "react";
import { parse as wellknownParse } from "wellknown";
import { feature, featureCollection } from '@turf/helpers';

export const DataContext = React.createContext();

export default function DataContextProvider (props) {
  const [data, setData] = useState({});

  useEffect(() => {
    refreshData();
    const _eventHandler = () => {
      refreshData();
    };
    window.addEventListener("storageItemUpdated", _eventHandler);
    return () => {
      window.removeEventListener("storageItemUpdated", _eventHandler);
    };
  }, []);

  const refreshData = () => {
    const storageDataTmp = localStorage.getItem("ra-data-local-storage");
    if (storageDataTmp) {
      const storageData = JSON.parse(storageDataTmp);
      const _data = Object.keys(storageData).map((el) => {
        const features = storageData[el].map((entry) => {
          return feature(wellknownParse(entry.geom));
        });
        return {
          name: el,
          featureCollection: features?.[0]
            ? featureCollection(features)
            : undefined,
        };
      });

      setData(_data);
    }
  };

  const value = {
    data,
    refreshData,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
