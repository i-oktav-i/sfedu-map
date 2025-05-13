import type { WeekDay } from '@shared/config';
import type { WeekType } from '@shared/types';

export type ScheduleProps = {
  daySchedule: DayScheduleProps;
  daySelectProps: ScheduleDaySelectProps;
};

export type DayScheduleItem = {
  label: string;
  lessons: { name: string; weekType: WeekType }[];
};

export type DayScheduleProps = {
  label: string;
  items: DayScheduleItem[];
};

export type ScheduleDaySelectProps = {
  label: string;
  options: {
    label: string;
    value: `${WeekDay}`;
  }[];
  selected: string;
  onChange: (value: `${WeekDay}`) => void;
};
