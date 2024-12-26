import { useEffect, useState } from 'react';

import { enInterpolationClient } from './enLocale';
import { localeClient } from './localeClient';
import { ruInterpolationClient } from './ruLocale';
import { Locale } from './types';

const localesMap = {
  en: enInterpolationClient,
  ru: ruInterpolationClient,
} satisfies Record<Locale, unknown>;

export const useLocale = () => {
  const [locale, setLocale] = useState(localeClient.locale);

  useEffect(() => localeClient.subscribe(setLocale), []);

  return localesMap[locale];
};
