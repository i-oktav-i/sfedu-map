import {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { fetchFloors } from '@entities/floor';
import { FloorsPlanProps } from '@shared/contracts';
import { useLocale } from '@shared/locale';
import { PoiId } from '@shared/types';
import { defferPromise } from '@shared/utils';

export type FloorsPlanDataProviderProps = {
  poiId: PoiId;
  onInteractiveElementClick: (id: string) => void;
  currentFloorIndex: number;
  setCurrentFloorIndex: Dispatch<SetStateAction<number>>;
  Layout: FC<FloorsPlanProps>;
};

export const FloorsPlanDataProvider: FC<FloorsPlanDataProviderProps> = ({
  Layout,
  poiId,
  currentFloorIndex,
  setCurrentFloorIndex,
  onInteractiveElementClick,
}) => {
  const htmlContainerRef = useRef<HTMLElement>(null);

  const [plansHtml, setPlansHtml] = useState<(string | null)[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { interpolate } = useLocale();

  const handleUpClick = useCallback(() => {
    setCurrentFloorIndex((current) =>
      current <= (plansHtml?.length ?? 0) - 1 ? current + 1 : current,
    );
  }, [plansHtml, setCurrentFloorIndex]);

  const handleDownClick = useCallback(() => {
    setCurrentFloorIndex((current) => (current > 0 ? current - 1 : current));
  }, [setCurrentFloorIndex]);

  const html = plansHtml ? plansHtml[currentFloorIndex] : null;
  const humanReadableFloorIndex = currentFloorIndex + 1;

  const nextButtonProps = useMemo(() => {
    const isLastFloor = !plansHtml?.length || currentFloorIndex === (plansHtml?.length ?? 0) - 1;

    return {
      text: isLastFloor
        ? interpolate('floorsPlan.nextFloor')
        : interpolate('floorsPlan.goToFloor', {
            values: { floorNumber: humanReadableFloorIndex + 1 },
          }),
      onClick: isLastFloor ? undefined : handleUpClick,
    };
  }, [currentFloorIndex, handleUpClick, interpolate]);

  const prevButtonProps = useMemo(() => {
    const isFirstFloor = currentFloorIndex === 0;

    return {
      text: isFirstFloor
        ? interpolate('floorsPlan.prevFloor')
        : interpolate('floorsPlan.goToFloor', {
            values: { floorNumber: humanReadableFloorIndex - 1 },
          }),
      onClick: isFirstFloor ? undefined : handleDownClick,
    };
  }, [currentFloorIndex, handleDownClick, interpolate]);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    setIsLoading(true);
    setPlansHtml(null);

    defferPromise(fetchFloors({ poiId, abortSignal: signal }), 300)
      .then((floors) => setPlansHtml(floors))
      .finally(() => setIsLoading(false));

    return () => {
      abortController.abort('FloorsPlanDataProvider unmounted');
    };
  }, [poiId]);

  useEffect(() => {
    setCurrentFloorIndex(0);
  }, [poiId]);

  useEffect(() => {
    const container = htmlContainerRef.current;

    if (!container) return;

    const interactiveElements = container.querySelectorAll<HTMLElement>('[data-interactive]');

    const handleInteraction = (event: Event) => {
      event.preventDefault();
      event.stopPropagation();

      const target = event.currentTarget as HTMLElement;

      const id = target.getAttribute('id');

      if (!id) return;

      onInteractiveElementClick(id);
    };

    const handleClick = (event: MouseEvent) => handleInteraction(event);

    const handleSpaceKey = (event: KeyboardEvent) => {
      if (event.key !== ' ') return;

      handleInteraction(event);
    };

    const handleEnterKey = (event: KeyboardEvent) => {
      if (event.key !== 'Enter') return;

      handleInteraction(event);
    };

    interactiveElements.forEach((element) => {
      element.setAttribute('tabindex', '0');
      element.setAttribute('role', 'button');
      element.setAttribute('type', 'button');
      element.setAttribute(
        'aria-label',
        interpolate('floorsPlan.classRoomAriaLabel', {
          values: { id: element.getAttribute('data-classroom') || element.getAttribute('id')! },
        }),
      );
      element.addEventListener('click', handleClick);
      element.addEventListener('keyup', handleSpaceKey);
      element.addEventListener('keydown', handleEnterKey);
      element.addEventListener('keypress', handleEnterKey);
    });

    return () => {
      interactiveElements.forEach((element) => {
        element.removeEventListener('click', handleClick);
        element.removeEventListener('keyup', handleSpaceKey);
        element.removeEventListener('keydown', handleEnterKey);
        element.removeEventListener('keypress', handleEnterKey);
      });
    };
  }, [html, currentFloorIndex, onInteractiveElementClick, interpolate]);

  return (
    <Layout
      ref={htmlContainerRef}
      missingFloorText={interpolate('floorsPlan.missingFloorPlan')}
      loadingText={interpolate('floorsPlan.loading')}
      html={html}
      title={interpolate('floorsPlan.floorNumber', {
        values: { floorNumber: humanReadableFloorIndex },
      })}
      nextButtonProps={nextButtonProps}
      prevButtonProps={prevButtonProps}
      isLoading={isLoading}
    />
  );
};
