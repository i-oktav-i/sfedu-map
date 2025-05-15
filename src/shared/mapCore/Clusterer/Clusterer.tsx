import { Feature } from '@yandex/ymaps3-types/packages/clusterer';
import { FC, useCallback, useContext } from 'react';
import { LngLat, LngLatBounds } from 'ymaps3';

import {
  YMapClusterer,
  YMapClustererProps,
  YMapMarker,
  clusterByGrid,
  useDefault,
} from '../YMap3Components';
import { YMapContext } from '../context';
import { getClusterBounds, isBreakableCluster } from '../utils';
import { ClusterProps, CustomFeature, MarkerProps } from './types';

export type ClustererProps<
  TFeatureProperties extends Record<string, unknown> = Record<string, unknown>,
  TCustomFeature extends Feature = CustomFeature<TFeatureProperties>,
> = {
  features: TCustomFeature[];
  ClusterLayout: FC<ClusterProps<TFeatureProperties>>;
  MarkerLayout: FC<MarkerProps<TFeatureProperties>>;
  onClusterClick?: (features: TCustomFeature[]) => void;
  onMarkerClick?: (feature: TCustomFeature) => void;
};

export const Clusterer = <
  TFeatureProperties extends Record<string, unknown> = Record<string, unknown>,
>({
  features,
  ClusterLayout,
  MarkerLayout,
  onClusterClick,
  onMarkerClick,
}: ClustererProps<TFeatureProperties>) => {
  const mapRef = useContext(YMapContext);

  const handleClusterClick = useCallback(
    (clusterFeatures: typeof features) => {
      if (isBreakableCluster(clusterFeatures)) {
        if (!mapRef.current) return;

        const bounds = getClusterBounds(clusterFeatures);

        const xOffset = (bounds[1][0] - bounds[0][0]) * 0.5;
        const yOffset = (bounds[1][1] - bounds[0][1]) * 0.5;

        const boundsWithOffset: LngLatBounds = [
          [bounds[0][0] - xOffset, bounds[0][1] - yOffset],
          [bounds[1][0] + xOffset, bounds[1][1] + yOffset],
        ];

        mapRef.current.setLocation({
          bounds: boundsWithOffset,
          duration: 300,
        });
      } else {
        onClusterClick?.(clusterFeatures);
      }
    },
    [mapRef, onClusterClick],
  );

  const getClusterLayout = (coordinates: LngLat, clusterFeatures: typeof features) => {
    return (
      <YMapMarker coordinates={coordinates}>
        <ClusterLayout features={clusterFeatures} onClick={handleClusterClick} />
      </YMapMarker>
    );
  };

  const getMarkerLayout = (feature: (typeof features)[number]) => {
    return (
      <YMapMarker coordinates={feature.geometry.coordinates}>
        <MarkerLayout feature={feature} onClick={onMarkerClick} />
      </YMapMarker>
    );
  };

  return (
    <YMapClusterer
      method={useDefault(clusterByGrid({ gridSize: 64 }), [])}
      features={features}
      cluster={getClusterLayout as YMapClustererProps['cluster']}
      marker={getMarkerLayout as YMapClustererProps['marker']}
    />
  );
};
