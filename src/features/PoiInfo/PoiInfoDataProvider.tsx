import { FC } from 'react';

import { useSelectedPoiStore } from '@entities/pois';
import { PoiInfoProps } from '@shared/contracts';

export type PoiInfoDataProviderProps = {
  Layout: FC<PoiInfoProps>;
};

export const PoiInfoDataProvider: FC<PoiInfoDataProviderProps> = ({ Layout }) => {
  const { selectedPoi, setSelectedPoi } = useSelectedPoiStore();

  return <Layout isOpen={!!selectedPoi} onClose={() => setSelectedPoi(null)} poi={selectedPoi} />;
};
