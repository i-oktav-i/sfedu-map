import { HeaderProps } from '@shared/contracts';
import { FC } from 'react';
import { HeaderThemeSelect } from './HeaderThemeSelect';
import { GridContainer, LogoContainer, Title } from './styles';

export const Header: FC<HeaderProps> = ({ title, themeSelectProps }) => {
  return (
    <GridContainer asChild>
      <header>
        <LogoContainer asChild>
          <img src={'/favicon.svg'} alt={'logo'} />
        </LogoContainer>

        <Title>{title}</Title>

        <HeaderThemeSelect {...themeSelectProps} />
      </header>
    </GridContainer>
  );
};
