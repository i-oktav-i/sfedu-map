import { SomethingWrongProps } from '@shared/contracts';
import { useLocale } from '@shared/locale';
import { FC } from 'react';

export type SomethingWrongDataProviderProps = {
  Layout: FC<SomethingWrongProps>;
};

export const SomethingWrongDataProvider: FC<SomethingWrongDataProviderProps> = ({ Layout }) => {
  const { interpolate } = useLocale();

  const props = {
    title: interpolate('somethingWrong.title'),
    reloadButtonText: interpolate('somethingWrong.reload'),
    onReload: () => window.location.reload(),
  };

  return <Layout {...props} />;
};
