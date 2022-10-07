import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './ActionButton.stories';

const { Add, MoveLeft, MoveLeftDisabled, MoveRight, MoveRightDisabled } = composeStories(stories);
describe('ActionButton', () => {
  test('renders add action button', () => {
    render(<Add />);
    expect(screen.getByTestId('action-button')).toBeInTheDocument();
  });

  test('renders move left action button', () => {
    render(<MoveLeft />);
    expect(screen.getByTestId('action-button')).toBeInTheDocument();
  });

  test('renders move left disabled action button', () => {
    render(<MoveLeftDisabled />);
    expect(screen.getByTestId('action-button')).toBeInTheDocument();
  });

  test('renders move right action button', () => {
    render(<MoveRight />);
    expect(screen.getByTestId('action-button')).toBeInTheDocument();
  });

  test('renders move right disabled action button', () => {
    render(<MoveRightDisabled />);
    expect(screen.getByTestId('action-button')).toBeInTheDocument();
  });
})
