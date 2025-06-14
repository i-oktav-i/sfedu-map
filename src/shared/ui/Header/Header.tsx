import { HeaderProps } from '@shared/contracts';
import { FC } from 'react';
import { HeaderSelect } from './HeaderSelect';
import { GridContainer, HeaderWrapper, LogoContainer, SelectsContainer, Title } from './tokens';

import { localeIconsMap, themeIconsMap } from './icons';

export const Header: FC<HeaderProps> = ({ title, themeSelectProps, localeSelectProps }) => {
  return (
    <HeaderWrapper>
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
    </HeaderWrapper>
  );
};
