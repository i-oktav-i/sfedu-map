import { getPoisList, useSelectedPoiStore } from '@entities/pois';
import { PoisListProps } from '@shared/contracts';
import { useLocaleType } from '@shared/locale';
import { FC, useMemo } from 'react';

export type PoisListDataProviderProps = {
  Layout: FC<PoisListProps>;
};

export const PoisListDataProvider: FC<PoisListDataProviderProps> = ({ Layout }) => {
  const { setSelectedPoi } = useSelectedPoiStore();
  const { locale } = useLocaleType();

  const poisList = useMemo(() => getPoisList(locale), [locale]);

  const pois = useMemo(
    () =>
      poisList.flatMap((poi) =>
        poi.parts.map((part) => ({
          address: poi.address,
          name: part,
          onClick: () => setSelectedPoi(poi),
        })),
      ),
    [poisList, setSelectedPoi],
  );

  return <Layout pois={pois} />;
};
