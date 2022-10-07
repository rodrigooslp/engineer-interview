import { useState } from 'react';
import { Board, ListElement } from './components';

export function ChallengeComponent() {
  const [inputValue, setInputValue] = useState<string>('');
  const [toDoElements, setToDoElements] = useState<ListElement[]>([]);
  const [inProgressElements, setInProgressElements] = useState<ListElement[]>([]);
  const [doneElements, setDoneElements] = useState<ListElement[]>([]);

  const removeItem = (list: ListElement[], element: ListElement) => {
    const filteredList = list.filter(({ id }) => element.id !== id);
    return [...filteredList];
  }

  const handleAddButtonClick = () => {
    if (!inputValue) return;
    setToDoElements([...toDoElements, { id: new Date().valueOf(), text: inputValue }])
    setInputValue('');
  };

  const handleLeftButtonClick = (element: ListElement, title: string) => {
    if (title === 'In Progress') {
      setToDoElements([...toDoElements, element]);
      setInProgressElements(removeItem(inProgressElements, element));
      return;
    }

    if (title === 'Done') {
      setInProgressElements([...inProgressElements, element]);
      setDoneElements(removeItem(doneElements, element));
      return;
    }
  };

  const handleRightButtonClick = (element: ListElement, title: string) => {
    if (title === 'To Do') {
      setInProgressElements([...inProgressElements, element]);
      setToDoElements(removeItem(toDoElements, element));
      return;
    }

    if (title === 'In Progress') {
      setDoneElements([...doneElements, element]);
      setInProgressElements(removeItem(inProgressElements, element));
      return;
    }
  };

  return (
    <Board
      toDoElements={toDoElements}
      inProgressElements={inProgressElements}
      doneElements={doneElements}
      inputValue={inputValue}
      onInputChange={e => setInputValue(e.target.value)}
      onAddButtonClick={handleAddButtonClick}
      onLeftButtonClick={handleLeftButtonClick}
      onRightButtonClick={handleRightButtonClick}
    />
  )
}
