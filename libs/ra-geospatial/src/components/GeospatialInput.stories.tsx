import type { Meta, StoryObj } from '@storybook/react';
import GeospatialInput from './GeospatialInput';
import { MapComponentsProvider, MapLibreMap } from '@mapcomponents/react-maplibre';
import { Admin, defaultLightTheme, Resource } from 'react-admin';
import {
	PoiCreate,
	PoiCreateWebGis,
	PoiEdit,
	PoiEditWebGis,
	PoiListInput,
	PoiShow,
	PoiShowWebGis,
} from '../management/Poi';
import {
	PropertyCreate,
	PropertyCreateWebGis,
	PropertyEdit,
	PropertyEditWebGis,
	PropertyListInput,
	PropertyShow,
	PropertyShowWebGis,
} from '../management/Property';
import {
	RouteCreate,
	RouteCreateWebGis,
	RouteEdit,
	RouteEditWebGis,
	RouteListInput,
	RouteShow,
	RouteShowWebGis,
} from '../management/Route';
import DataContextProvider from '../management/DataContext';
import GisLayout from '../management/GisLayout';
import DataLayers from '../management/DataLayers';
import { dataProvider } from '../management/dataProvider';


const meta: Meta = {
	component: GeospatialInput,
	title: 'MapComponents/GeospatialInput',
} satisfies Meta<typeof GeospatialInput>;

export const DefaultReactAdmin: Story = {
	args: {
		primary: true,
	},
	decorators: [() => (
		<DataContextProvider>
			<MapComponentsProvider>
				<Admin dataProvider={dataProvider} theme={defaultLightTheme}>
					<Resource
						name="pois"
						list={PoiListInput}
						edit={PoiEdit}
						create={PoiCreate}
						show={PoiShow}
					/>
					<Resource
						name="Properties"
						list={PropertyListInput}
						edit={PropertyEdit}
						create={PropertyCreate}
						show={PropertyShow}
					/>
					<Resource
						name="Routes"
						list={RouteListInput}
						edit={RouteEdit}
						create={RouteCreate}
						show={RouteShow}
					/>
				</Admin>
				<DataLayers />
			</MapComponentsProvider>
		</DataContextProvider>
	)],
};


export default meta;
type Story = StoryObj<typeof meta>;

export const ReactAdminWebgis: Story = {
	decorators: [() => (
		<DataContextProvider>
			<MapComponentsProvider>
				<Admin dataProvider={dataProvider} layout={GisLayout} theme={defaultLightTheme}>
					<Resource
						name="pois"
						list={PoiListInput}
						edit={PoiEditWebGis}
						create={PoiCreateWebGis}
						show={PoiShowWebGis}
					/>
					<Resource
						name="Properties"
						list={PropertyListInput}
						edit={PropertyEditWebGis}
						create={PropertyCreateWebGis}
						show={PropertyShowWebGis}
					/>
					<Resource
						name="Routes"
						list={RouteListInput}
						edit={RouteEditWebGis}
						create={RouteCreateWebGis}
						show={RouteShowWebGis}
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
	)],
};

