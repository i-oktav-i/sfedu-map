import { PoisMapDataProvider } from '@features/PoisMap';
import { ChildrenProp } from '@shared/types';
import { PoisMap } from '@shared/ui';
import { FC } from 'react';

export const PoisMapWidget: FC<ChildrenProp> = ({ children }) => (
  <PoisMapDataProvider Layout={PoisMap}>{children}</PoisMapDataProvider>
);
