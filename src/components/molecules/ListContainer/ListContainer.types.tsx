import { ReactNode } from 'react';
import { GenericProps } from '../../../shared';

export interface ListContainerProps extends GenericProps {
  title?: string;
  children?: ReactNode;
};
