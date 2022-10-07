import { FC } from 'react';

import { ListContainer, ListItem } from '../../molecules';
import { ListProps } from './List.types';

export const List: FC<ListProps> = ({
  title,
  elements,
  disabledLeft,
  disabledRight,
  onLeftButtonClick,
  onRightButtonClick,
  style,
  testId = 'list'
}) => {
  return (
    <ListContainer title={title} style={style} testId={testId}>
      {elements.map((element) => (
        <ListItem
          style={{ marginBottom: '16px' }}
          key={element.id}
          text={element.text}
          disabledLeft={disabledLeft}
          disabledRight={disabledRight}
          onLeftButtonClick={() => onLeftButtonClick ? onLeftButtonClick(element, title) : undefined}
          onRightButtonClick={() => onRightButtonClick ? onRightButtonClick(element, title) : undefined}
        />
      ))}
    </ListContainer>
  )
}
