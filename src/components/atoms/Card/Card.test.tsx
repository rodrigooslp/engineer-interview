import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './Card.stories';

const { Container, Item, List } = composeStories(stories);
describe('Card', () => {
  test('renders container card', () => {
    render(<Container />);
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  test('renders item card', () => {
    render(<Item />);
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  test('renders list card', () => {
    render(<List />);
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });
})
