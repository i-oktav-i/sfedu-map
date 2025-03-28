import { Box } from '@radix-ui/themes';
import { FC, ReactNode, Ref } from 'react';
import { YMap as YMapClass } from 'ymaps3';
import {
  YMap,
  YMapControls,
  YMapDefaultFeaturesLayer,
  YMapDefaultSchemeLayer,
  YMapGeolocationControl,
  YMapZoomControl,
  initialUserPosition,
  useDefault,
} from './YMap3Components';

type DefaultMapProps = {
  theme: 'light' | 'dark';
  children?: ReactNode;
  ref?: Ref<YMapClass>;
};

export const DefaultMap: FC<DefaultMapProps> = ({ theme, children, ref }) => {
  return (
    <Box asChild width={'100%'} height={'100%'} position={'relative'}>
      <YMap
        location={useDefault({ center: initialUserPosition.coords, zoom: 14 })}
        theme={theme}
        copyrightsPosition="top right"
        ref={ref}
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
