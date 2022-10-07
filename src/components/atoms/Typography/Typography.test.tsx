import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './Typography.stories';

const { Body, Title } = composeStories(stories);
describe('Typography', () => {
  test('renders body typography', () => {
    render(<Body />);
    expect(screen.getByTestId('typography')).toBeInTheDocument();
  });

  test('renders title typography', () => {
    render(<Title />);
    expect(screen.getByTestId('typography')).toBeInTheDocument();
  });
})
