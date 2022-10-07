import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './BottomPanel.stories';

const { Default } = composeStories(stories);
describe('BottomPanel', () => {
  test('renders default bottom panel', () => {
    render(<Default />);
    expect(screen.getByTestId('bottom-panel')).toBeInTheDocument();
  });
})
