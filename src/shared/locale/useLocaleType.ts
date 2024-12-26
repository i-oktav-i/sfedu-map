import { useEffect, useState } from 'react';

import { localeClient } from './localeClient';

export const useLocaleType = () => {
  const [locale, setLocale] = useState(localeClient.locale);

  useEffect(() => localeClient.subscribe(setLocale), []);

  return {
    locale,
    setLocale: localeClient.setLocale,
  };
};
