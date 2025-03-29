import { Poi } from '@shared/types';

export type PoisListProps = {
  pois: Poi[];
  onPoiSelect: (poi: Poi) => void;
};
