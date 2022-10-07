import { Meta, Story } from '@storybook/react';

import { List } from './List';
import { ListProps } from './List.types';

export default {
  title: 'organisms/List',
  component: List,
} as Meta;

const Template: Story<ListProps> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'To Do',
  elements: [
    { id: 1, text: 'Pull Weeds' },
    { id: 2, text: 'Mow The Lawn' },
    { id: 3, text: 'Rake the Leaves' },
  ]
};
