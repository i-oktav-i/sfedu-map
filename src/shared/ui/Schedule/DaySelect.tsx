import * as SegmentedControl from '@radix-ui/themes/components/segmented-control';
import { FC } from 'react';

import { ScheduleDaySelectProps } from '@shared/contracts';

export const DaySelect: FC<ScheduleDaySelectProps> = ({ label, options, selected, onChange }) => {
  return (
    <SegmentedControl.Root
      defaultValue={selected}
      onValueChange={onChange as any}
      aria-label={label}
    >
      {options.map((option) => (
        <SegmentedControl.Item key={option.value} value={option.value}>
          {option.label}
        </SegmentedControl.Item>
      ))}
    </SegmentedControl.Root>
  );
};
