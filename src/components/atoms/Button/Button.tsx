import { CSSProperties, FC } from 'react';

import { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = ({
  hasShadow,
  width,
  height,
  background,
  style,
  disabled,
  testId = 'button',
  ...props
}) => {
  const baseStyle: CSSProperties  = {
    background,
    border: 0,
    borderRadius: '8px',
    boxShadow: hasShadow ? '0px 2px 4px rgba(0, 0, 0, 0.25)' : undefined,
    cursor: disabled ? undefined : 'pointer',
    height,
    width,
    ...style
  };

  return <button data-testid={testId} style={baseStyle} disabled={disabled} {...props}/>
}
