import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './Button.stories';

const { Default } = composeStories(stories);
describe('Button', () => {
  test('renders default button', () => {
    render(<Default />);
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });
})
