import { IconButton } from '@radix-ui/themes';
import { FC } from 'react';

import { ClusterProps } from '@shared/mapCore';
import { Poi } from '@shared/types';

export const ClusterLayout: FC<ClusterProps<Poi>> = ({ features }) => {
  return <IconButton>{features.length}</IconButton>;
};
