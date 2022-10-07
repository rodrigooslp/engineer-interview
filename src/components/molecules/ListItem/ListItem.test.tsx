import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './ListItem.stories';

const { Default, DisabledLeft, DisabledRight } = composeStories(stories);
describe('ListItem', () => {
  test('renders default list item', () => {
    render(<Default />);
    expect(screen.getByTestId('list-item')).toBeInTheDocument();
  });

  test('renders disabled left list item', () => {
    render(<DisabledLeft />);
    expect(screen.getByTestId('list-item')).toBeInTheDocument();
  });

  test('renders disabled right list item', () => {
    render(<DisabledRight />);
    expect(screen.getByTestId('list-item')).toBeInTheDocument();
  });
})
