import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './Icon.stories';

const { ArrowLeft, ArrowRight, Plus } = composeStories(stories);
describe('Icon', () => {
  test('renders arrow left icon', () => {
    render(<ArrowLeft />);
    expect(screen.getByTestId('arrow-left-icon')).toBeInTheDocument();
  });

  test('renders arrow right icon', () => {
    render(<ArrowRight />);
    expect(screen.getByTestId('arrow-right-icon')).toBeInTheDocument();
  });

  test('renders plus icon', () => {
    render(<Plus />);
    expect(screen.getByTestId('plus-icon')).toBeInTheDocument();
  });
})
