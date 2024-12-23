import { HomeIcon } from '@radix-ui/react-icons';
import { YMapClusterer, YMapClustererProps, YMapMarker, clusterByGrid } from '@shared/mapCore';
import { Feature } from '@yandex/ymaps3-types/packages/clusterer';
import { ClusterContainer, MarkerContainer } from './styles';

const ClusterLayout: YMapClustererProps['cluster'] = (coordinates, features) => {
  return (
    <YMapMarker coordinates={coordinates}>
      <ClusterContainer>{features.length}</ClusterContainer>
    </YMapMarker>
  );
};

const MarkerLayout: YMapClustererProps['marker'] = (feature) => {
  return (
    <YMapMarker coordinates={feature.geometry.coordinates}>
      <MarkerContainer>
        <HomeIcon />
      </MarkerContainer>
    </YMapMarker>
  );
};

export type ClustererProps = {
  features: Feature[];
};

export const Clusterer = ({ features }: ClustererProps) => {
  return (
    <YMapClusterer
      method={clusterByGrid({ gridSize: 64 })}
      features={features}
      cluster={ClusterLayout}
      marker={MarkerLayout}
    />
  );
};
