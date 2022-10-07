import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './List.stories';

const { Default } = composeStories(stories);
describe('List', () => {
  test('renders default list', () => {
    render(<Default />);
    expect(screen.getByTestId('list')).toBeInTheDocument();
  });
})
