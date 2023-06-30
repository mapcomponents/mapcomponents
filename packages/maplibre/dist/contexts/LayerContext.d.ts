import { StyleSpecification } from 'maplibre-gl';
import React from 'react';
import { MlVectorTileLayerProps } from '../components/MlVectorTileLayer/MlVectorTileLayer';
import { MlWmsLoaderProps } from '../components/MlWmsLoader/MlWmsLoader';
import { MlGeoJsonLayerProps } from '../components/MlGeoJsonLayer/MlGeoJsonLayer';
export interface LayerContextProps {
    children: React.ReactNode;
}
export type WmsLayerConfig = {
    type: 'wms';
    name?: string;
    id?: string;
    config: MlWmsLoaderProps;
};
export type GeojsonLayerConfig = {
    type: 'geojson';
    name?: string;
    id?: string;
    config: MlGeoJsonLayerProps;
};
export type VtLayerConfig = {
    type: 'vt';
    name?: string;
    id?: string;
    config: MlVectorTileLayerProps;
};
export type LayerConfig = WmsLayerConfig | GeojsonLayerConfig | VtLayerConfig;
export interface LayerContextType {
    layers: LayerConfig[];
    setLayers: (layers: LayerConfig[] | ((layers: LayerConfig[]) => LayerConfig[])) => void;
    backgroundLayers: MlVectorTileLayerProps['layers'];
    setBackgroundLayers: (layers: MlVectorTileLayerProps['layers'] | ((layers: MlVectorTileLayerProps['layers']) => MlVectorTileLayerProps['layers'])) => void;
    symbolLayers: MlVectorTileLayerProps['layers'];
    setSymbolLayers: (layers: MlVectorTileLayerProps['layers'] | ((layers: MlVectorTileLayerProps['layers']) => MlVectorTileLayerProps['layers'])) => void;
    updateStyle: (style: StyleSpecification) => void;
    vtLayerConfig: Partial<MlVectorTileLayerProps>;
    setTileUrl: (url: string) => void;
    tileUrl: string;
    moveUp: (layerId: string) => void;
    moveDown: (layerId: string) => void;
}
declare const LayerContext: React.Context<LayerContextType>;
declare function LayerContextProvider(props: LayerContextProps): JSX.Element;
export default LayerContext;
export { LayerContextProvider };
