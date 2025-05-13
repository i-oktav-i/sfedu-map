import { WeekDay } from '@shared/config';

declare const lessonIdBrand: unique symbol;
declare const curriculaIdBrand: unique symbol;

export type LessonId = string & { [lessonIdBrand]: never };
export type CurriculaId = string & { [curriculaIdBrand]: never };

export type WeekType = 'upper' | 'lower' | 'full';

type DayScheduleDataItem = {
  from: Date;
  till: Date;
  lessons: {
    name: string;
    weekType: WeekType;
  }[];
};

export type ScheduleData = Partial<Record<WeekDay, DayScheduleDataItem[]>>;
