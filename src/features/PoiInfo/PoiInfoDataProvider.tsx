import { FC, useEffect, useState } from 'react';

import { useSelectedPoiStore } from '@entities/pois';
import { PoiInfoProps } from '@shared/contracts';

export type PoiInfoDataProviderProps = {
  Layout: FC<PoiInfoProps>;
} & Pick<PoiInfoProps, 'renderFloorsPlan' | 'renderSchedule'>;

export const PoiInfoDataProvider: FC<PoiInfoDataProviderProps> = ({
  Layout,
  renderFloorsPlan,
  renderSchedule,
}) => {
  const { selectedPoi, setSelectedPoi } = useSelectedPoiStore();

  const [currentFloorIndex, setCurrentFloorIndex] = useState(0);
  const [selectedClassroomId, setSelectedClassroomId] = useState<string | null>(null);

  useEffect(() => {
    setSelectedClassroomId(null);
  }, [selectedPoi, currentFloorIndex]);

  useEffect(() => {
    setCurrentFloorIndex(0);
  }, [selectedPoi]);

  return (
    <Layout
      isOpen={!!selectedPoi}
      onClose={() => setSelectedPoi(null)}
      poi={selectedPoi}
      classroomId={selectedClassroomId}
      renderFloorsPlan={renderFloorsPlan}
      renderSchedule={renderSchedule}
      onInteractiveElementClick={setSelectedClassroomId}
      currentFloorIndex={currentFloorIndex}
      setCurrentFloorIndex={setCurrentFloorIndex}
    />
  );
};
