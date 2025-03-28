import { Poi } from '@shared/types';
import { create } from 'zustand';

type SelectedPoiStoreState = {
  selectedPoi: Poi | null;
  setSelectedPoi: (poiId: Poi | null) => void;
};

export const useSelectedPoiStore = create<SelectedPoiStoreState>((set) => ({
  selectedPoi: null,
  setSelectedPoi: (poiId) => set({ selectedPoi: poiId }),
}));
