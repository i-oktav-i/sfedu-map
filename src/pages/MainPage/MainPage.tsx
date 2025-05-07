import { FC } from 'react';

import { SelectedPoiRouterSync } from '@entities/pois';
import { PageLayout } from '@shared/ui/Lyaout';
import { PoiInfoWidget } from '@widgets/PoiInfoWidget';
import { PoisListWidget } from '@widgets/PoisListWidget';
import { PoisMapWidget } from '@widgets/PoisMapWidget';

export const MainPage: FC = () => {
  return (
    <SelectedPoiRouterSync>
      <PageLayout list={<PoisListWidget />} map={<PoisMapWidget />} info={<PoiInfoWidget />} />
    </SelectedPoiRouterSync>
  );
};
