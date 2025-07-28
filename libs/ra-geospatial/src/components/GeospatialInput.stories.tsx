import type { Meta, StoryObj } from '@storybook/react';
import GeospatialInput from './GeospatialInput';
import { MapComponentsProvider, MapLibreMap } from '@mapcomponents/react-maplibre';
import { Admin, CustomRoutes, defaultLightTheme, Resource } from 'react-admin';
import { PoiEdit, PoiEditWebGis, PoiListInput } from '../management/Poi';
import DataContextProvider from '../management/DataContext';
import DataLayers from '../management/DataLayers';
import { dataProvider } from '../management/dataProvider';
import { PropertyEdit, PropertyEditWebGis, PropertyListInput } from '../management/Property';
import { RouteEdit, RouteEditWebGis, RouteListInput } from '../management/Route';
import GisLayout from '../management/GisLayout';
import { Route } from 'react-router-dom';

const storyoptions: Meta = {
	component: GeospatialInput,
	title: 'MapComponents/GeospatialInput',
	decorators: [(Story, context) => (
		<DataContextProvider>
			<MapComponentsProvider>
				<Admin dataProvider={dataProvider} layout={context.parameters?.layout} theme={defaultLightTheme}>
					<CustomRoutes>
						<Route path={'/'} element={<Story/>}/>
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
	)],
} satisfies Meta<typeof GeospatialInput>;


export default storyoptions;

type Story = StoryObj<typeof storyoptions>;

export const PoiEditStory = PoiEdit.bind({});
PoiEditStory.args = {
	primary: true,
	embeddedMap: true,
};
PoiEditStory.parameters = {
	name: 'pois',
	list: PoiListInput,
}

export const PropertyEditStory = PropertyEdit.bind({});
PropertyEditStory.args = {
	primary: true,
	embeddedMap: true,
};
PropertyEditStory.parameters = {
	name: 'properties',
	list: PropertyListInput,
}

export const RouteEditStory = RouteEdit.bind({});
RouteEditStory.args = {
	primary: true,
	embeddedMap: true,
};
RouteEditStory.parameters = {
	name: 'routes',
	list: RouteListInput,
};

export const PoiEditStoryWebGis = PoiEditWebGis.bind({});
PoiEditStoryWebGis.args = {
	primary: true,
	embeddedMap: false,
};
PoiEditStoryWebGis.parameters = {
	name: 'pois',
	list: PoiListInput,
	layout: GisLayout,
}

export const PropertyEditStoryWebGis = PropertyEditWebGis.bind({});
PropertyEditStoryWebGis.args = {
	primary: true,
	embeddedMap: false,
};
PropertyEditStoryWebGis.parameters = {
	name: 'properties',
	list: PropertyListInput,
	layout: GisLayout,
}

export const RouteEditStoryWebGis = RouteEditWebGis.bind({});
RouteEditStoryWebGis.args = {
	primary: true,
	embeddedMap: false,
};
RouteEditStoryWebGis.parameters = {
	name: 'routes',
	list: RouteListInput,
	layout: GisLayout,
}
