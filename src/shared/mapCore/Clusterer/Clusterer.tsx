import { Feature } from '@yandex/ymaps3-types/packages/clusterer';
import { FC } from 'react';
import { LngLat } from 'ymaps3';

import { YMapClusterer, YMapClustererProps, YMapMarker, clusterByGrid } from '../YMap3Components';
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
  const getClusterLayout = (coordinates: LngLat, clusterFeatures: typeof features) => {
    return (
      <YMapMarker coordinates={coordinates}>
        <ClusterLayout features={clusterFeatures} onClick={onClusterClick} />
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
      method={clusterByGrid({ gridSize: 64 })}
      features={features}
      cluster={getClusterLayout as YMapClustererProps['cluster']}
      marker={getMarkerLayout as YMapClustererProps['marker']}
    />
  );
};
