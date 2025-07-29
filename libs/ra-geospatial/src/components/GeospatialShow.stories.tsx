import type { Meta, StoryObj } from '@storybook/react';
import GeospatialShow from './GeospatialShow';
import { PoiListShow, PoiShow, PoiShowWebGis } from '../management/Poi';
import { PropertyListShow, PropertyShow, PropertyShowWebGis } from '../management/Property';
import { RouteListShow, RouteShow, RouteShowWebGis } from '../management/Route';
import DataContextProvider from '../management/DataContext';
import GisLayout from '../management/GisLayout';
import DataLayers from '../management/DataLayers';
import { MapComponentsProvider, MapLibreMap } from '@mapcomponents/react-maplibre';
import { Admin, CustomRoutes, defaultLightTheme, Resource, useRedirect } from 'react-admin';
import { dataProvider } from '../management/dataProvider';
import { Route } from 'react-router-dom';
import { useEffect } from 'react';
const StoryRedirect = () => {
	useEffect(() => {
		console.log("hallo");
	}, []);
	return null;
};
const meta: Meta = {
	component: GeospatialShow,
	title: 'MapComponents/GeospatialShow',
	decorators: [
		(Story, context) => {
			return (
				<DataContextProvider>
					<MapComponentsProvider>
						<Admin
							dataProvider={dataProvider}
							layout={context.parameters?.layout}
							theme={defaultLightTheme}
							key={context.parameters?.name}
						>
							<CustomRoutes>
								<Route path={'/'} element={<Story />} />
							</CustomRoutes>
						</Admin>
						{!context.args.embeddedMap && (
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
						)}
					</MapComponentsProvider>
				</DataContextProvider>
			);
		},
	],
} satisfies Meta<typeof GeospatialShow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PoisShow = PoiShow.bind({});
PoisShow.args = {
	primary: true,
	embeddedMap: true,
};
PoisShow.parameters = {
	name: 'pois',
	list: PoiListShow,
};

export const PropertiesShow = PropertyShow.bind({});
PropertiesShow.args = {
	primary: true,
	embeddedMap: true,
};
PropertiesShow.parameters = {
	name: 'properties',
	list: PropertyListShow,
};

export const RoutesShow = RouteShow.bind({});
RoutesShow.args = {
	primary: true,
	embeddedMap: true,
};
RoutesShow.parameters = {
	name: 'routes',
	list: RouteListShow,
};

export const PoisShowGIS = PoiShowWebGis.bind({});
PoisShowGIS.args = {
	primary: true,
	embeddedMap: false,
};
PoisShowGIS.parameters = {
	name: 'pois',
	list: PoiListShow,
	layout: GisLayout,
};

export const PropertiesShowGIS = PropertyShowWebGis.bind({});
PropertiesShowGIS.args = {
	primary: true,
	embeddedMap: false,
};
PropertiesShowGIS.parameters = {
	name: 'properties',
	list: PropertyListShow,
	layout: GisLayout,
};

export const RoutesShowGIS = RouteShowWebGis.bind({});
RoutesShowGIS.args = {
	primary: true,
	embeddedMap: false,
};
RoutesShowGIS.parameters = {
	name: 'routes',
	list: RouteListShow,
	layout: GisLayout,
};
