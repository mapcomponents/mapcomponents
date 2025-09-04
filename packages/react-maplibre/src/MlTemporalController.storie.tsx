// Import statements refactored for @storybook/react-vite
import { Meta, Story } from '@storybook/react-vite';

// Your component imports
import MlTemporalController from './MlTemporalController';

const meta: Meta<typeof MlTemporalController> = {
  title: 'Components/MlTemporalController',
  component: MlTemporalController,
};

export default meta;

const Template: Story<typeof MlTemporalController> = (args) => <MlTemporalController {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add your default args here
};
