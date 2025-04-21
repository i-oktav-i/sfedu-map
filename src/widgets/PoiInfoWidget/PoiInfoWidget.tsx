import { FC } from 'react';

import { PoiInfoDataProvider } from '@features/PoiInfo';
import { RenderFloorsPlanParams } from '@shared/contracts';
import { PoiInfo } from '@shared/ui';
import { FloorsPlanWidget } from '@widgets/FloorsPlanWidget';

const renderFloorsPlan = (params: RenderFloorsPlanParams) => <FloorsPlanWidget {...params} />;

export const PoiInfoWidget: FC = () => (
  <PoiInfoDataProvider Layout={PoiInfo} renderFloorsPlan={renderFloorsPlan} />
);
