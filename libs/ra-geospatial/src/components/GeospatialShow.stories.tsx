import type { Meta } from '@storybook/react';
import GeospatialShow from './GeospatialShow';
import { ReactAdminDefaultDecorator } from '../decorators/ReactAdminDefaultDecorator';
import { PoiShow, PoiShowWebGis } from '../ra_components/Poi';
import { PropertyShow, PropertyShowWebGis } from '../ra_components/Property';
import { RouteShow, RouteShowWebGis } from '../ra_components/Route';
import GisLayout from '../layout/GisLayout';

const meta = {
	component: GeospatialShow,
	title: 'MapComponents/GeospatialShow',
	decorators: [ReactAdminDefaultDecorator],
} satisfies Meta<typeof GeospatialShow>;

export default meta;

export const PoisShow = PoiShow.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
PoisShow.args = {
	primary: true,
	embeddedMap: true,
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
PoisShow.parameters = {
	name: 'pois',
};

export const PropertiesShow = PropertyShow.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
PropertiesShow.args = {
	primary: true,
	embeddedMap: true,
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
PropertiesShow.parameters = {
	name: 'properties',
};

export const RoutesShow = RouteShow.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
RoutesShow.args = {
	primary: true,
	embeddedMap: true,
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
RoutesShow.parameters = {
	name: 'routes',
};

export const PoisShowGIS = PoiShowWebGis.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
PoisShowGIS.args = {
	primary: true,
	embeddedMap: false,
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
PoisShowGIS.parameters = {
	name: 'pois',
	layout: GisLayout,
};

export const PropertiesShowGIS = PropertyShowWebGis.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
PropertiesShowGIS.args = {
	primary: true,
	embeddedMap: false,
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
PropertiesShowGIS.parameters = {
	name: 'properties',
	layout: GisLayout,
};

export const RoutesShowGIS = RouteShowWebGis.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
RoutesShowGIS.args = {
	primary: true,
	embeddedMap: false,
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
RoutesShowGIS.parameters = {
	name: 'routes',
	layout: GisLayout,
};
