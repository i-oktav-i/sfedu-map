import { Feature } from '@yandex/ymaps3-types/packages/clusterer';
import { LngLatBounds } from 'ymaps3';

export const getClusterBounds = (features: Feature[]): LngLatBounds => {
  const bounds = features.reduce(
    (acc, feature) => {
      const coordinates = feature.geometry.coordinates;
      acc[0][0] = Math.min(acc[0][0], coordinates[0]);
      acc[0][1] = Math.min(acc[0][1], coordinates[1]);
      acc[1][0] = Math.max(acc[1][0], coordinates[0]);
      acc[1][1] = Math.max(acc[1][1], coordinates[1]);
      return acc;
    },
    [
      [Infinity, Infinity],
      [-Infinity, -Infinity],
    ] as LngLatBounds,
  );

  return bounds;
};

const PRECISION = 0.0005;
const MAX_CHECKING_COUNT = 10;

export const isBreakableCluster = (features: Feature[]): boolean => {
  if (features.length > MAX_CHECKING_COUNT) return true;

  const bounds = getClusterBounds(features);
  const width = bounds[1][0] - bounds[0][0];
  const height = bounds[1][1] - bounds[0][1];
  const isWidthBreakable = width > PRECISION;
  const isHeightBreakable = height > PRECISION;
  const isBreakable = isWidthBreakable || isHeightBreakable;

  return isBreakable;
};
