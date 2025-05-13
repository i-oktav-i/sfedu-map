import { FC } from 'react';

import { PoiInfoDataProvider } from '@features/PoiInfo';
import { RenderFloorsPlanParams, RenderScheduleParams } from '@shared/contracts';
import { PoiInfo } from '@shared/ui';
import { FloorsPlanWidget } from '@widgets/FloorsPlanWidget';
import { ScheduleWidget } from '@widgets/ScheduleWidget';

const renderFloorsPlan = (params: RenderFloorsPlanParams) => <FloorsPlanWidget {...params} />;
const renderSchedule = (params: RenderScheduleParams) => <ScheduleWidget {...params} />;

export const PoiInfoWidget: FC = () => (
  <PoiInfoDataProvider
    Layout={PoiInfo}
    renderFloorsPlan={renderFloorsPlan}
    renderSchedule={renderSchedule}
  />
);
