import { FC, useMemo } from 'react';

import { getPoisList, useSelectedPoiStore } from '@entities/pois';
import { useAppTheme } from '@shared/AppTheme';
import { PoisMapProps } from '@shared/contracts';
import { useLocaleType } from '@shared/locale';
import { toLowerCase } from '@shared/text';
import { ChildrenProp } from '@shared/types';

type PoisMapDataProviderProps = {
  Layout: FC<PoisMapProps>;
} & ChildrenProp;

export const PoisMapDataProvider: FC<PoisMapDataProviderProps> = ({ Layout, children }) => {
  const { selectedPoi, setSelectedPoi } = useSelectedPoiStore();
  const { theme } = useAppTheme();
  const { locale } = useLocaleType();

  const poisList = useMemo(() => getPoisList(locale), [locale]);

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
