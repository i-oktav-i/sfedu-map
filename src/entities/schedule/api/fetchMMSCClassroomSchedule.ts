import type { ScheduleData } from '@shared/types';
import { mmcsResponseToSchedule } from '../model';
import { requestMMSCClassroomSchedule } from './requestMMSCClassroomSchedule';

export type FetchMMSCClassroomScheduleParams = {
  classroomId: string;
  abortSignal?: AbortSignal;
};

export const fetchMMSCClassroomSchedule = async ({
  classroomId,
  abortSignal,
}: FetchMMSCClassroomScheduleParams): Promise<ScheduleData> => {
  try {
    const response = await requestMMSCClassroomSchedule({ classroomId, abortSignal });

    return mmcsResponseToSchedule({ response });
  } catch (error) {
    console.error('Error fetching MMSC classroom schedule:', error);

    return {};
  }
};
