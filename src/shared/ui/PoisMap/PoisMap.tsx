import { PoisMapProps } from '@shared/contracts';
import { ymapsAvailable } from '@shared/mapCore';
import { DefaultMap } from '@shared/mapCore/DefaultMap';
import { Feature } from '@yandex/ymaps3-types/packages/clusterer';
import { FC, useMemo } from 'react';
import { Clusterer } from './Clusterer';

export const PoisMap: FC<PoisMapProps> = ({ poisListNode, theme, pois }) => {
  const features: Feature[] = useMemo(
    () =>
      pois.map<Feature>((poi) => ({
        geometry: {
          type: 'Point',
          coordinates: poi.location,
        },
        id: poi.id,
        type: 'Feature',
      })),
    [pois],
  );

  if (!ymapsAvailable) return poisListNode;

  return (
    <DefaultMap theme={theme}>
      {poisListNode}

      <Clusterer features={features} />
    </DefaultMap>
  );
};
