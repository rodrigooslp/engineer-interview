import { FC } from 'react';

import { Card, Typography } from '../../atoms';
import { ListContainerProps } from './ListContainer.types';

export const ListContainer: FC<ListContainerProps> = ({ title, children, style, testId = 'list-container' }) => (
  <Card testId={testId} variant='list' style={{ minHeight: '509px', width: '410px', padding: '16px 23px', ...style}}>
    <Typography variant='title' style={{ marginBottom: '44px' }}>{title}</Typography>
    {children}
  </Card>
)
