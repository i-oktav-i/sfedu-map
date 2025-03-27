import { HeaderProps } from '@shared/contracts';
import { FC } from 'react';
import { HeaderSelect } from './HeaderSelect';
import { GridContainer, LogoContainer, SelectsContainer, Title } from './styles';

import { localeIconsMap, themeIconsMap } from './icons';

export const Header: FC<HeaderProps> = ({ title, themeSelectProps, localeSelectProps }) => {
  return (
    <GridContainer asChild>
      <header>
        <LogoContainer asChild>
          <img src="/sfedu-map/favicon.svg" alt="logo" />
        </LogoContainer>

        <title>{title}</title>
        <Title>{title}</Title>

        <SelectsContainer>
          <HeaderSelect {...themeSelectProps} icons={themeIconsMap} />

          <HeaderSelect {...localeSelectProps} icons={localeIconsMap} />
        </SelectsContainer>
      </header>
    </GridContainer>
  );
};
