import { PoisListWidget } from '@widgets/PoisListWidget';
import { PoisMapWidget } from '@widgets/PoisMapWidget';
import { FC } from 'react';

export const MainPage: FC = () => {
  return (
    <PoisMapWidget>
      <PoisListWidget />
    </PoisMapWidget>
  );
};
