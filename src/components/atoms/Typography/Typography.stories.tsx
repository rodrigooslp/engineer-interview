import { Meta, Story } from '@storybook/react';

import { Typography } from './Typography';
import { TypographyProps } from './Typography.types';

export default {
  title: 'atoms/Typography',
  component: Typography,
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Title = Template.bind({});
Title.args = {
  children: 'The quick brown fox jumps over the lazy dog',
  variant: 'title'
};

export const Body = Template.bind({});
Body.args = {
  ...Title.args,
  variant: 'body'
};
