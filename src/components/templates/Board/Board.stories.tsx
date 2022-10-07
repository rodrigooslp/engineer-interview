import { Meta, Story } from '@storybook/react';

import { Board } from './Board';
import { BoardProps } from './Board.types';

export default {
  title: 'templates/Board',
  component: Board,
} as Meta;

const Template: Story<BoardProps> = (args) => <Board {...args} />;

export const Default = Template.bind({});
Default.args = {
  toDoElements: [{ id: 1, text: 'Mow The Lawn' }],
  inProgressElements: [{ id: 2, text: 'Pull Weeds' }],
  doneElements: [{ id: 3, text: 'Rake The Leaves' }]
};
