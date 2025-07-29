import type { Meta } from '@storybook/react';
import GeospatialInput from './GeospatialInput';
import { ReactAdminDefaultDecorator } from '../decorators/ReactAdminDefaultDecorator';
import { PoiEdit, PoiEditWebGis } from '../ra_components/Poi';
import { PropertyEdit, PropertyEditWebGis } from '../ra_components/Property';
import { RouteEdit, RouteEditWebGis } from '../ra_components/Route';
import GisLayout from '../layout/GisLayout';

const meta = {
	component: GeospatialInput,
	title: 'MapComponents/GeospatialInput',
	decorators: [ReactAdminDefaultDecorator],
} satisfies Meta<typeof GeospatialInput>;

export default meta;

export const PoisEdit = PoiEdit.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
PoisEdit.args = {
	primary: true,
	embeddedMap: true,
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
PoisEdit.parameters = {
	name: 'pois',
};
export const PropertiesEdit = PropertyEdit.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
PropertiesEdit.args = {
	primary: true,
	embeddedMap: true,
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
PropertiesEdit.parameters = {
	name: 'properties',
};

export const RoutesEdit = RouteEdit.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
RoutesEdit.args = {
	primary: true,
	embeddedMap: true,
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
RoutesEdit.parameters = {
	name: 'routes',
};

export const PoisEditGIS = PoiEditWebGis.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
PoisEditGIS.args = {
	primary: true,
	embeddedMap: false,
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
PoisEditGIS.parameters = {
	name: 'pois',
	layout: GisLayout,
};

export const PropertiesEditGIS = PropertyEditWebGis.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
PropertiesEditGIS.args = {
	primary: true,
	embeddedMap: false,
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
PropertiesEditGIS.parameters = {
	name: 'properties',
	layout: GisLayout,
};

export const RoutesEditGIS = RouteEditWebGis.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
RoutesEditGIS.args = {
	primary: true,
	embeddedMap: false,
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
RoutesEditGIS.parameters = {
	name: 'routes',
	layout: GisLayout,
};
