import { FC, useEffect, useRef } from 'react';

import { FloorPlanProps } from '@shared/contracts';

import { FloorPlanContainer } from './tokens';

export const FloorPlan: FC<FloorPlanProps> = ({
  html,
  onInteractiveElementClick,
  classroomAriaLabelPrefix,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const interactiveElements = container.querySelectorAll<HTMLElement>('[data-interactive]');

    const handleInteraction = (target: HTMLElement) => {
      const id = target.getAttribute('id');

      if (!id) return;

      onInteractiveElementClick(id);
    };

    const handleClick = (event: MouseEvent) => {
      event.stopPropagation();

      handleInteraction(event.target as HTMLElement);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;

      event.preventDefault();
      event.stopPropagation();

      handleInteraction(event.target as HTMLElement);
    };

    interactiveElements.forEach((element) => {
      element.setAttribute('tabindex', '0');
      element.setAttribute('role', 'button');
      element.setAttribute('type', 'button');
      element.setAttribute(
        'aria-label',
        `${classroomAriaLabelPrefix}${element.getAttribute('id')}`,
      );
      element.addEventListener('click', handleClick);
      element.addEventListener('keydown', handleKeyDown);
    });

    return () => {
      interactiveElements.forEach((element) => {
        element.removeEventListener('click', handleClick);
        element.removeEventListener('keydown', handleKeyDown);
      });
    };
  }, [html, onInteractiveElementClick]);

  return <FloorPlanContainer ref={containerRef} dangerouslySetInnerHTML={{ __html: html }} />;
};
