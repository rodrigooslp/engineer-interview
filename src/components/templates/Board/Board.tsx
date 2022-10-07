import { FC } from 'react';

import { Card } from '../../atoms';
import { BottomPanel } from '../../molecules';
import { List } from '../../organisms';
import { BoardProps } from './Board.types';

export const Board: FC<BoardProps> = ({
  toDoElements,
  inProgressElements,
  doneElements,
  inputValue,
  onInputChange,
  onAddButtonClick,
  onLeftButtonClick,
  onRightButtonClick,
  style,
  testId = 'board'
}) => {
  return (
    <Card testId={testId} variant='container' style={{ minHeight: '698px', width: '1399px', ...style }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <List
          title='To Do'
          elements={toDoElements}
          disabledLeft
          onRightButtonClick={onRightButtonClick}
        />

        <List
          title='In Progress'
          elements={inProgressElements}
          onLeftButtonClick={onLeftButtonClick}
          onRightButtonClick={onRightButtonClick}
        />

        <List
          title='Done'
          elements={doneElements}
          disabledRight
          onLeftButtonClick={onLeftButtonClick}
        />
      </div>

      <BottomPanel
        style={{ marginTop: '33px' }}
        value={inputValue}
        onInputChange={onInputChange}
        onButtonClick={onAddButtonClick}
      />
    </Card>
  )
}
