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
} = reactify.module(ymaps3);
