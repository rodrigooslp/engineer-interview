import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './Input.stories';

const { Default } = composeStories(stories);
describe('Input', () => {
  test('renders default input', () => {
    render(<Default />);
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });
})
