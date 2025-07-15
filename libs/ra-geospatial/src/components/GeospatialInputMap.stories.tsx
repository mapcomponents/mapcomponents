import type { Meta, StoryObj } from 'storybook/internal/types';
import { GeospatialInputMap } from './GeospatialInputMap';

const meta: Meta<typeof GeospatialInputMap> = {
	component: GeospatialInputMap,
	title: 'GeospatialInputMap',
};
export default meta;
type Story = StoryObj<typeof GeospatialInputMap>;

export const Primary = {
	args: {
		MapLibreMapProps: '',
		geometrytype: '',
		embeddedMap: false,
		mapId: '',
	},
};
