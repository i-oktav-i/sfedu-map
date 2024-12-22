import { ruInterpolationClient } from './ruLocale';

const useLocaleReturn = { interpolate: ruInterpolationClient.interpolate } as const;

export const useLocale = () => {
  return useLocaleReturn;
};
