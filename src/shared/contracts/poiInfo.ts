import { Poi, PoiId, StrictOmit } from '@shared/types';
import { Dispatch, JSX, SetStateAction } from 'react';

export type PoiInfoProps = {
  isOpen: boolean;
  onClose: () => void;
  poi: Poi | null;
  classroomId: string | null;
  renderFloorsPlan: (params: RenderFloorsPlanParams) => JSX.Element;
  renderSchedule: (params: RenderScheduleParams) => JSX.Element;
} & StrictOmit<RenderFloorsPlanParams, 'poiId'> &
  StrictOmit<RenderScheduleParams, 'poiId' | 'classroomId'>;

export type RenderFloorsPlanParams = {
  poiId: PoiId;
  onInteractiveElementClick: (id: string) => void;
  currentFloorIndex: number;
  setCurrentFloorIndex: Dispatch<SetStateAction<number>>;
};

export type RenderScheduleParams = {
  poiId: PoiId;
  classroomId: string;
};
