import { CSSProperties, FC } from 'react';

import { Card, Typography } from '../../atoms';
import { ActionButton } from '../ActionButton';
import { ListItemProps } from './ListItem.types';

export const ListItem: FC<ListItemProps> = ({
  text,
  disabledLeft,
  disabledRight,
  onLeftButtonClick,
  onRightButtonClick,
  style,
  testId = 'list-item'
}) => {
  const baseStyle: CSSProperties = {
    alignItems: 'center',
    display: 'flex',
    height: '107px',
    justifyContent: 'space-between',
    width: '364px',
    ...style
  };

  return (
    <Card variant='item' style={baseStyle} testId={testId}>
      <ActionButton
        variant='move-left'
        disabled={disabledLeft}
        onClick={onLeftButtonClick}
        style={{ marginLeft: '15px' }}
      />

      <Typography variant='body'>{text}</Typography>

      <ActionButton
        variant='move-right'
        disabled={disabledRight}
        onClick={onRightButtonClick}
        style={{ marginRight: '15px' }}
      />
    </Card>
  )
}
