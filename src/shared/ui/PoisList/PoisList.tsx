import { SegmentedControl } from '@radix-ui/themes';
import { FC, useState } from 'react';

import { PoisListProps } from '@shared/contracts';
import { useLocale } from '@shared/locale';

import { uniqueId } from '@shared/utils';
import { ListItem, UList } from '../List';
import { PoisListItem } from './PoisListItem';
import { Search } from './Search';
import { card, listWrapper, toggler } from './styles.css';
import { Container, ListWrapper, SearchInputContainer } from './tokens';

type ViewType = 'onMap' | 'likeList';

const listId = `list-${uniqueId()}`;

export const PoisList: FC<PoisListProps> = ({ pois, searchProps }) => {
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
        aria-expanded={isListViewType}
        aria-controls={listId}
      >
        <SegmentedControl.Item value="onMap">{interpolate('poisList.onMap')}</SegmentedControl.Item>
        <SegmentedControl.Item value="likeList">
          {interpolate('poisList.likeList')}
        </SegmentedControl.Item>
      </SegmentedControl.Root>

      <ListWrapper
        className={listWrapper({ visible: isListViewType })}
        aria-hidden={!isListViewType}
        id={listId}
      >
        <SearchInputContainer>
          <Search {...searchProps} />
        </SearchInputContainer>

        <UList>
          {pois.map((poi) => (
            <ListItem key={poi.address + poi.name}>
              <PoisListItem {...poi} />
            </ListItem>
          ))}
        </UList>
      </ListWrapper>
    </Container>
  );
};
