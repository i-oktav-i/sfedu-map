import { Locale } from '@shared/locale';
import { Poi } from '@shared/types';

import { initialUserPosition } from '@shared/mapCore';
import { lazyMap } from '@shared/utils';
import poisData from './poisData';

export const getPoisList = (locale: Locale): Poi[] =>
  poisData
    .map((poi) => ({
      id: poi.id,
      address: poi.address[locale],
      parts: poi.parts[locale],
      location: poi.location,
    }))
    .sort((left, right) => {
      const userCoords = initialUserPosition.coords;

      const leftDistanceToUser =
        (userCoords[0] - left.location[0]) ** 2 + (userCoords[1] - left.location[1]) ** 2;
      const rightDistanceToUser =
        (userCoords[0] - right.location[0]) ** 2 + (userCoords[1] - right.location[1]) ** 2;

      return leftDistanceToUser - rightDistanceToUser;
    });

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
