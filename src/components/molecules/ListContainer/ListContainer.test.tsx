import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './ListContainer.stories';

const { Default } = composeStories(stories);
describe('ListContainer', () => {
  test('renders default list container', () => {
    render(<Default />);
    expect(screen.getByTestId('typography')).toBeInTheDocument();
  });
})
