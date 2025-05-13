import { ScheduleProps } from '@shared/contracts';
import { FC } from 'react';
import { DaySchedule } from './DaySchedule';
import { DaySelect } from './DaySelect';
import { rootContainer } from './styles.css';

export const Schedule: FC<ScheduleProps> = ({ daySchedule, daySelectProps }) => {
  return (
    <div className={rootContainer}>
      <DaySelect {...daySelectProps} />
      <DaySchedule {...daySchedule} />
    </div>
  );
};
