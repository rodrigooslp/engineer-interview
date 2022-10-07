import { GenericProps } from '../../../shared';

export type IconName = 'arrow-left' | 'arrow-right' | 'plus';

export interface IconProps extends GenericProps {
  name: IconName;
}
