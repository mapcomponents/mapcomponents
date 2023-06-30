/// <reference types="react" />
import { Feature, FeatureCollection } from '@turf/turf';
import { useLayerProps } from '../../hooks/useLayer';
import { LineLayerSpecification, CircleLayerSpecification, FillLayerSpecification, LayerSpecification, RasterLayerSpecification } from 'maplibre-gl';
export type MlGeoJsonLayerProps = {
    /**
     * Id of the target MapLibre instance in mapContext
     */
    mapId?: string;
    /**
     * Id of an existing layer in the mapLibre instance to help specify the layer order
     * This layer will be visually beneath the layer with the "insertBeforeLayer" id.
     * This layer will not be added to the maplibre-gl instance until a layer with an
     * id that matches the value of insertBeforeLayer is created.
     */
    insertBeforeLayer?: string;
    /**
     * Id of the new layer and source that are added to the MapLibre instance
     */
    layerId?: string;
    /**
     * GeoJSON data that is supposed to be rendered by this component.
     */
    geojson: Feature | FeatureCollection | undefined;
    /**
     * Type of the layer that will be added to the MapLibre instance.
     * All types from LayerSpecification union type are supported except the type from
     * RasterLayerSpecification
     */
    type?: Exclude<LayerSpecification['type'], RasterLayerSpecification['type']>;
    /**
     * Paint property object, that is passed to the addLayer call.
     * Possible props depend on the layer type.
     * See https://maplibre.org/maplibre-gl-js-docs/style-spec/layers/
     * Some examples are:
     * https://maplibre.org/maplibre-gl-js-docs/style-spec/layers/#line
     * https://maplibre.org/maplibre-gl-js-docs/style-spec/layers/#circle
     * https://maplibre.org/maplibre-gl-js-docs/style-spec/layers/#fill
     * All paint types from LayerSpecification union type are supported except the paint type from
     * RasterLayerSpecification
     */
    paint?: Exclude<LayerSpecification['paint'], RasterLayerSpecification['paint']>;
    /**
     * Layout property object, that is passed to the addLayer call.
     * Possible props depend on the layer type.
     * See https://maplibre.org/maplibre-gl-js-docs/style-spec/layers/
     * Some examples are:
     * https://maplibre.org/maplibre-gl-js-docs/style-spec/layers/#line
     * https://maplibre.org/maplibre-gl-js-docs/style-spec/layers/#circle
     * https://maplibre.org/maplibre-gl-js-docs/style-spec/layers/#fill
     * All layout types from LayerSpecification union type are supported except the layout type from
     * RasterLayerSpecification

     */
    layout?: Exclude<LayerSpecification['layout'], RasterLayerSpecification['layout']>;
    /**
     * Javascript object that is spread into the addLayer commands first parameter.
     */
    options?: useLayerProps['options'];
    /**
     * Javascript object with optional properties "fill", "line", "circle" to override implicit layer type default paint properties.
     */
    defaultPaintOverrides?: {
        circle?: CircleLayerSpecification['paint'];
        fill?: FillLayerSpecification['paint'];
        line?: LineLayerSpecification['paint'];
    };
    /**
     * Hover event handler that is executed whenever a geometry rendered by this component is hovered.
     */
    onHover?: useLayerProps['onHover'];
    /**
     * Click event handler that is executed whenever a geometry rendered by this component is clicked.
     */
    onClick?: useLayerProps['onClick'];
    /**
     * Leave event handler that is executed whenever a geometry rendered by this component is
     * left/unhovered.
     */
    onLeave?: useLayerProps['onLeave'];
};
/**
 * Adds source and layer to display GeoJSON data on the map.
 *
 * @component
 */
declare const MlGeoJsonLayer: (props: MlGeoJsonLayerProps) => JSX.Element;
export default MlGeoJsonLayer;
