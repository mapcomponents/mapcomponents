import { MapComponentsProvider } from '@mapcomponents/react-maplibre';
import GeometryShowMap, { GeospatialShowMapProps } from './GeospatialShowMap.js';

function GeospatialShow(props: GeospatialShowMapProps) {
	return (
		<>
			{props.embeddedMap ? (
				<MapComponentsProvider>
					<GeometryShowMap {...props} />
				</MapComponentsProvider>
			) : (
				<GeometryShowMap {...props} />
			)}
		</>
	);
}
GeospatialShow.defaultProps = {
	embeddedMap: true,
};

export default GeospatialShow;

//todo: ist diese Komponente vergleichbar mit dieser Demo https://mapcomponents.github.io/react-admin-demo-apps/webgis-demo/#/pois
//       oder was genau ist die Funktionalität dieser Komponente?

