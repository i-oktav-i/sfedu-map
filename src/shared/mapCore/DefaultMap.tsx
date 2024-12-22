import { Box } from '@radix-ui/themes';
import { FC } from 'react';
import { YMapLocationRequest } from 'ymaps3';
import {
  YMap,
  YMapDefaultFeaturesLayer,
  YMapDefaultSchemeLayer,
  useDefault,
} from './YMap3Components';

const LOCATION: YMapLocationRequest = {
  center: [37.588144, 55.733842],
  zoom: 9,
};

type DefaultMapProps = {
  theme: 'light' | 'dark';
};

export const DefaultMap: FC<DefaultMapProps> = ({ theme }) => {
  return (
    <Box asChild width={'100%'} height={'100%'}>
      <YMap location={useDefault(LOCATION)} theme={theme}>
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
      </YMap>
    </Box>
  );
};
