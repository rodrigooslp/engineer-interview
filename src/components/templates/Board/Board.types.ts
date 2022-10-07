import { ChangeEventHandler, MouseEventHandler } from 'react';
import { ListElement } from '../../organisms';
import { GenericProps } from '../../../shared';

export interface BoardProps extends GenericProps {
  toDoElements: ListElement[];
  inProgressElements: ListElement[];
  doneElements: ListElement[];
  inputValue?: string;
  onInputChange?: ChangeEventHandler<HTMLInputElement>,
  onAddButtonClick?: MouseEventHandler<HTMLButtonElement>;
  onLeftButtonClick: (element: ListElement, title: string) => void;
  onRightButtonClick: (element: ListElement, title: string) => void;
};
