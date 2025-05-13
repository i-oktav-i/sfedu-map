import { SegmentedControl } from '@radix-ui/themes';
import { FC, useState } from 'react';

import { PoisListProps } from '@shared/contracts';
import { useLocale } from '@shared/locale';

import { PoisListItem } from './PoisListItem';
import { card, listWrapper, toggler } from './styles.css';
import { Container, ListWrapper } from './tokens';

type ViewType = 'onMap' | 'likeList';

export const PoisList: FC<PoisListProps> = ({ pois }) => {
  const [viewType, setViewType] = useState<ViewType>('onMap');

  const { interpolate } = useLocale();

  const isListViewType = viewType === 'likeList';

  return (
    <Container className={card({ expanded: isListViewType })}>
      <SegmentedControl.Root
        value={viewType}
        onValueChange={setViewType as any}
        size="3"
        className={toggler}
      >
        <SegmentedControl.Item value="onMap">{interpolate('poisList.onMap')}</SegmentedControl.Item>
        <SegmentedControl.Item value="likeList">
          {interpolate('poisList.likeList')}
        </SegmentedControl.Item>
      </SegmentedControl.Root>

      <ListWrapper asChild className={listWrapper({ visible: isListViewType })}>
        <ul>
          {pois.map((poi) => (
            <li key={poi.name}>
              <PoisListItem {...poi} />
            </li>
          ))}
        </ul>
      </ListWrapper>
    </Container>
  );
};
