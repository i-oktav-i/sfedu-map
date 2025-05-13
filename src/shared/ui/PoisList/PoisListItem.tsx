import { FC } from 'react';

import { PoisListItemProps } from '@shared/contracts';
import { ButtonWrapper, ListItemContainer, PoiAddress, PoiName } from './tokens';

export const PoisListItem: FC<PoisListItemProps> = ({ address, name, onClick }) => {
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
