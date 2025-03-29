import { ChildrenProp, Poi } from '@shared/types';

export type PoisMapProps = {
  theme: 'light' | 'dark';
  pois: Poi[];
  selectedPoiId: Poi | null;
  onPoiSelect: (poi: Poi) => void;
} & ChildrenProp;
