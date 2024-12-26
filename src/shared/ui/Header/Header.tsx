import { HeaderProps } from '@shared/contracts';
import { FC } from 'react';
import { HeaderSelect } from './HeaderSelect';
import { GridContainer, LogoContainer, SelectsContainer, Title } from './styles';

export const Header: FC<HeaderProps> = ({ title, themeSelectProps, localeSelectProps }) => {
  return (
    <GridContainer asChild>
      <header>
        <LogoContainer asChild>
          <img src={'/sfedu-map/favicon.svg'} alt={'logo'} />
        </LogoContainer>

        <Title>{title}</Title>

        <SelectsContainer>
          <HeaderSelect {...themeSelectProps} />

          <HeaderSelect {...localeSelectProps} />
        </SelectsContainer>
      </header>
    </GridContainer>
  );
};
