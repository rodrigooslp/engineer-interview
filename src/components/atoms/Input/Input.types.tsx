import { ChangeEventHandler } from 'react';
import { GenericProps } from '../../../shared';

export interface InputProps extends GenericProps {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>,
  placeholder?: string;
};
