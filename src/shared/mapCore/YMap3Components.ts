import React from 'react';
import ReactDOM from 'react-dom';

await ymaps3.ready;

const ymaps3Reactify = await ymaps3.import('@yandex/ymaps3-reactify');
const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);

export const { useDefault } = reactify;

export const {
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

const ymaps3Controls = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');

export const { YMapGeolocationControl, YMapZoomControl } = reactify.module(ymaps3Controls);

export const userPosition = await geolocation.getPosition();
