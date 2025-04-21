import { Poi, PoiId } from '@shared/types';
import { JSX } from 'react';

export type PoiInfoProps = {
  isOpen: boolean;
  onClose: () => void;
  poi: Poi | null;
  renderFloorsPlan: (params: RenderFloorsPlanParams) => JSX.Element;
  onInteractiveElementClick: (id: string) => void;
};

export type RenderFloorsPlanParams = {
  poiId: PoiId;
  onInteractiveElementClick: (id: string) => void;
};
