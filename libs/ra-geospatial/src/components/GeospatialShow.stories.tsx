import type { Meta, StoryObj } from '@storybook/react';
import GeospatialShow from './GeospatialShow';
import {
	PoiCreate,
	PoiCreateWebGis,
	PoiEditWebGis,
	PoiListShow,
	PoiShow,
	PoiShowWebGis,
} from '../management/Poi';
import {
	PropertyCreate,
	PropertyCreateWebGis,
	PropertyEditWebGis,
	PropertyListShow,
	PropertyShow,
	PropertyShowWebGis,
} from '../management/Property';
import {
	RouteCreate,
	RouteCreateWebGis,
	RouteEditWebGis,
	RouteListShow,
	RouteShow,
	RouteShowWebGis,
} from '../management/Route';
import DataContextProvider from '../management/DataContext';
import GisLayout from '../management/GisLayout';
import DataLayers from '../management/DataLayers';
import { MapComponentsProvider, MapLibreMap } from '@mapcomponents/react-maplibre';
import { Admin, defaultLightTheme, Resource } from 'react-admin';
import { dataProvider } from '../management/dataProvider';

const meta: Meta = {
	component: GeospatialShow,
	title: 'MapComponents/GeospatialShow',
	decorators: [],
} satisfies Meta<typeof GeospatialShow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultReactAdmin: Story = {
	args: {
		primary: true,
		embeddedMap: true,
	},
	decorators: [
		() => (
			<DataContextProvider>
				<MapComponentsProvider>
					<Admin dataProvider={dataProvider} theme={defaultLightTheme}>
						<Resource name="pois" list={PoiListShow} create={PoiCreate} show={PoiShow} />
						<Resource
							name="Properties"
							list={PropertyListShow}
							create={PropertyCreate}
							show={PropertyShow}
						/>
						<Resource name="Routes" list={RouteListShow} create={RouteCreate} show={RouteShow} />
					</Admin>
					<DataLayers />
				</MapComponentsProvider>
			</DataContextProvider>
		),
	],
};

export const ReactAdminWebgis: Story = {
	args: {
		embeddedMap: false,
	},

	decorators: [
		() => (
			<DataContextProvider>
				<MapComponentsProvider>
					<Admin dataProvider={dataProvider} layout={GisLayout} theme={defaultLightTheme}>
						<Resource
							name="pois"
							list={PoiListShow}
							edit={PoiEditWebGis}
							create={PoiCreateWebGis}
							show={PoiShowWebGis}
						/>
						<Resource
							name="Properties"
							list={PropertyListShow}
							edit={PropertyEditWebGis}
							create={PropertyCreateWebGis}
							show={PropertyShowWebGis}
						/>
						<Resource
							name="Routes"
							list={RouteListShow}
							edit={RouteEditWebGis}
							create={RouteCreateWebGis}
							show={RouteShowWebGis}
						/>
					</Admin>
					<MapLibreMap
						mapId="map_1"
						options={{
							zoom: 14.5,
							style: 'https://wms.wheregroup.com/tileserver/style/klokantech-basic.json',
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
		),
	],
};
