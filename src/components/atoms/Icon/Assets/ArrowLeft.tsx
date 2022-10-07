import { FC } from 'react';
import { GenericProps } from '../../../../shared';

export const ArrowLeft: FC<GenericProps> = ({ style, testId = 'arrow-left-icon' }) => (
  <svg style={style} data-testid={testId} width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.934917 13.0562C0.351585 12.468 0.355556 11.5182 0.943788 10.9349L10.5296 1.42898C11.1178 0.845644 12.0675 0.849616 12.6509 1.43785C13.2342 2.02608 13.2302 2.97582 12.642 3.55915L4.1213 12.0089L12.571 20.5296C13.1544 21.1178 13.1504 22.0675 12.5622 22.6509C11.9739 23.2342 11.0242 23.2302 10.4409 22.642L0.934917 13.0562ZM30.9937 13.6213L1.99373 13.5L2.00628 10.5L31.0063 10.6213L30.9937 13.6213Z" fill="white"/>
  </svg>
)