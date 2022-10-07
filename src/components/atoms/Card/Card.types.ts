import { ReactNode } from 'react';
import { GenericProps } from '../../../shared';

export type CardVariant = 'item' | 'list' | 'container';

export interface CardProps extends GenericProps {
  children?: ReactNode;
  variant: CardVariant;
};
