import { HeaderDataProvider } from '@features/dataProviders';
import { Header } from '@shared/ui';
import { FC } from 'react';

export const HeaderWidget: FC = () => {
  return <HeaderDataProvider Layout={Header} />;
};
