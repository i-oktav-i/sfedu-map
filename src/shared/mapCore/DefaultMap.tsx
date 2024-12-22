import { Box } from '@radix-ui/themes';
import { FC, useRef } from 'react';
import { YMap as YMapType } from 'ymaps3';
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
};

export const DefaultMap: FC<DefaultMapProps> = ({ theme }) => {
  const mapRef = useRef<YMapType>(null);

  console.log('mapRef.current', mapRef.current);

  return (
    <Box asChild width={'100%'} height={'100%'} position={'relative'}>
      <YMap
        location={useDefault({ center: userPosition.coords, zoom: 9 })}
        theme={theme}
        copyrightsPosition="top right"
        ref={(node) => {
          console.log('node', node);
        }}
      >
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />

        <YMapControls position="right">
          <YMapZoomControl duration={200} easing={'linear'} />
          <YMapGeolocationControl easing={'linear'} duration={200} />
        </YMapControls>
      </YMap>
    </Box>
  );
};
