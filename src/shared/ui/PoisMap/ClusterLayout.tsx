import { IconButton } from '@radix-ui/themes';
import { FC } from 'react';

import { ClusterProps } from '@shared/mapCore';
import { Poi } from '@shared/types';

export const ClusterLayout: FC<ClusterProps<Poi>> = ({ features, onClick }) => {
  return <IconButton onClick={() => onClick?.(features)}>{features.length}</IconButton>;
};
