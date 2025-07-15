import type { Meta, StoryObj } from 'storybook/internal/types';
import { GeospatialShowMap } from './GeospatialShowMap';

const meta: Meta<typeof GeospatialShowMap> = {
	component: GeospatialShowMap,
	title: 'GeospatialShowMap',
};
export default meta;
type Story = StoryObj<typeof GeospatialShowMap>;

export const Primary = {
	args: {
		MapLibreMapProps: '',
		embeddedMap: false,
		mapId: '',
	},
};
