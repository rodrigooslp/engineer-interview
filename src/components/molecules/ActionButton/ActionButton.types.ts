import { MouseEventHandler } from 'react';
import { GenericProps } from '../../../shared';

export type ActionButtonVariant = 'add' | 'move-left' | 'move-right';

export interface ActionButtonProps extends GenericProps {
  variant: ActionButtonVariant;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
