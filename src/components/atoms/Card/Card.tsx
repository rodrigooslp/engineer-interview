import { CSSProperties, FC } from 'react';

import { CardProps } from './Card.types';

export const Card: FC<CardProps> = ({ variant, style, testId = 'card', ...props }) => {

  const getStyle = (): CSSProperties => {

    // Style shared by all card variants
    const baseStyle: CSSProperties = {
      background: '#fff',
      borderRadius: '12px',
      height: '100%',
      width: '100%',
      boxSizing: 'border-box'
    };

    // Style specific for the item card
    const itemStyle: CSSProperties = {
      ...baseStyle,
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    };

    // Style specific for the list card
    const listStyle: CSSProperties = {
      ...baseStyle,
      boxShadow: '0px 2px 4px 4px rgba(0, 0, 0, 0.25)',
    };

    // Style specific for the container card
    const containerStyle: CSSProperties = {
      ...baseStyle,
      background: '#fcfcfc',
      borderRadius: '40px',
      border: '1px solid #000',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      padding: '45px'
    };

    switch(variant) {
      // The style prop is usually empty, but they can be
      // set by the parent and it takes the highest priority
      case 'item': return { ...itemStyle, ...style };
      case 'list': return { ...listStyle, ...style };
      case 'container': return { ...containerStyle, ...style };
    }
  };

  return <div data-testid={testId} style={getStyle()} {...props} />;
}
