import { FC } from 'react';
import { Input } from '../../atoms';
import { ActionButton } from '../ActionButton';

import { BottomPanelProps } from './BottomPanel.types';

export const BottomPanel: FC<BottomPanelProps> = ({ value, onInputChange, onButtonClick, style, testId = 'bottom-panel' }) => (
  <div data-testid={testId} style={{ display: 'flex', ...style }}>
    <Input value={value} onChange={onInputChange} style={{ marginRight: '32px' }} />
    <ActionButton variant='add' onClick={onButtonClick} />
  </div>
)
