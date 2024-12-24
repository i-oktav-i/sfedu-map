import { PoisListProps } from '@shared/contracts';
import { YMapContainer } from '@shared/mapCore';
import { FC } from 'react';
import { PoisListItem } from './PoisListItem';
import { Container, ListWrapper } from './styles';

export const PoisList: FC<PoisListProps> = ({ pois }) => {
  return (
    <Container asChild>
      <YMapContainer>
        <ListWrapper asChild>
          <ul>
            {pois.map((poi) => (
              <li key={poi.id}>
                <PoisListItem poi={poi} />
              </li>
            ))}
          </ul>
        </ListWrapper>
      </YMapContainer>
    </Container>
  );
};
