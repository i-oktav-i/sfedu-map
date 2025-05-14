import { Locale } from '@shared/locale';
import { Poi } from '@shared/types';

import { lazyMap } from '@shared/utils';
import poisData from './poisData';

export const getPoisList = (locale: Locale): Poi[] =>
  poisData.map((poi) => ({
    id: poi.id,
    address: poi.address[locale],
    parts: poi.parts[locale],
    location: poi.location,
  }));

export const getFilteredPoisList = async (
  locale: Locale,
  searchString: string,
  abortSignal: AbortSignal,
) => {
  try {
    const poisWithMatches = await lazyMap(
      poisData,
      (poi) => {
        const fullItemInfo =
          `${Object.values(poi.address).join(' ')} ${Object.values(poi.parts).join(' ')}`.toLowerCase();

        const words = searchString.toLowerCase().split(' ');

        const matchCount = words.reduce((count, word) => {
          const isMatch = fullItemInfo.includes(word);
          return count + (isMatch ? 1 : 0);
        }, 0);

        return {
          poi: {
            id: poi.id,
            address: poi.address[locale],
            parts: poi.parts[locale],
            location: poi.location,
          },
          count: matchCount,
        };
      },
      abortSignal,
    );

    const filteredPois = poisWithMatches.filter((item) => item.count > 0);
    filteredPois.sort((a, b) => b.count - a.count);

    return filteredPois.map((item) => item.poi);
  } catch (error) {
    console.error('Error filtering POIs:', error);

    return [];
  }
};
