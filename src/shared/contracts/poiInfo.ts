import { Poi } from '@shared/types';

export type PoiInfoProps = {
  isOpen: boolean;
  onClose: () => void;
  poi: Poi | null;
};
