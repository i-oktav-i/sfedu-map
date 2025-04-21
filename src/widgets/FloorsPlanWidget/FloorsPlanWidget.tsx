import { FC } from 'react';

import { FloorsPlanDataProvider, FloorsPlanDataProviderProps } from '@features/FloorsPlan';
import { FloorsPlan } from '@shared/ui';

export type FloorsPlanWidgetProps = Omit<FloorsPlanDataProviderProps, 'Layout'>;

export const FloorsPlanWidget: FC<FloorsPlanWidgetProps> = (props) => (
  <FloorsPlanDataProvider {...props} Layout={FloorsPlan} />
);
