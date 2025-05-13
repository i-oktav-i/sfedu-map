import { Locale } from '@shared/locale';
import { Poi } from '@shared/types';

import poisData from './poisData';

export const getPoisList = (locale: Locale): Poi[] =>
  poisData.map((poi) => ({
    id: poi.id,
    address: poi.address[locale],
    parts: poi.parts[locale],
    location: poi.location,
  }));
