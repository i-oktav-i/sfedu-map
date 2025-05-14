import { FC, useDeferredValue, useEffect, useMemo, useState } from 'react';

import { getFilteredPoisList, getPoisList, useSelectedPoiStore } from '@entities/pois';
import { PoisListItemProps, PoisListProps, PoisListSearchProps } from '@shared/contracts';
import { useLocale, useLocaleType } from '@shared/locale';
import { Poi } from '@shared/types';

export type PoisListDataProviderProps = {
  Layout: FC<PoisListProps>;
};

const poisToListItems = (pois: Poi[], selectPoi: (poi: Poi) => void): PoisListItemProps[] =>
  pois.flatMap((poi) =>
    poi.parts.map((part) => ({
      address: poi.address,
      name: part,
      onClick: () => selectPoi(poi),
    })),
  );

export const PoisListDataProvider: FC<PoisListDataProviderProps> = ({ Layout }) => {
  const { setSelectedPoi } = useSelectedPoiStore();
  const { locale } = useLocaleType();
  const { interpolate } = useLocale();

  const [searchString, setSearchString] = useState('');
  const [filteredPois, setFilteredPois] = useState<PoisListItemProps[]>([]);

  const deferredSearchString = useDeferredValue(searchString);

  useEffect(() => {
    if (!deferredSearchString) {
      const fullPoisList = getPoisList(locale);

      return setFilteredPois(poisToListItems(fullPoisList, setSelectedPoi));
    }

    const abortController = new AbortController();

    getFilteredPoisList(locale, deferredSearchString, abortController.signal).then(
      (filteredPois) => {
        if (abortController.signal.aborted) return;

        const poisListItems = poisToListItems(filteredPois, setSelectedPoi);

        setFilteredPois(poisListItems);
      },
    );

    return () => abortController.abort();
  }, [locale, deferredSearchString, setSelectedPoi]);

  const searchProps: PoisListSearchProps = useMemo(
    () => ({
      searchString,
      setSearchString: setSearchString,
      label: interpolate('poisList.search.label'),
      clearButtonAriaLabel: interpolate('poisList.search.clear'),
    }),
    [setSearchString, searchString, interpolate],
  );

  return <Layout pois={filteredPois} searchProps={searchProps} />;
};
