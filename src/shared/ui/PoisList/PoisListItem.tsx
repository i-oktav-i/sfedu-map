import { Poi } from '@shared/types';
import { FC } from 'react';
import { ButtonWrapper, ListItemContainer, PoiAddress, PoiName } from './tokens';

export type PoisListItemProps = {
  poi: Poi;
  onClick?: () => void;
};

export const PoisListItem: FC<PoisListItemProps> = ({ poi: { address, name }, onClick }) => {
  return (
    <ListItemContainer asChild>
      <button onClick={onClick}>
        <ButtonWrapper>
          <PoiName>{name}</PoiName>

          <PoiAddress>{address}</PoiAddress>
        </ButtonWrapper>
      </button>
    </ListItemContainer>
  );
};
