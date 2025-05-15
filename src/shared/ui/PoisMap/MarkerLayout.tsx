import { BackpackIcon, HomeIcon } from '@radix-ui/react-icons';
import { IconButton } from '@radix-ui/themes';
import { MarkerProps } from '@shared/mapCore';
import { Poi, PoiType } from '@shared/types';
import { FC } from 'react';

export const MarkerLayout: FC<MarkerProps<Poi>> = ({ feature, onClick }) => {
  return (
    <IconButton onClick={() => onClick?.(feature)} variant="classic" radius="full" color="gray">
      {feature.properties.type === PoiType.dorm ? <HomeIcon /> : <BackpackIcon />}
    </IconButton>
  );
};
