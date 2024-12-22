import { LngLat } from 'ymaps3';

declare const poiIdBrandSymbol: unique symbol;
export type PoiId = string & { [poiIdBrandSymbol]: never };

export type Poi = {
  id: PoiId;
  name: string;
  address: string;
  location: LngLat;
};
