import { Card } from '@radix-ui/themes';
import { Poi } from '@shared/types';
import { FC } from 'react';
import { ButtonWrapper, PoiAddress, PoiName } from './styles';

export type PoisListItemProps = {
  poi: Poi;
  onClick?: () => void;
};

export const PoisListItem: FC<PoisListItemProps> = ({ poi: { address, name }, onClick }) => {
  return (
    <Card asChild>
      <button onClick={onClick}>
        <ButtonWrapper>
          <PoiName>{name}</PoiName>

          <PoiAddress>{address}</PoiAddress>
        </ButtonWrapper>
      </button>
    </Card>
  );
};
