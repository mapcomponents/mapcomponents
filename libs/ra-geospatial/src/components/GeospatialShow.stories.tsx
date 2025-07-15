import type { Meta, StoryObj } from 'storybook/internal/types';
import { GeospatialShow } from './GeospatialShow';

const meta: Meta<typeof GeospatialShow> = {
	component: GeospatialShow,
	title: 'GeospatialShow',
};
export default meta;
type Story = StoryObj<typeof GeospatialShow>;

export const Primary = {
	args: {},
};
