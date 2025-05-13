import { Poi, PoiId } from '@shared/types';
import { JSX } from 'react';

export type PoiInfoProps = {
  isOpen: boolean;
  onClose: () => void;
  poi: Poi | null;
  classroomId: string | null;
  renderFloorsPlan: (params: RenderFloorsPlanParams) => JSX.Element;
  renderSchedule: (params: RenderScheduleParams) => JSX.Element;
  onInteractiveElementClick: (id: string) => void;
};

export type RenderFloorsPlanParams = {
  poiId: PoiId;
  onInteractiveElementClick: (id: string) => void;

export type RenderScheduleParams = {
  poiId: PoiId;
  classroomId: string;
};
