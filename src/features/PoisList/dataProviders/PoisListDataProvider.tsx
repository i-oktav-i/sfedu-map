import { poisList, useSelectedPoiStore } from '@entities/pois';
import { PoisListProps } from '@shared/contracts';
import { FC } from 'react';

export type PoisListDataProviderProps = {
  Layout: FC<PoisListProps>;
};

export const PoisListDataProvider: FC<PoisListDataProviderProps> = ({ Layout }) => {
  const { setSelectedPoi } = useSelectedPoiStore();

  return <Layout pois={poisList} onPoiSelect={setSelectedPoi} />;
};
