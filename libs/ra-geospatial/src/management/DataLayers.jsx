import React, { useContext } from "react";
import { MlGeoJsonLayer } from "@mapcomponents/react-maplibre";
import { DataContext } from "./DataContext";

export default function DataLayers() {
  const dataContext = useContext(DataContext);
  return (
    <>
      {dataContext.data &&
        dataContext.data?.map?.((el) => <MlGeoJsonLayer layerId={el.name + '_localstorage_layer'} key={el.name} mapId='map_1' geojson={el.featureCollection} />)}
    </>
  );
}
