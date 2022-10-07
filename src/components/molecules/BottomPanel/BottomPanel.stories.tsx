import { Meta, Story } from '@storybook/react';

import { BottomPanel } from './BottomPanel';
import { BottomPanelProps } from './BottomPanel.types';

export default {
  title: 'molecules/BottomPanel',
  component: BottomPanel,
} as Meta;

const Template: Story<BottomPanelProps> = (args) => <BottomPanel {...args} />;

export const Default = Template.bind({});
