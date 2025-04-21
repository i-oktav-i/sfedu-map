import { Locale } from '@shared/locale';
import { Poi, PoiId } from '@shared/types';
import { LngLat } from 'ymaps3';

const poisListData: ({ id: PoiId; location: LngLat } & Record<
  'name' | 'address',
  Record<Locale, string>
>)[] = [
  {
    id: '1' as PoiId,
    name: {
      [Locale.ru]: 'Институт математики, механики и компьютерных наук имени И. И. Воровича',
      [Locale.en]:
        'Institute of Mathematics, Mechanics and Computer Science named after I. I. Vorovich',
    },
    address: {
      [Locale.ru]: 'улица Мильчакова, 8А, Западный, Ростов-на-Дону',
      [Locale.en]: 'Milchakova Street, 8A, Zapadny, Rostov-on-Don',
    },
    location: [39.628649, 47.216686],
  },
  {
    id: '2' as PoiId,
    name: {
      [Locale.ru]: 'Главный корпус',
      [Locale.en]: 'Main Building',
    },
    address: {
      [Locale.ru]: 'Университетский переулок, 42/105, Ростов-на-Дону, 344022',
      [Locale.en]: 'University Lane, 42/105, Rostov-on-Don, 344022',
    },
    location: [39.728281, 47.224875],
  },
  {
    id: '3' as PoiId,
    name: {
      [Locale.ru]:
        'Институт филологии, журналистики и межкультурной коммуникации, заочное отделение',
      [Locale.en]:
        'Institute of Philology, Journalism and Intercultural Communication, part-time department',
    },
    address: {
      [Locale.ru]: 'Университетский переулок, 93, Ростов-на-Дону',
      [Locale.en]: 'University Lane, 93, Rostov-on-Don',
    },
    location: [39.726808, 47.226772],
  },
];

export const getPoisList = (locale: Locale): Poi[] =>
  poisListData.map((poi) => ({
    id: poi.id,
    name: poi.name[locale],
    address: poi.address[locale],
    location: poi.location,
  }));
