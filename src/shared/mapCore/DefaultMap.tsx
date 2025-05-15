import { Box } from '@radix-ui/themes';
import { FC, ReactNode, Ref, useImperativeHandle, useRef } from 'react';
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
import { YMapContext } from './context';

type DefaultMapProps = {
  theme: 'light' | 'dark';
  children?: ReactNode;
  ref?: Ref<YMapClass | null>;
};

export const DefaultMap: FC<DefaultMapProps> = ({ theme, children, ref }) => {
  const mapRef = useRef<YMapClass | null>(null);

  useImperativeHandle(ref, () => mapRef.current!, [mapRef.current]);

  return (
    <YMapContext.Provider value={mapRef}>
      <Box asChild width={'100%'} height={'100%'} position={'relative'}>
        <YMap
          location={useDefault({ center: initialUserPosition.coords, zoom: 14 })}
          theme={theme}
          copyrightsPosition="top right"
          ref={mapRef}
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
    </YMapContext.Provider>
  );
};
