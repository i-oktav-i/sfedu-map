import { Feature } from '@yandex/ymaps3-types/packages/clusterer';

export type CustomFeature<FeatureProperties extends Record<string, unknown>> = Feature & {
  properties: FeatureProperties;
};

export type ClusterProps<
  TFeatureProperties extends Record<string, unknown> = Record<string, unknown>,
  TCustomFeature extends Feature = CustomFeature<TFeatureProperties>,
> = {
  features: TCustomFeature[];
  onClick?: (features: TCustomFeature[]) => void;
};

export type MarkerProps<
  TFeatureProperties extends Record<string, unknown> = Record<string, unknown>,
  TCustomFeature extends Feature = CustomFeature<TFeatureProperties>,
> = {
  feature: TCustomFeature;
  onClick?: (feature: TCustomFeature) => void;
};
