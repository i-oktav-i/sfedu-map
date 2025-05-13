import { ScheduleDataProvider, ScheduleDataProviderProps } from '@features/Schedule';
import { StrictOmit } from '@shared/types';
import { Schedule } from '@shared/ui/Schedule';
import { FC } from 'react';

export type ScheduleWidgetProps = StrictOmit<ScheduleDataProviderProps, 'Layout'>;

export const ScheduleWidget: FC<ScheduleWidgetProps> = ({ poiId, classroomId }) => {
  return <ScheduleDataProvider poiId={poiId} classroomId={classroomId} Layout={Schedule} />;
};
