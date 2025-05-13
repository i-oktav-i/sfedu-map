import { InterpolationClient } from './InterpolationClient';
import { nbsp } from './spesialChars';

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
    weekDays: {
      full: {
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        sunday: 'Sunday',
      },
      short: {
        monday: 'Mon',
        tuesday: 'Tue',
        wednesday: 'Wed',
        thursday: 'Thu',
        friday: 'Fri',
        saturday: 'Sat',
        sunday: 'Sun',
      },
    },
    schedule: {
      title: 'Schedule',
      emptyDay: 'No classes on this day',
      dayTitle: 'Schedule for {{day}}',
      daySelect: 'Select a day',
      timeRange: `{{from}}${nbsp}-${nbsp}{{till}}`,
    },
  },
});
