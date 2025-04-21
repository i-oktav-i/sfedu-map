import { FC } from 'react';

import { useSelectedPoiStore } from '@entities/pois';
import { PoiInfoProps } from '@shared/contracts';

export type PoiInfoDataProviderProps = {
  Layout: FC<PoiInfoProps>;
} & Pick<PoiInfoProps, 'renderFloorsPlan'>;

export const PoiInfoDataProvider: FC<PoiInfoDataProviderProps> = ({ Layout, renderFloorsPlan }) => {
  const { selectedPoi, setSelectedPoi } = useSelectedPoiStore();

  return (
    <Layout
      isOpen={!!selectedPoi}
      onClose={() => setSelectedPoi(null)}
      poi={selectedPoi}
      renderFloorsPlan={renderFloorsPlan}
      onInteractiveElementClick={alert}
    />
  );
};
