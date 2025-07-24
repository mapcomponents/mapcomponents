import { MapComponentsProvider, MapLibreMap } from '@mapcomponents/react-maplibre';
import { Admin, defaultLightTheme, Resource } from 'react-admin';
import { PoiCreate, PoiEdit, PoiList, PoiShow } from '../management/Poi';
import { PropertyCreate, PropertyEdit, PropertyList, PropertyShow } from '../management/Property';
import { RouteCreate, RouteEdit, RouteList, RouteShow } from '../management/Route';
import DataContextProvider from '../management/DataContext';
import localStorageDataProvider from '../management/lsDataProvider';
import GisLayout from '../management/GisLayout';
import DataLayers from '../management/DataLayers';

const dataProvider = localStorageDataProvider({
	localStorageUpdateDelay: 2,
	defaultData: {
		pois: [{ id: 0, title: 'poi', geom: 'POINT (7.0812161636899305 50.742953811071516)' }],
		properties: [{
			id: 0,
			title: 'property',
			geom: 'POLYGON ((7.080946217034466 50.743028774095535, 7.0810753691390005 50.74308880391186, 7.081138230782699 50.74302949734695, 7.081043366847268 50.74293909085313, 7.080946217034466 50.743028774095535))',
		}],
		routes: [{
			id: 0,
			title: 'route',
			geom: 'LINESTRING (7.081129871797657 50.743085081202906, 7.081385890128274 50.74305470467647, 7.081406463029936 50.743109671709675, 7.081388176005618 50.74312775295667, 7.081407605968565 50.74310822520965, 7.081388176005618 50.74305470467647, 7.081580189753822 50.74302722113546, 7.081654480786483 50.743055427927146, 7.08164076551904 50.74307061619274, 7.081657909603592 50.74308363470212, 7.081638479641697 50.74310099270889, 7.081677339566568 50.74311835070918)',
		}],
	},
});

export const ReactAdminInputGisDecorator = () => (
	<>
		<DataContextProvider>
			<MapComponentsProvider>
				<Admin dataProvider={dataProvider}  theme={defaultLightTheme}> // todo: add layout={GisLayout} and ask tobias about the problem
					<Resource
						name="pois"
						list={PoiList}
						edit={PoiEdit}
						create={PoiCreate}
						show={PoiShow}
					/>
					<Resource
						name="Properties"
						list={PropertyList}
						edit={PropertyEdit}
						create={PropertyCreate}
						show={PropertyShow}
					/>
					<Resource
						name="Routes"
						list={RouteList}
						edit={RouteEdit}
						create={RouteCreate}
						show={RouteShow}
					/>
				</Admin>
				<MapLibreMap
					mapId="map_1"
					options={{
						zoom: 14.5,
						style:
							'https://wms.wheregroup.com/tileserver/style/klokantech-basic.json',
						center: [7.080590113226776, 50.740545567043426],
					}}
					style={{
						position: 'absolute',
						top: 0,
						right: 0,
						left: 0,
						bottom: 0,
					}}
				/>
				<DataLayers />
			</MapComponentsProvider>
		</DataContextProvider>
	</>
);
