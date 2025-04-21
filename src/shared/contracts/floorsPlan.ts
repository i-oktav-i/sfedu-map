export type FloorsPlanProps = {
  /**
   * Массив строк содержащих разметку для просмотра плана этажа.
   *
   * Может быть только `<svg>` или `<img>` тегами.
   */
  plansHtmlPromise: Promise<(string | null)[] | null>;
  loadingText: string;
  missingFloorText: string;
} & Pick<FloorPlanProps, 'onInteractiveElementClick' | 'classroomAriaLabelPrefix'>;

export type FloorPlanProps = {
  /**
   * Может быть только `<svg>` или `<img>` тегами.
   */
  html: string;
  onInteractiveElementClick: (id: string) => void;
  classroomAriaLabelPrefix: string;
};
