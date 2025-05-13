import { PoiInfoProps } from '@shared/contracts';
import { FC, useMemo } from 'react';

import { Drawer } from '../Drawer';
import { TextLineSkeleton } from '../Skeletons';

export const PoiInfo: FC<PoiInfoProps> = ({
  isOpen,
  onClose,
  poi,
  classroomId,
  currentFloorIndex,
  setCurrentFloorIndex,
  renderFloorsPlan,
  onInteractiveElementClick,
  renderSchedule,
}) => {
  const floorsPlanNode = useMemo(
    () =>
      poi &&
      renderFloorsPlan({
        poiId: poi.id,
        onInteractiveElementClick,
        currentFloorIndex,
        setCurrentFloorIndex,
      }),
    [poi, renderFloorsPlan, onInteractiveElementClick, currentFloorIndex, setCurrentFloorIndex],
  );

  const scheduleNode = useMemo(
    () => (poi && classroomId ? renderSchedule({ poiId: poi.id, classroomId }) : null),
    [poi, classroomId, renderSchedule],
  );

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      title={poi?.name ?? <TextLineSkeleton />}
      contentNode={
        <>
          {poi?.address ?? <TextLineSkeleton />}

          {floorsPlanNode}

          {scheduleNode}
        </>
      }
    />
  );
};
