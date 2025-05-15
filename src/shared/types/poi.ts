import { LngLat } from 'ymaps3';
import { BrandString } from './helpers';

declare const poiIdBrandSymbol: unique symbol;
export type PoiId = BrandString<typeof poiIdBrandSymbol>;

export const PoiType = {
  university: 'university',
  dorm: 'dorm',
} as const;

export type PoiType = (typeof PoiType)[keyof typeof PoiType];

export type Poi = {
  id: PoiId;
  address: string;
  type: PoiType;
  parts: string[];
  location: LngLat;
};
