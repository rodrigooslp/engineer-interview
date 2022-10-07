import { MouseEventHandler, ReactNode } from 'react';
import { GenericProps } from '../../../shared';

export interface ButtonProps extends GenericProps {
  disabled?: boolean;
  children?: ReactNode;
  width: string;
  height: string;
  background: string;
  hasShadow?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
