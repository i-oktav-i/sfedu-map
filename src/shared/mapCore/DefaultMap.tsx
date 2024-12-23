import { Box } from '@radix-ui/themes';
import { FC, ReactNode } from 'react';
import {
  YMap,
  YMapControls,
  YMapDefaultFeaturesLayer,
  YMapDefaultSchemeLayer,
  YMapGeolocationControl,
  YMapZoomControl,
  useDefault,
  userPosition,
} from './YMap3Components';

type DefaultMapProps = {
  theme: 'light' | 'dark';
  children?: ReactNode;
};

export const DefaultMap: FC<DefaultMapProps> = ({ theme, children }) => {
  return (
    <Box asChild width={'100%'} height={'100%'} position={'relative'}>
      <YMap
        location={useDefault({ center: userPosition.coords, zoom: 9 })}
        theme={theme}
        copyrightsPosition="top right"
      >
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />

        <YMapControls position="right">
          <YMapZoomControl duration={200} easing={'linear'} />
          <YMapGeolocationControl easing={'linear'} duration={200} />
        </YMapControls>

        {children}
      </YMap>
    </Box>
  );
};
