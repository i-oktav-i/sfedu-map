import { InterpolationClient } from './InterpolationClient';

export const enInterpolationClient = new InterpolationClient({
  resource: {
    header: {
      pageTitle: 'Campuses map',
      themeSelect: {
        light: 'Light',
        dark: 'Dark',
        auto: 'System',
      },
      localeSelect: {
        en: 'English',
        ru: 'Русский',
      },
    },
    poisList: {
      onMap: 'On map',
      likeList: 'As a list',
    },
    somethingWrong: {
      title: 'Something went wrong',
      reload: 'Reload the page',
    },
    floorsPlan: {
      classRoomAriaLabel: 'Classroom №{{id}}',
      missingFloorPlan: 'Failed to load the floor plan',
      loading: 'Loading floors plan',
      floorNumber: 'Floor {{ floorNumber }}',
      nextFloor: 'Next floor',
      prevFloor: 'Previous floor',
      goToFloor: 'Go to floor {{ floorNumber }}',
    },
  },
});
