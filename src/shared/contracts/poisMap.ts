import { Poi } from '@shared/types';
import { ReactNode } from 'react';

export type PoisMapProps = {
  theme: 'light' | 'dark';
  pois: Poi[];
  poisListNode: ReactNode;
};
