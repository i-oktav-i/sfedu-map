import { FC } from 'react';

import { SomethingWrongDataProvider } from '@features/SomethingWrong';
import { SomethingWrong } from '@shared/ui';

export const SomethingWrongWidget: FC = () => (
  <SomethingWrongDataProvider Layout={SomethingWrong} />
);
