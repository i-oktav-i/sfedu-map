import { poisList, useSelectedPoiStore } from '@entities/pois';
import { useAppTheme } from '@shared/AppTheme';
import { PoisMapProps } from '@shared/contracts';
import { toLowerCase } from '@shared/text';
import { FC } from 'react';

type PoisMapDataProviderProps = {
  Layout: FC<PoisMapProps>;
};

export const PoisMapDataProvider: FC<PoisMapDataProviderProps> = ({ Layout }) => {
  const { selectedPoi, setSelectedPoi } = useSelectedPoiStore();
  const { theme } = useAppTheme();

  return (
    <Layout
      theme={toLowerCase(theme)}
      pois={poisList}
      selectedPoiId={selectedPoi}
      onPoiSelect={setSelectedPoi}
    />
  );
};
