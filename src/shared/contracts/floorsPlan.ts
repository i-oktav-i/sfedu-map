import { Ref } from 'react';

export type FloorsPlanProps = {
  /**
   * Может быть только `<svg>` или `<img>` тегами.
   */
  html: string | null;
  isLoading: boolean;
  loadingText: string | null;
  missingFloorText: string;
  title: string;
  /** Контейнер содержащий переданный `html` */
  ref: Ref<HTMLElement | null>;
} & Record<'nextButtonProps' | 'prevButtonProps', { text: string; onClick?: () => void }>;
