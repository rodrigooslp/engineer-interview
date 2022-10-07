import { GenericProps } from '../../../shared';

export type ListElement = {
  id: number;
  text: string;
}

export interface ListProps extends GenericProps {
  title: string;
  elements: ListElement[];
  disabledLeft?: boolean;
  disabledRight?: boolean;
  onLeftButtonClick?: (element: ListElement, title: string) => void;
  onRightButtonClick?: (element: ListElement, title: string) => void;
};
