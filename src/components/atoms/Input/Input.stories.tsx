import { Meta, Story } from '@storybook/react';

import { Input } from './Input';
import { InputProps } from './Input.types';

export default {
  title: 'atoms/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Add Task'
};
