import { format } from 'date-fns/format';
import { FC, useEffect, useMemo, useState } from 'react';

import { fetchMMSCClassroomSchedule } from '@entities/schedule';
import { WeekDay, weekDaysByDateDay, weekDaysNamesByIndex } from '@shared/config';
import { DayScheduleProps, ScheduleDaySelectProps, ScheduleProps } from '@shared/contracts';
import { useLocale } from '@shared/locale';
import { PoiId, ScheduleData } from '@shared/types';

export type ScheduleDataProviderProps = {
  poiId: PoiId;
  classroomId: string;
  Layout: FC<ScheduleProps>;
};

const getCurrentDayIndex = () => `${weekDaysByDateDay[new Date().getDay()]}` as const;

export const ScheduleDataProvider: FC<ScheduleDataProviderProps> = ({
  poiId,
  classroomId,
  Layout,
}) => {
  const [selectedDay, setSelectedDay] = useState<`${WeekDay}`>(getCurrentDayIndex);
  const [scheduleData, setScheduleData] = useState<ScheduleData>({});

  const { interpolate } = useLocale();

  const scheduleDayProps = useMemo((): DayScheduleProps => {
    const scheduleDay = scheduleData[selectedDay];

    if (!scheduleDay) {
      return {
        label: interpolate('schedule.emptyDay'),
        items: [],
      };
    }

    return {
      label: interpolate('schedule.dayTitle', {
        values: { day: interpolate(`weekDays.full.${weekDaysNamesByIndex[selectedDay]}`) },
      }),
      items: scheduleDay.map((lesson) => {
        const label = interpolate('schedule.timeRange', {
          values: {
            from: format(lesson.from, 'HH:mm'),
            till: format(lesson.till, 'HH:mm'),
          },
        });

        return {
          label,
          lessons: lesson.lessons,
        };
      }),
    };
  }, [scheduleData, selectedDay, interpolate]);

  useEffect(() => {
    setSelectedDay(getCurrentDayIndex);
    setScheduleData({});

    const abortController = new AbortController();

    fetchMMSCClassroomSchedule({
      classroomId,
      abortSignal: abortController.signal,
    }).then((data) => {
      setScheduleData(data);
    });

    return () => abortController.abort('ScheduleDataProvider unmounted');
  }, [poiId, classroomId]);

  const daySelectProps: ScheduleDaySelectProps = useMemo(
    () => ({
      label: interpolate('schedule.daySelect'),
      // @ts-ignore
      options: Array.from({ length: 6 }, (_, i: WeekDay) => ({
        label: interpolate(`weekDays.short.${weekDaysNamesByIndex[i]}`),
        value: `${i}`,
      })),
      selected: selectedDay,
      onChange: setSelectedDay,
    }),
    [interpolate, selectedDay],
  );

  return <Layout daySchedule={scheduleDayProps} daySelectProps={daySelectProps} />;
};
