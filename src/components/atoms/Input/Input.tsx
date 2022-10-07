import { CSSProperties, FC } from 'react';

import { InputProps } from './Input.types';

export const Input: FC<InputProps> = ({ style, testId = 'input', ...props }) => {
  const baseStyles: CSSProperties = {
    background: '#fff',
    border: '1px solid #000000',
    boxSizing: 'border-box',
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '22px',
    fontStyle: 'normal',
    fontWeight: 400,
    height: '60px',
    lineHeight: '26px',
    paddingLeft: '35px',
    width: '287px',
    ...style
  };

  return <input data-testid={testId} style={baseStyles} {...props} />
};
