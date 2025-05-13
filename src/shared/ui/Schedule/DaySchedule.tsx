import * as DataList from '@radix-ui/themes/components/data-list';
import { FC } from 'react';

import { Flex, Text, VisuallyHidden } from '@radix-ui/themes';
import { DayScheduleProps } from '@shared/contracts';
export const DaySchedule: FC<DayScheduleProps> = ({ label, items: lessons }) => {
  return (
    <>
      <VisuallyHidden>
        <p>{label}</p>
      </VisuallyHidden>

      <DataList.Root>
        {lessons.map((lesson) => (
          <DataList.Item key={lesson.label}>
            <DataList.Label>{lesson.label}</DataList.Label>
            <DataList.Value>
              <Flex direction="column" gap="1">
                {lesson.lessons.map((lesson) => (
                  <Text key={lesson.name}>{lesson.name}</Text>
                ))}
              </Flex>
            </DataList.Value>
          </DataList.Item>
        ))}
      </DataList.Root>
    </>
  );
};
