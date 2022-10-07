import { Meta, Story } from '@storybook/react';

import { Card } from './Card';
import { CardProps } from './Card.types';

export default {
  title: 'atoms/Card',
  component: Card,
  decorators: [(Story, args) => (
    <div style={{ width: '200px', height: '200px' }}>
      <Story {...args} />
    </div>
  )]
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Item = Template.bind({});
Item.args = {
  variant: 'item'
};

export const List = Template.bind({});
List.args = {
  variant: 'list'
};

export const Container = Template.bind({});
Container.args = {
  variant: 'container'
};
