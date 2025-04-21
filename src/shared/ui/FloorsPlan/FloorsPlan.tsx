import { Text } from '@radix-ui/themes';
import { FloorsPlanProps } from '@shared/contracts';
import { FC, Suspense, use, useState } from 'react';

import { FloorPlan } from './FloorPlan';
import { FloorsPagination } from './FloorsPagination';
import { FloorsPlansContainer } from './tokens';

const FloorsPlanWithoutSuspense: FC<FloorsPlanProps> = ({
  plansHtmlPromise,
  onInteractiveElementClick,
  classroomAriaLabelPrefix,
  missingFloorText,
}) => {
  const [currentFloorIndex, setCurrentFloorIndex] = useState(0);

  const plansHtml = use(plansHtmlPromise);

  if (!plansHtml) return null;

  const floorHtml = plansHtml[currentFloorIndex];

  return (
    <FloorsPlansContainer>
      <FloorsPagination
        floorsCount={plansHtml.length}
        currentFloorIndex={currentFloorIndex}
        onFloorChange={setCurrentFloorIndex}
      />

      {floorHtml ? (
        <FloorPlan
          html={floorHtml}
          onInteractiveElementClick={onInteractiveElementClick}
          classroomAriaLabelPrefix={classroomAriaLabelPrefix}
        />
      ) : (
        <Text>{missingFloorText}</Text>
      )}
    </FloorsPlansContainer>
  );
};

export const FloorsPlan: FC<FloorsPlanProps> = (props) => {
  return (
    <Suspense
      fallback={
        <FloorsPlansContainer>
          <Text>{props.loadingText}</Text>
        </FloorsPlansContainer>
      }
    >
      <FloorsPlanWithoutSuspense {...props} />
    </Suspense>
  );
};
