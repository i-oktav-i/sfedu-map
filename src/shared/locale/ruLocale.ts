import { InterpolationClient } from './InterpolationClient';

export const ruInterpolationClient = new InterpolationClient({
  resource: {
    header: {
      pageTitle: 'Карта кампусов',
      themeSelect: {
        light: 'Светлая',
        dark: 'Темная',
        auto: 'Системная',
      },
      localeSelect: {
        en: 'English',
        ru: 'Русский',
      },
    },
    poisList: {
      onMap: 'На карте',
      likeList: 'Cписком',
    },
    somethingWrong: {
      title: 'Что-то пошло не так',
      reload: 'Перезагрузить страницу',
    },
    floorsPlan: {
      classRoomAriaLabel: 'Аудитория №{{id}}',
      missingFloorPlan: 'Не удалось загрузить план этажа',
      loading: 'Загрузка плана этажей',
      floorNumber: 'Этаж {{ floorNumber }}',
      nextFloor: 'Следующий этаж',
      prevFloor: 'Предыдущий этаж',
      goToFloor: 'Перейти на этаж {{ floorNumber }}',
    },
  },
});
