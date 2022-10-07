import { ChangeEventHandler, MouseEventHandler } from 'react';
import { GenericProps } from '../../../shared';

export interface BottomPanelProps extends GenericProps {
  value?: string;
  onInputChange?: ChangeEventHandler<HTMLInputElement>,
  onButtonClick?: MouseEventHandler<HTMLButtonElement>;
};
