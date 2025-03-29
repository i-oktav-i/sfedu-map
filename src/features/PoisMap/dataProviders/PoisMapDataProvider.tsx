import { FC } from 'react';

import { poisList, useSelectedPoiStore } from '@entities/pois';
import { useAppTheme } from '@shared/AppTheme';
import { PoisMapProps } from '@shared/contracts';
import { toLowerCase } from '@shared/text';
import { ChildrenProp } from '@shared/types';

type PoisMapDataProviderProps = {
  Layout: FC<PoisMapProps>;
} & ChildrenProp;

export const PoisMapDataProvider: FC<PoisMapDataProviderProps> = ({ Layout, children }) => {
  const { selectedPoi, setSelectedPoi } = useSelectedPoiStore();
  const { theme } = useAppTheme();

  return (
    <Layout
      theme={toLowerCase(theme)}
      pois={poisList}
      selectedPoiId={selectedPoi}
      onPoiSelect={setSelectedPoi}
    >
      {children}
    </Layout>
  );
};
