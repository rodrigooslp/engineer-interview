import { FC } from 'react';
import { GenericProps } from '../../../../shared';

export const Plus: FC<GenericProps> = ({ style, testId = 'plus-icon' }) => (
  <svg style={style} data-testid={testId} width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.7773 8.27148H17.9141V11.3477H10.7773V19.4336H7.50781V11.3477H0.371094V8.27148H7.50781V0.800781H10.7773V8.27148Z" fill="white"/>
  </svg>
)
