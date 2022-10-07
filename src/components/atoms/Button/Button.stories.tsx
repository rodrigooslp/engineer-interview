import { Meta, Story } from '@storybook/react';

import { Button } from './Button';
import { ButtonProps } from './Button.types';

export default {
  title: 'atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '100px',
  height: '100px',
  background: '#d2d2d2'
};
