import { CurriculaId, LessonId } from '@shared/types';

export type RequestMMSCClassroomScheduleParams = {
  classroomId: string;
  abortSignal?: AbortSignal;
};

export type RequestMMSCClassroomScheduleResponse = {
  lessons: {
    id: LessonId;
    timeslot: string;
  }[];
  curricula: {
    id: CurriculaId;
    lessonid: LessonId;
    subjectabbr: string;
    subjectname: string;
  }[];
};
export const requestMMSCClassroomSchedule = async ({
  classroomId,
  abortSignal,
}: RequestMMSCClassroomScheduleParams) => {
  const response = await fetch(`https://schedule.sfedu.ru/APIv1/schedule/room/${classroomId}`, {
    method: 'GET',
    signal: abortSignal,
  });

  if (!response.ok) {
    throw new Error('Failed to fetch classroom schedule');
  }

  return response.json() as unknown as RequestMMSCClassroomScheduleResponse;
};
