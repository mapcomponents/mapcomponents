import type { Meta, StoryObj } from 'storybook/internal/types';
import { GeospatialInput } from './GeospatialInput';

const meta: Meta<typeof GeospatialInput> = {
	component: GeospatialInput,
	title: 'GeospatialInput',
};
export default meta;
type Story = StoryObj<typeof GeospatialInput>;

export const Primary = {
	args: {},
};
