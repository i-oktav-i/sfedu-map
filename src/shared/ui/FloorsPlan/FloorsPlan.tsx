import { Text } from '@radix-ui/themes';
import { FloorsPlanProps } from '@shared/contracts';
import { FC, Ref } from 'react';

import { FloorsPagination } from './FloorsPagination';
import { FloorPlanContainer, FloorsPlansContainer, LoadingText, Title } from './tokens';

export const FloorsPlan: FC<FloorsPlanProps> = ({
  html,
  isLoading,
  loadingText,
  missingFloorText,
  nextButtonProps,
  prevButtonProps,
  ref,
  title,
}) => {
  if (isLoading) {
    return (
      <FloorsPlansContainer>
        <LoadingText>{loadingText}</LoadingText>
      </FloorsPlansContainer>
    );
  }

  return (
    <FloorsPlansContainer>
      <Title>{title}</Title>

      <FloorsPagination nextButtonProps={nextButtonProps} prevButtonProps={prevButtonProps} />

      {html ? (
        <FloorPlanContainer
          ref={ref as Ref<HTMLDivElement>}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <FloorPlanContainer>
          <Text as="p">{missingFloorText}</Text>
        </FloorPlanContainer>
      )}
    </FloorsPlansContainer>
  );
};
