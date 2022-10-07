import { FC } from 'react';
import { GenericProps } from '../../../../shared';

export const ArrowRight: FC<GenericProps> = ({ style, testId = 'arrow-right-icon' }) => (
  <svg style={style} data-testid={testId} width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31.0651 12.9349C31.6484 12.3467 31.6444 11.397 31.0562 10.8136L21.4704 1.3077C20.8822 0.724367 19.9325 0.728339 19.3491 1.31657C18.7658 1.9048 18.7698 2.85454 19.358 3.43787L27.8787 11.8876L19.429 20.4083C18.8456 20.9965 18.8496 21.9463 19.4378 22.5296C20.0261 23.1129 20.9758 23.1089 21.5591 22.5207L31.0651 12.9349ZM1.00627 13.5L30.0063 13.3787L29.9937 10.3787L0.993727 10.5L1.00627 13.5Z" fill="white"/>
  </svg>
)
