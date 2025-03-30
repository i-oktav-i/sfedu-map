import { FC } from 'react';

import { PoiInfoDataProvider } from '@features/PoiInfo';
import { PoiInfo } from '@shared/ui';

export const PoiInfoWidget: FC = () => <PoiInfoDataProvider Layout={PoiInfo} />;
