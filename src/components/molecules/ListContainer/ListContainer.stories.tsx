import { Meta, Story } from '@storybook/react';

import { ListContainer } from './ListContainer';
import { ListContainerProps } from './ListContainer.types';

export default {
  title: 'molecules/ListContainer',
  component: ListContainer,
} as Meta;

const Template: Story<ListContainerProps> = (args) => <ListContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'To Do'
}
