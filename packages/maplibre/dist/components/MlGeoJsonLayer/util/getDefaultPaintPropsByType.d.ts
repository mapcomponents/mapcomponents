import { LayerSpecification, RasterLayerSpecification } from 'maplibre-gl';
declare const getDefaultPaintPropsByType: (type: string, defaultPaintOverrides?: {
    [key: string]: unknown;
} | undefined) => Exclude<LayerSpecification['paint'], RasterLayerSpecification['paint']>;
export default getDefaultPaintPropsByType;
