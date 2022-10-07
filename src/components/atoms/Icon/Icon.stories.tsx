import { Meta, Story } from '@storybook/react';

import { Icon } from './Icon';
import { IconProps } from './Icon.types';

export default {
  title: 'atoms/Icon',
  component: Icon,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{
        name: 'dark',
        value: '#333333',
      }]
    },
  }
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const ArrowLeft = Template.bind({});
ArrowLeft.args = {
  name: 'arrow-left'
};

export const ArrowRight = Template.bind({});
ArrowRight.args = {
  name: 'arrow-right'
};

export const Plus = Template.bind({});
Plus.args = {
  name: 'plus'
};
