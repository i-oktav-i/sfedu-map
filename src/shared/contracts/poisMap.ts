import { Poi } from '@shared/types';
import { ReactNode } from 'react';

export type PoisMapProps = {
  theme: 'light' | 'dark';
  pois: Poi[];
  selectedPoiId: Poi | null;
  onPoiSelect: (poi: Poi) => void;
  children?: ReactNode;
};
