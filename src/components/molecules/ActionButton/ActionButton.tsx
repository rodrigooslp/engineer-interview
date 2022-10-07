import { FC } from 'react';
import { Button, ButtonProps, Icon } from '../../atoms';

import { ActionButtonProps } from './ActionButton.types';

export const ActionButton: FC<ActionButtonProps> = ({ disabled, variant, onClick, style, testId = 'action-button' }) => {

  const getButtonProps = (): ButtonProps => {

    // Properties shared by all variants of the action button
    const baseProps = { disabled, onClick, style };

    // Properties of the add action button
    const addProps: ButtonProps = {
      ...baseProps,
      background: '#0066ff',
      height: '60px',
      width: '91px',
      children: <Icon name='plus' />
    };

    // Properties of the move left action button
    const moveLeftProps: ButtonProps = {
      ...baseProps,
      background: disabled ? '#ff9e9e' : '#c20b0b',
      height: '70px',
      width: '52px',
      children: <Icon name='arrow-left' />
    };

    // Properties of the move right action button
    const moveRightProps: ButtonProps = {
      ...moveLeftProps,
      background: disabled ? '#218d1f52' : '#218d1f',
      children: <Icon name='arrow-right' />
    };

    switch (variant) {
      case 'add': return addProps;
      case 'move-left': return moveLeftProps;
      case 'move-right': return moveRightProps;
    }
  };

  return <Button testId={testId} {...getButtonProps()}></Button>
}
