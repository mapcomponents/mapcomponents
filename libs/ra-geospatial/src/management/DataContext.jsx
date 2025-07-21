import React, { useEffect, useState } from "react";
import { parse as wellknownParse } from "wellknown";
import { feature, featureCollection } from '@turf/helpers';

export const DataContext = React.createContext();

export const DataContextProvider = function (props) {
  const [data, setData] = useState({});

  useEffect(() => {
    refreshData();
    const _eventHandler = (event) => {
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
      console.log("update layers");
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

      console.log(_data);
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
