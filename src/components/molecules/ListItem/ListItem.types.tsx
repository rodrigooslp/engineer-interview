import { MouseEventHandler } from 'react';
import { GenericProps } from '../../../shared';

export interface ListItemProps extends GenericProps {
  text?: string;
  disabledLeft?: boolean;
  disabledRight?: boolean;
  onLeftButtonClick?: MouseEventHandler<HTMLButtonElement>;
  onRightButtonClick?: MouseEventHandler<HTMLButtonElement>;
};
