import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './Board.stories';

const { Default } = composeStories(stories);
describe('Board', () => {
  test('renders default board', () => {
    render(<Default />);
    expect(screen.getByTestId('board')).toBeInTheDocument();
  });
})
