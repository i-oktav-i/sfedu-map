import { FC, useEffect, useState } from 'react';

import { fetchFloors } from '@entities/floor';
import { FloorsPlanProps } from '@shared/contracts';
import { useLocale } from '@shared/locale';
import { PoiId } from '@shared/types';

export type FloorsPlanDataProviderProps = {
  poiId: PoiId;
  onInteractiveElementClick: (id: string) => void;
  Layout: FC<FloorsPlanProps>;
};

export const FloorsPlanDataProvider: FC<FloorsPlanDataProviderProps> = ({
  Layout,
  poiId,
  onInteractiveElementClick,
}) => {
  const [plansHtmlPromise, setPlansHtmlPromise] = useState<ReturnType<typeof fetchFloors> | null>(
    null,
  );

  const { interpolate } = useLocale();

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    console.log('HERE');
    setPlansHtmlPromise(fetchFloors({ poiId, abortSignal: signal }));

    return () => {
      abortController.abort('FloorsPlanDataProvider unmounted');
    };
  }, [poiId]);

  if (!plansHtmlPromise) return null;

  return (
    <Layout
      plansHtmlPromise={plansHtmlPromise}
      onInteractiveElementClick={onInteractiveElementClick}
      classroomAriaLabelPrefix={interpolate('floorsPlan.classRoomAriaLabelPrefix')}
      missingFloorText={interpolate('floorsPlan.missingFloorPlan')}
      loadingText={interpolate('floorsPlan.loading')}
    />
  );
};
