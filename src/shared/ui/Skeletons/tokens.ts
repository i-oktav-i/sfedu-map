import { Skeleton } from '@radix-ui/themes';
import { provideDefaultProps } from '@shared/utils';

export const TextLineSkeleton = provideDefaultProps(Skeleton, {
  width: '300px',
});
