import { PoisMapDataProvider } from '@features/dataProviders/PoisMapDataProvider';
import { DefaultMap } from '@shared/mapCore/DefaultMap';
import { FC } from 'react';

export const PoisMapWidget: FC = () => <PoisMapDataProvider Layout={DefaultMap} />;
