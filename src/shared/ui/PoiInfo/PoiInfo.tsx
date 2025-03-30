import { PoiInfoProps } from '@shared/contracts';
import { FC } from 'react';

import { Drawer } from '../Drawer';
import { TextLineSkeleton } from '../Skeletons';

export const PoiInfo: FC<PoiInfoProps> = ({ isOpen, onClose, poi }) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      title={poi?.name ?? <TextLineSkeleton />}
      contentNode={poi?.address ?? <TextLineSkeleton />}
    />
  );
};
