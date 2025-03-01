import React, { ComponentProps, forwardRef } from 'react';
import ReactDOM from 'react-dom';

import { rostovOnDodCoords } from '@shared/config';

const fallback = () => {
  throw new Error('Yandex Maps 3 API is not available');
};

type Ymaps3ModuleType = Awaited<ReturnType<typeof getReactYMapComponents>>;

const EmptyComponent = () => null;
const EmptyComponentWithRef = forwardRef(EmptyComponent);

const fallbackYmaps3: Ymaps3ModuleType = {
  ymapsAvailable: false,
  useDefault: fallback,
  YMap: EmptyComponentWithRef,
  YMapContainer: EmptyComponent,
  YMapLayer: EmptyComponentWithRef,
  YMapDefaultSchemeLayer: EmptyComponentWithRef,
  YMapDefaultFeaturesLayer: EmptyComponentWithRef,
  YMapMarker: EmptyComponentWithRef,
  YMapControls: EmptyComponentWithRef,
  YMapScaleControl: EmptyComponentWithRef,
  geolocation: { getPosition: fallback },
  YMapGeolocationControl: EmptyComponentWithRef,
  YMapZoomControl: EmptyComponentWithRef,
  clusterByGrid: fallback,
  YMapClusterer: EmptyComponentWithRef,
};

export const getReactYMapComponents = () =>
  Promise.all([
    ymaps3.import('@yandex/ymaps3-reactify'),
    ymaps3.import('@yandex/ymaps3-controls@0.0.1'),
    ymaps3.import('@yandex/ymaps3-clusterer@0.0.1'),
    ymaps3.ready,
  ]).then(([ymaps3Reactify, ymaps3Controls, ymaps3Clusterer]) => {
    // TODO: remove this line after the issue is fixed
    const reactify = ymaps3Reactify.reactify.bindTo({ ...React, version: '18.0' }, ReactDOM);

    const { useDefault } = reactify;
    const {
      YMap,
      YMapContainer,
      YMapLayer,
      YMapDefaultSchemeLayer,
      YMapDefaultFeaturesLayer,
      YMapMarker,
      YMapControls,
      YMapScaleControl,
      geolocation,
    } = reactify.module(ymaps3);
    const { YMapGeolocationControl, YMapZoomControl } = reactify.module(ymaps3Controls);
    const { clusterByGrid } = ymaps3Clusterer;
    const { YMapClusterer } = reactify.module(ymaps3Clusterer);

    return {
      ymapsAvailable: true,
      useDefault,
      YMap,
      YMapContainer,
      YMapLayer,
      YMapDefaultSchemeLayer,
      YMapDefaultFeaturesLayer,
      YMapMarker,
      YMapControls,
      YMapScaleControl,
      geolocation,
      YMapGeolocationControl,
      YMapZoomControl,
      clusterByGrid,
      YMapClusterer,
    };
  });

const initializationPromise = window.ymaps3
  ? getReactYMapComponents()
  : Promise.reject(new Error('Yandex Maps 3 API is not available'));

export const {
  ymapsAvailable,
  useDefault,
  YMap,
  YMapContainer,
  YMapLayer,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapMarker,
  YMapControls,
  YMapScaleControl,
  geolocation,
  YMapGeolocationControl,
  YMapZoomControl,
  clusterByGrid,
  YMapClusterer,
} = await initializationPromise.catch((error) => {
  console.error('Failed to initialize Yandex Maps 3 API:', error);

  return fallbackYmaps3;
});

export const initialUserPosition = await (ymapsAvailable
  ? geolocation.getPosition({ maximumAge: 60000, timeout: 5000 })
  : { coords: rostovOnDodCoords });

export type YMapClustererProps = ComponentProps<typeof YMapClusterer>;
