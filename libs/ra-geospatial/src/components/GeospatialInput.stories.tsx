import type { Meta, StoryObj } from '@storybook/react';
import GeospatialInput from './GeospatialInput';
import { MapComponentsProvider, MapLibreMap } from '@mapcomponents/react-maplibre';
import { Admin, CustomRoutes, defaultLightTheme, Resource } from 'react-admin';
import { PoiCreate, PoiEdit, PoiEditWebGis, PoiListInput } from '../management/Poi';
import {
	PropertyEdit,
	PropertyCreate,
	PropertyEditWebGis,
	PropertyListInput,
} from '../management/Property';
import { RouteEdit, RouteCreate, RouteEditWebGis, RouteListInput } from '../management/Route';
import DataContextProvider from '../management/DataContext';
import DataLayers from '../management/DataLayers';
import { dataProvider } from '../management/dataProvider';
import GisLayout from '../management/GisLayout';
import { Route } from 'react-router-dom';

const storyoptions: Meta = {
	component: GeospatialInput,
	title: 'MapComponents/GeospatialInput',
	decorators: [
		(Story, context) => {
			return (
				<DataContextProvider>
					<MapComponentsProvider>
						<Admin
							dataProvider={dataProvider}
							layout={context.parameters?.layout}
							theme={defaultLightTheme}
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
						<DataLayers />
					</MapComponentsProvider>
				</DataContextProvider>
			);
		},
	],
} satisfies Meta<typeof GeospatialInput>;

export default storyoptions;

type Story = StoryObj<typeof storyoptions>;

export const PoisEdit = PoiEdit.bind({});
PoisEdit.args = {
	primary: true,
	embeddedMap: true,
};
PoisEdit.parameters = {
	name: 'pois',
	list: PoiListInput,
};

export const PropertiesEdit = PropertyEdit.bind({});
PropertiesEdit.args = {
	primary: true,
	embeddedMap: true,
};
PropertiesEdit.parameters = {
	name: 'properties',
	list: PropertyListInput,
};

export const RoutesEdit = RouteEdit.bind({});
RoutesEdit.args = {
	primary: true,
	embeddedMap: true,
};
RoutesEdit.parameters = {
	name: 'routes',
	list: RouteListInput,
};

export const PoisEditGIS = PoiEditWebGis.bind({});
PoisEditGIS.args = {
	primary: true,
	embeddedMap: false,
};
PoisEditGIS.parameters = {
	name: 'pois',
	list: PoiListInput,
	layout: GisLayout,
};

export const PropertiesEditGIS = PropertyEditWebGis.bind({});
PropertiesEditGIS.args = {
	primary: true,
	embeddedMap: false,
};
PropertiesEditGIS.parameters = {
	name: 'properties',
	list: PropertyListInput,
	layout: GisLayout,
};

export const RoutesEditGIS = RouteEditWebGis.bind({});
RoutesEditGIS.args = {
	primary: true,
	embeddedMap: false,
};
RoutesEditGIS.parameters = {
	name: 'routes',
	list: RouteListInput,
	layout: GisLayout,
};
