import { Meta, Story } from '@storybook/react';

import { ListItem } from './ListItem';
import { ListItemProps } from './ListItem.types';

export default {
  title: 'molecules/ListItem',
  component: ListItem,
} as Meta;

const Template: Story<ListItemProps> = (args) => <ListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Mow The Lawn',
};

export const DisabledLeft = Template.bind({});
DisabledLeft.args = {
  ...Default.args,
  disabledLeft: true
};

export const DisabledRight = Template.bind({});
DisabledRight.args = {
  ...Default.args,
  disabledRight: true
};
