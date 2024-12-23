import { PoisMapDataProvider } from '@features/dataProviders';
import { PoisMap } from '@shared/ui';
import { PoisListWidget } from '@widgets/PoisListWidget';
import { FC } from 'react';

export const PoisMapWidget: FC = () => (
  <PoisMapDataProvider Layout={PoisMap} poisListNode={<PoisListWidget />} />
);
