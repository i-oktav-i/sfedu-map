import { FC, useEffect, useMemo, useRef } from 'react';

import { PoisMapProps } from '@shared/contracts';
import { Clusterer, ClustererProps, YMapContainer, ymapsAvailable } from '@shared/mapCore';
import { DefaultMap } from '@shared/mapCore/DefaultMap';
import { Poi } from '@shared/types';

import { YMap } from 'ymaps3';
import { ClusterLayout } from './ClusterLayout';
import { MarkerLayout } from './MarkerLayout';
import { FallbackContainer } from './tokens';

type PoisMapFeatureProperties = Poi;

export const PoisMap: FC<PoisMapProps> = ({
  theme,
  pois,
  onPoiSelect,
  selectedPoiId,
  children,
}) => {
  const mapRef = useRef<YMap>(null);

  const features: ClustererProps<PoisMapFeatureProperties>['features'] = useMemo(
    () =>
      pois.map((poi) => ({
        geometry: {
          type: 'Point',
          coordinates: poi.location,
        },
        id: poi.id,
        type: 'Feature',
        properties: poi,
      })),
    [pois],
  );

  useEffect(() => {
    if (!selectedPoiId) return;

    mapRef.current?.setLocation({ center: selectedPoiId.location, duration: 300 });
  }, [selectedPoiId]);

  if (!ymapsAvailable) return <FallbackContainer>{children}</FallbackContainer>;

  return (
    <DefaultMap theme={theme} ref={mapRef}>
      <Clusterer<PoisMapFeatureProperties>
        ClusterLayout={ClusterLayout}
        MarkerLayout={MarkerLayout}
        features={features}
        onMarkerClick={(feature) => onPoiSelect(feature.properties)}
      />

      <YMapContainer>{children}</YMapContainer>
    </DefaultMap>
  );
};
