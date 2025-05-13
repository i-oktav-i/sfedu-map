import { InterpolationClient } from './InterpolationClient';
import { nbsp } from './spesialChars';

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
    weekDays: {
      full: {
        monday: 'Понедельник',
        tuesday: 'Вторник',
        wednesday: 'Среда',
        thursday: 'Четверг',
        friday: 'Пятница',
        saturday: 'Суббота',
        sunday: 'Воскресенье',
      },
      short: {
        monday: 'Пн',
        tuesday: 'Вт',
        wednesday: 'Ср',
        thursday: 'Чт',
        friday: 'Пт',
        saturday: 'Сб',
        sunday: 'Вс',
      },
    },
    schedule: {
      title: 'Расписание',
      emptyDay: 'Нет занятий в этот день',
      dayTitle: 'Расписание на {{day}}',
      daySelect: 'Выберите день',
      timeRange: `{{from}}${nbsp}-${nbsp}{{till}}`,
    },
  },
});
