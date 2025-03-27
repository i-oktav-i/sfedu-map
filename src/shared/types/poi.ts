import { LngLat } from 'ymaps3';
import { BrandString } from './helpers';

declare const poiIdBrandSymbol: unique symbol;
export type PoiId = BrandString<typeof poiIdBrandSymbol>;

export type Poi = {
  id: PoiId;
  name: string;
  address: string;
  location: LngLat;
};
