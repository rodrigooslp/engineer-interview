import { CSSProperties, FC } from 'react';

import { TypographyProps } from './Typography.types';

export const Typography: FC<TypographyProps> = ({ variant, children, style, testId = 'typography' }) => {

  const renderTypography = () => {

    // Style shared by all typography variants
    const baseStyle: CSSProperties = {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 400,
      textAlign: 'center',
      color: '#000',
      margin: 0
    };

    // Style specific for the title typography
    const titleStyle: CSSProperties = {
      ...baseStyle,
      fontSize: '32px',
      lineHeight: '38px',
      ...style
    };

    // Style specific for the body typography
    const bodyStyle: CSSProperties = {
      ...baseStyle,
      fontSize: '22px',
      lineHeight: '26px',
      ...style
    };

    switch(variant) {
      // title rendered in an h2
      case 'title': return <h2 data-testid={testId} style={titleStyle}>{children}</h2>;

      // body rendered in a p
      case 'body': return <p data-testid={testId} style={bodyStyle}>{children}</p>;
    }
  };

  return <>{renderTypography()}</>
}
