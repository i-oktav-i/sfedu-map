import { parse } from 'date-fns/parse';
import { roundToNearestMinutes } from 'date-fns/roundToNearestMinutes';

import type { WeekDay } from '@shared/config';
import type { ScheduleData, WeekType } from '@shared/types';

import type { RequestMMSCClassroomScheduleResponse } from '../api';

const lessonTimeSlotRegExp =
  /^\((?<weekDay>\d),(?<from>(:?\d?\d){3}),(?<till>(:?\d\d){3}),(?<weekType>(\w+))\)$/;

const parseTime = (time: string) =>
  roundToNearestMinutes(parse(time, 'HH:mm:ss', new Date()), { roundingMethod: 'floor' });

export type MMCSResponseToScheduleParams = {
  response: RequestMMSCClassroomScheduleResponse;
};

export type MMCSResponseToScheduleReturn = Partial<ScheduleData>;

export const mmcsResponseToSchedule = ({
  response,
}: MMCSResponseToScheduleParams): MMCSResponseToScheduleReturn => {
  const { lessons, curricula } = response;

  return lessons.reduce((memo, lesson) => {
    const names = curricula
      .filter((curriculum) => curriculum.lessonid === lesson.id)
      .map((curriculum) => curriculum.subjectabbr || curriculum.subjectname);

    const {
      from: fromAsString,
      till: tillAsString,
      weekDay,
      weekType,
    } = lesson.timeslot.match!(lessonTimeSlotRegExp)!.groups as {
      weekDay: `${WeekDay}`;
      from: string;
      till: string;
      weekType: WeekType;
    };

    memo[weekDay] = memo[weekDay] ?? [];

    const from = parseTime(fromAsString);
    const till = parseTime(tillAsString);

    const found = memo[weekDay].find(
      (item) => item.from.getTime() === from.getTime() && item.till.getTime() === till.getTime(),
    );

    const scheduleLessons = names.map((name) => ({ name, weekType }));

    if (found) {
      found.lessons.push(...scheduleLessons);
    } else {
      memo[weekDay].push({
        from,
        till,
        lessons: scheduleLessons,
      });
    }

    return memo;
  }, {} as MMCSResponseToScheduleReturn);
};
