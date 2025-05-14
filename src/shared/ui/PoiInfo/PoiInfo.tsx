import { PoiInfoProps } from '@shared/contracts';
import { FC, useMemo } from 'react';

import { Separator, Text } from '@radix-ui/themes';
import { Drawer } from '../Drawer';
import { ListItem, UList } from '../List';
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
    () =>
      poi && classroomId ? (
        <>
          <Separator my="3" size="4" orientation="horizontal" />

          {renderSchedule({ poiId: poi.id, classroomId })}
        </>
      ) : null,
    [poi, classroomId, renderSchedule],
  );

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      title={poi?.address ?? <TextLineSkeleton />}
      contentNode={
        <>
          {poi ? (
            <UList>
              {poi.parts.map((part) => (
                <ListItem key={part}>
                  <Text>{part}</Text>
                </ListItem>
              ))}
            </UList>
          ) : null}

          <Separator my="3" size="4" orientation="horizontal" />

          {floorsPlanNode}

          {scheduleNode}
        </>
      }
    />
  );
};
