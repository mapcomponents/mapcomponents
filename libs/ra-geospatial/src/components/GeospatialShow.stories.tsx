import type { Meta, StoryObj } from '@storybook/react';
import GeospatialShow from './GeospatialShow';
import { PrimaryDecorator } from '../decorators/PrimaryDecorator';

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
		embeddedMap: false,
	},
	decorators: [PrimaryDecorator],
};
