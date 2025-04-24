import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { Flex, IconButton } from '@radix-ui/themes';
import { FloorsPlanProps } from '@shared/contracts';
import { FC } from 'react';

export type FloorsPaginationProps = Pick<FloorsPlanProps, 'nextButtonProps' | 'prevButtonProps'>;

export const FloorsPagination: FC<FloorsPaginationProps> = ({
  nextButtonProps,
  prevButtonProps,
}) => {
  return (
    <Flex direction="column" gap="2" justify="center" align="center">
      <IconButton
        size="4"
        color="blue"
        disabled={!nextButtonProps.onClick}
        onClick={nextButtonProps.onClick}
        aria-label={nextButtonProps.text}
      >
        <ChevronUpIcon aria-hidden width="20px" height="20px" />
      </IconButton>

      <IconButton
        size="4"
        color="blue"
        disabled={!prevButtonProps.onClick}
        onClick={prevButtonProps.onClick}
        aria-label={prevButtonProps.text}
      >
        <ChevronDownIcon aria-hidden width="20px" height="20px" />
      </IconButton>
    </Flex>
  );
};
