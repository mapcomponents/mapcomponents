import React from "react";

import useLayer from "../../hooks/useLayer";
import { Feature, FeatureCollection } from "@turf/turf";

interface MlLayerProps {
	/**
	 * Id of the target MapLibre instance in mapContext
	 */
	mapId?: string;
	/**
	 * The layerId of an existing layer this layer should be rendered visually beneath
	 * https://maplibre.org/maplibre-gl-js-docs/api/map/#map#addlayer - see "beforeId" property
	 */
	insertBeforeLayer?: string;
	/**
	 * Id of the layer that will be added by this component to the maplibre-gl instance
	 */
	layerId?: string;
	/**
	 * Javascript object that is passed the addLayer command as first parameter.
	 */
	options?: any;
	/**
	 * GeoJSON data that is supposed to be rendered by this component.
	 */
	geojson?: Feature | FeatureCollection | undefined;
}

/**
 * Basic layer component that create a layer in a MapLibre-gl instance and keeps it updated according to it attribute configuration.
 * 
 * @category Map components 
 */
const MlLayer = (props: MlLayerProps) => {
	useLayer({
		idPrefix: 'MlLayer-',
		layerId: props.layerId,
		mapId: props.mapId,
		geojson: props.geojson,
		options: {
			type: "background",
			paint: {
				"background-color": "rgba(0,0,0,0)",
			},
			...props.options,
		},
		insertBeforeLayer: props.insertBeforeLayer,
	});

	return <></>;
};

export default MlLayer;
