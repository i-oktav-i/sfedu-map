import { PoisListDataProvider } from '@features/dataProviders';
import { PoisList } from '@shared/ui';
import { FC } from 'react';

export const PoisListWidget: FC = () => {
  return <PoisListDataProvider Layout={PoisList} />;
};
