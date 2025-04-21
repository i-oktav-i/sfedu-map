import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { Flex, IconButton } from '@radix-ui/themes';
import { FC } from 'react';

export type FloorsPaginationProps = {
  /**
   * Количество этажей.
   */
  floorsCount: number;
  /**
   * Индекс текущего этажа.
   */
  currentFloorIndex: number;
  /**
   * Обработчик клика по кнопке переключения этажа.
   */
  onFloorChange: (index: number) => void;
};

export const FloorsPagination: FC<FloorsPaginationProps> = ({
  floorsCount,
  currentFloorIndex,
  onFloorChange,
}) => {
  const isFirstFloor = currentFloorIndex === 0;
  const isLastFloor = currentFloorIndex === floorsCount - 1;

  const handleUpClick = () => {
    if (isLastFloor) return;

    onFloorChange(currentFloorIndex + 1);
  };

  const handleDownClick = () => {
    if (isFirstFloor) return;

    onFloorChange(currentFloorIndex - 1);
  };

  return (
    <Flex direction="column" gap="2" justify="center" align="center">
      <IconButton size="4" color="blue" disabled={isLastFloor} onClick={handleUpClick}>
        <ChevronUpIcon width="20px" height="20px" />
      </IconButton>

      <IconButton size="4" color="blue" disabled={isFirstFloor} onClick={handleDownClick}>
        <ChevronDownIcon width="20px" height="20px" />
      </IconButton>
    </Flex>
  );
};
