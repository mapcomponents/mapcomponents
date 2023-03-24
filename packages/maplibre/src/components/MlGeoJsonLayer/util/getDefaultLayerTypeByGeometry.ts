import { Feature, FeatureCollection } from "@turf/turf";
import { LayerSpecification } from "maplibre-gl";

const mapGeometryTypesToLayerTypes = {
	Position: "circle",
	Point: "circle",
	MultiPoint: "circle",
	LineString: "line",
	MultiLineString: "line",
	Polygon: "fill",
	MultiPolygon: "fill",
	GeometryCollection: "circle",
};

const getDefaulLayerTypeByGeometry: Function = (
	geojson: Feature | FeatureCollection
): LayerSpecification['type'] => {
	if (geojson?.type === "Feature") {
		return mapGeometryTypesToLayerTypes?.[geojson?.geometry?.type]
			? mapGeometryTypesToLayerTypes[geojson.geometry.type]
			: "circle";
	}
	if (geojson?.type === "FeatureCollection") {
		if (geojson.features.length) {
			return getDefaulLayerTypeByGeometry(geojson.features[0]);
		}
		return "circle";
	}
	return "fill";
};
export default getDefaulLayerTypeByGeometry;
