import { FC } from 'react';

import { ArrowLeft, ArrowRight, Plus } from './Assets';
import { IconProps } from './Icon.types';

export const Icon: FC<IconProps> = ({ name, style }) => {
  // This function could later be optimized to use some kind of
  // fetch mechanism like react-inlinesvg to load the svg files from a CDN.
  const renderIcon = () => {
    switch(name) {
      case 'arrow-left': return <ArrowLeft style={style} />;
      case 'arrow-right': return <ArrowRight style={style} />;
      case 'plus': return <Plus style={style} />;
    }
  };

  return <>{renderIcon()}</>
}
