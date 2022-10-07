import { ReactNode } from 'react';
import { GenericProps } from '../../../shared';

export type TypographyVariant = 'title' | 'body';

export interface TypographyProps extends GenericProps {
  variant: TypographyVariant;
  children: ReactNode;
};
