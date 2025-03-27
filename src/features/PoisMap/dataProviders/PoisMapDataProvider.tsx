import { poisList } from '@entities/pois';
import { useAppTheme } from '@shared/AppTheme';
import { PoisMapProps } from '@shared/contracts';
import { toLowerCase } from '@shared/text';
import { FC } from 'react';

type PoisMapDataProviderProps = {
  Layout: FC<PoisMapProps>;
} & Pick<PoisMapProps, 'poisListNode'>;

export const PoisMapDataProvider: FC<PoisMapDataProviderProps> = ({ Layout, poisListNode }) => {
  const { theme } = useAppTheme();

  return <Layout theme={toLowerCase(theme)} poisListNode={poisListNode} pois={poisList} />;
};
