import type { Meta, StoryObj } from '@storybook/react';
import GeospatialShow from './GeospatialShow';
import { Admin } from 'react-admin';
import gisLayout from '../management/GisLayout';
import localStorageDataProvider from '../management/lsDataProvider';
import { Box } from '@mui/material';

const dataProvider = localStorageDataProvider({
	localStorageUpdateDelay: 2,
	defaultData: {
		pois: [{ id: 0, title: 'poi', geom: '' }],
		properties: [{ id: 0, title: 'property', geom: '' }],
		routes: [{ id: 0, title: 'route', geom: '' }],
	},
});

const meta: Meta = {
	component: GeospatialShow,
	title: 'MapComponents/GeospatialShow',
	decorators: [],
} satisfies Meta<typeof GeospatialShow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		primary: true,
		label: 'Geospatial Input',
		embeddedMap: true,
	},
};

