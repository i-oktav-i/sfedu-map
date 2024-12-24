import { Card } from '@radix-ui/themes';
import { Poi } from '@shared/types';
import { FC } from 'react';
import { ButtonWrapper, PoiAddress, PoiName } from './styles';

export type PoisListItemProps = {
  poi: Poi;
};

export const PoisListItem: FC<PoisListItemProps> = ({ poi: { address, name } }) => {
  return (
    <Card asChild>
      <button>
        <ButtonWrapper>
          <PoiName>{name}</PoiName>

          <PoiAddress>{address}</PoiAddress>
        </ButtonWrapper>
      </button>
    </Card>
  );
};
