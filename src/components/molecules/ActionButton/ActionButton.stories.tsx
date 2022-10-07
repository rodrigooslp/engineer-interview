import { Meta, Story } from '@storybook/react';

import { ActionButton } from './ActionButton';
import { ActionButtonProps } from './ActionButton.types';

export default {
  title: 'molecules/ActionButton',
  component: ActionButton,
} as Meta;

const Template: Story<ActionButtonProps> = (args) => <ActionButton {...args} />;

export const Add = Template.bind({});
Add.args = {
  variant: 'add'
};

export const MoveLeft = Template.bind({});
MoveLeft.args = {
  variant: 'move-left'
};

export const MoveLeftDisabled = Template.bind({});
MoveLeftDisabled.storyName = 'Move Left / Disabled';
MoveLeftDisabled.args = {
  ...MoveLeft.args,
  disabled: true
};

export const MoveRight = Template.bind({});
MoveRight.args = {
  variant: 'move-right'
};

export const MoveRightDisabled = Template.bind({});
MoveRightDisabled.storyName = 'Move Right / Disabled';
MoveRightDisabled.args = {
  ...MoveRight.args,
  disabled: true
};
