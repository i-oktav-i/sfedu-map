export const WeekDay = {
  monday: 0,
  tuesday: 1,
  wednesday: 2,
  thursday: 3,
  friday: 4,
  saturday: 5,
  sunday: 6,
} as const;

export type WeekDay = (typeof WeekDay)[keyof typeof WeekDay];

export const weekDaysByDateDay = [
  WeekDay.sunday,
  WeekDay.monday,
  WeekDay.tuesday,
  WeekDay.wednesday,
  WeekDay.thursday,
  WeekDay.friday,
  WeekDay.saturday,
] as const;

export const weekDaysNamesByIndex = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
] as const satisfies (keyof typeof WeekDay)[];
