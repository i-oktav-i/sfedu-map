import { Box, Card, Flex, Heading, Text } from '@radix-ui/themes';
import { PoisListProps } from '@shared/contracts';
import { YMapContainer } from '@shared/mapCore';
import { FC } from 'react';

const indent = { initial: '0', sm: '4' };

export const PoisList: FC<PoisListProps> = ({ pois }) => {
  return (
    <Flex
      position={'absolute'}
      top={indent}
      left={indent}
      bottom={indent}
      style={{ zIndex: 1000 }}
      width={{ initial: '100%', sm: '400px' }}
      asChild
    >
      <YMapContainer>
        <Box
          flexGrow={'1'}
          width={{ initial: '100%', sm: '400px' }}
          style={{
            background: 'var(--color-panel-solid)',
            borderRadius: 'var(--radius-5)',
            boxShadow: 'var(--shadow-6)',
          }}
          overflow={'auto'}
        >
          {pois.map(({ address, id, name }) => (
            <Card key={id} asChild style={{ cursor: 'pointer' }}>
              <button>
                <Heading as="h3" weight={'bold'} size={'4'} wrap={'balance'}>
                  {name}
                </Heading>

                <Text color="gray" size={'2'} wrap={'balance'}>
                  {address}
                </Text>
              </button>
            </Card>
          ))}
        </Box>
      </YMapContainer>
    </Flex>
  );
};
