import { PoisMapDataProvider } from '@features/PoisMap';
import { PoisMap } from '@shared/ui';
import { FC } from 'react';

export const PoisMapWidget: FC = () => <PoisMapDataProvider Layout={PoisMap} />;
