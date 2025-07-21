import type { Meta, StoryObj } from '@storybook/react';

import GeospatialInput from './GeospatialInput';


const meta: Meta = {
	component: GeospatialInput,
	title: 'MapComponents/GeospatialInput',
} satisfies Meta<typeof GeospatialInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		primary: true,
		label: 'Geospatial Input',
		embeddedMap: true,
	},
};


