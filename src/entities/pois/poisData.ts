import { LngLat } from 'ymaps3';

import { Locale } from '@shared/locale';
import { PoiId, PoiType } from '@shared/types';

export default [
  {
    id: '1' as PoiId,
    type: PoiType.university,
    address: {
      [Locale.ru]: 'Ростов-на-Дону, Большая Садовая улица, 105/42',
      [Locale.en]: 'Rostov-on-Don, Bolshaya Sadovaya street, 105/42',
    },
    location: [39.728628, 47.224677],
    parts: {
      [Locale.ru]: [
        'ЮФУ, главный корпус',
        'Центр международных проектов и программ Южного федерального университета',
      ],
      [Locale.en]: [
        'SFedU, main building',
        'Center for International Projects and Programs of Southern Federal University',
      ],
    },
  },
  {
    id: '2' as PoiId,
    type: PoiType.university,
    address: {
      [Locale.ru]: 'Ростов-на-Дону, Будённовский проспект, 39',
      [Locale.en]: 'Rostov-on-Don, Budennovsky avenue, 39',
    },
    location: [39.706127, 47.222783],
    parts: {
      [Locale.ru]: ['Южный федеральный университет, академия архитектуры и искусств'],
      [Locale.en]: ['Southern Federal University, Academy of Architecture and Arts'],
    },
  },
  {
    id: '3' as PoiId,
    type: PoiType.university,
    address: {
      [Locale.ru]: 'Ростов-на-Дону, Днепровский переулок, 116',
      [Locale.en]: 'Rostov-on-Don, Dneprovsky lane, 116',
    },
    location: [39.758829, 47.286076],
    parts: {
      [Locale.ru]: [
        'ЮФУ, академия психологии и педагогики',
        'Южный федеральный университет. Институт философии и социально-политических наук',
      ],
      [Locale.en]: [
        'SFedU, Academy of Psychology and Pedagogy',
        'Southern Federal University. Institute of Philosophy and Socio-Political Sciences',
      ],
    },
  },
  {
    id: '4' as PoiId,
    type: PoiType.university,
    address: {
      [Locale.ru]: 'Ростов-на-Дону, Западный, улица Мильчакова, 8А',
      [Locale.en]: 'Rostov-on-Don, Zapadny, Milchakova street, 8A',
    },
    location: [39.628701, 47.216716],
    parts: {
      [Locale.ru]: ['ЮФУ, институт математики, механики и компьютерных наук имени И.И. Воровича'],
      [Locale.en]: [
        'SFedU, Institute of Mathematics, Mechanics and Computer Sciences named after I.I. Vorovich',
      ],
    },
  },
  {
    id: '5' as PoiId,
    type: PoiType.university,
    address: {
      [Locale.ru]: 'Ростов-на-Дону, микрорайон Западный, улица Зорге, 5',
      [Locale.en]: 'Rostov-on-Don, Zorge street, 5',
    },
    location: [39.632695, 47.215581],
    parts: {
      [Locale.ru]: ['Академия физической культуры и спорта Южного федерального университета'],
      [Locale.en]: ['Academy of Physical Culture and Sports of Southern Federal University'],
    },
  },
  {
    id: '6' as PoiId,
    type: PoiType.university,
    address: {
      [Locale.ru]: 'Ростов-на-Дону, Нахичевань, улица 23-я Линия, 43',
      [Locale.en]: 'Rostov-on-Don, Nakhichevan, 23rd Line street, 43',
    },
    location: [39.767578, 47.22563],
    parts: {
      [Locale.ru]: ['ЮФУ, Высшая школа бизнеса'],
      [Locale.en]: ['SFedU, Higher School of Business'],
    },
  },
  {
    id: '7' as PoiId,
    type: PoiType.university,
    address: {
      [Locale.ru]: 'Ростов-на-Дону, проспект Михаила Нагибина, 13',
      [Locale.en]: 'Rostov-on-Don, Mikhail Nagibin Avenue, 13',
    },
    location: [39.711909, 47.245595],
    parts: {
      [Locale.ru]: [
        'Южный федеральный университет. Академия психологии и педагогики',
        'ЮФУ, учебный корпус',
      ],
      [Locale.en]: [
        'Southern Federal University. Academy of Psychology and Pedagogy',
        'SFedU, educational building',
      ],
    },
  },
  {
    id: '8' as PoiId,
    type: PoiType.university,
    address: {
      [Locale.ru]: 'Ростов-на-Дону, проспект Стачки, 194/1',
      [Locale.en]: 'Rostov-on-Don, Stachki Avenue, 194/1',
    },
    location: [39.630558, 47.215],
    parts: {
      [Locale.ru]: [
        'Южный федеральный университет. Академия биологии и биотехнологии имени Д.И. Ивановского, кафедра генетики',
        'ЮФУ, академия биологии и биотехнологии имени Д.И. Ивановского, Институт биомедицинских информационных технологий',
      ],
      [Locale.en]: [
        'Southern Federal University. Academy of Biology and Biotechnology named after D.I. Ivanovsky, Department of Genetics',
        'SFedU, Academy of Biology and Biotechnology named after D.I. Ivanovsky, Institute of Biomedical Information Technologies',
      ],
    },
  },
  {
    id: '9' as PoiId,
    type: PoiType.university,
    address: {
      [Locale.ru]: 'Ростов-на-Дону, проспект Стачки, 194/2',
      [Locale.en]: 'Rostov-on-Don, Stachki Avenue, 194/2',
    },
    location: [39.629748, 47.215545],
    parts: {
      [Locale.ru]: [
        'Научно-исследовательский институт физической и органической химии Южного федерального университета',
      ],
      [Locale.en]: [
        'Research Institute of Physical and Organic Chemistry of Southern Federal University',
      ],
    },
  },
  {
    id: '10' as PoiId,
    type: PoiType.university,
    address: {
      [Locale.ru]: 'Ростов-на-Дону, Соборный переулок, 26/71',
      [Locale.en]: 'Rostov-on-Don, Soborny Lane, 26/71',
    },
    location: [39.629423, 47.213936],
    parts: {
      [Locale.ru]: [
        'ЮФУ, факультет управления, кафедра управления развитием пространственно-экономических систем',
      ],
      [Locale.en]: [
        'SFedU, Faculty of Management, Department of Spatial and Economic Systems Development Management',
      ],
    },
  },
  {
    id: '11' as PoiId,
    type: PoiType.university,
    address: {
      [Locale.ru]: 'Ростов-на-Дону, улица Максима Горького, 75',
      [Locale.en]: 'Rostov-on-Don, Maxim Gorky street, 75',
    },
    location: [39.703098, 47.224416],
    parts: {
      [Locale.ru]: [
        'Факультет технологии изобразительного искусства и профессионального образования Южного федерального университета',
      ],
      [Locale.en]: [
        'Faculty of Technology of Fine Arts and Professional Education of Southern Federal University',
      ],
    },
  },
  {
    id: '12' as PoiId,
    type: PoiType.university,
    address: {
      [Locale.ru]: 'Ростов-на-Дону, Филимоновская улица, 137',
      [Locale.en]: 'Rostov-on-Don, Filimonovskaya street, 137',
    },
    location: [39.707807, 47.230481],
    parts: {
      [Locale.ru]: ['Южный федеральный университет, академия архитектуры и искусств'],
      [Locale.en]: ['Southern Federal University, Academy of Architecture and Arts'],
    },
  },
  {
    id: '13' as PoiId,
    type: PoiType.university,
    address: {
      [Locale.ru]: 'Ростовская область, Новошахтинск, улица 40 лет Октября, 2',
      [Locale.en]: 'Rostov region, Novoshakhtinsk, 40 Let Oktyabrya street, 2',
    },
    location: [39.924504, 47.77874],
    parts: {
      [Locale.ru]: ['Южный федеральный университет. Административный корпус'],
      [Locale.en]: ['Southern Federal University. Administrative building'],
    },
  },
  {
    id: '14' as PoiId,
    type: PoiType.university,
    address: {
      [Locale.ru]: 'Ростовская область, Новошахтинск, улица 40 лет Октября, 4',
      [Locale.en]: 'Rostov region, Novoshakhtinsk, 40 Let Oktyabrya street, 4',
    },
    location: [39.925023, 47.779133],
    parts: {
      [Locale.ru]: ['Южный федеральный университет, филиал'],
      [Locale.en]: ['Southern Federal University, branch'],
    },
  },
  {
    id: '15' as PoiId,
    type: PoiType.university,
    address: {
      [Locale.ru]: 'Ростовская область, Таганрог, Греческая улица, 1',
      [Locale.en]: 'Rostov region, Taganrog, Grecheskaya street, 1',
    },
    location: [38.94396, 47.204842],
    parts: {
      [Locale.ru]: ['Ита ЮФУ, корпус К'],
      [Locale.en]: ['ITA SFedU, building K'],
    },
  },
  {
    id: '16' as PoiId,
    type: PoiType.university,
    address: {
      [Locale.ru]: 'Ростовская область, Таганрог, Некрасовский переулок, 44',
      [Locale.en]: 'Rostov region, Taganrog, Nekrasovsky lane, 44',
    },
    location: [38.935125, 47.20218],
    parts: {
      [Locale.ru]: [
        'ЮФУ, корпус Д',
        'ЮФУ ГОУ ВПО Таганрогский Технологический институт',
        'ЮФУ, административно-учебный корпус',
        'ЮФУ, лаборатория кафедры физики',
      ],
      [Locale.en]: [
        'SFedU, building D',
        'SFedU Taganrog Technological Institute',
        'SFedU, administrative and educational building',
        'SFedU, physics department laboratory',
      ],
    },
  },
  {
    id: '17' as PoiId,
    type: PoiType.university,
    address: {
      [Locale.ru]: 'Ростовская область, Таганрог, Петровская улица, 81',
      [Locale.en]: 'Rostov region, Taganrog, Petrovskaya street, 81',
    },
    location: [38.927168, 47.216187],
    parts: {
      [Locale.ru]: ['ТТИ ЮФУ, корпус В'],
      [Locale.en]: ['TTI SFedU, building V'],
    },
  },
  {
    id: '18' as PoiId,
    type: PoiType.university,
    address: {
      [Locale.ru]: 'Ростовская область, Таганрог, улица Чехова, 2',
      [Locale.en]: 'Rostov region, Taganrog, Chekhov street, 2',
    },
    location: [38.943871, 47.204012],
    parts: {
      [Locale.ru]: [
        'ЮФУ, инженерно-технологическая академия, институт компьютерных технологий и информационной безопасности',
        'ЮФУ, корпус И',
      ],
      [Locale.en]: [
        'SFedU, Engineering and Technology Academy, Institute of Computer Technologies and Information Security',
        'SFedU, building I',
      ],
    },
  },
  {
    id: '19' as PoiId,
    type: PoiType.university,
    address: {
      [Locale.ru]: 'Ростовская область, Таганрог, улица Чехова, 22',
      [Locale.en]: 'Rostov region, Taganrog, Chekhov street, 22',
    },
    location: [38.93974, 47.205395],
    parts: {
      [Locale.ru]: [
        'Институт управления в экономических, экологических и социальных системах',
        'ЮФУ, институт управления в экономических, экологических и социальных системах',
      ],
      [Locale.en]: [
        'Institute of Management in Economic, Environmental and Social Systems',
        'SFedU, Institute of Management in Economic, Environmental and Social Systems',
      ],
    },
  },
  {
    id: '20' as PoiId,
    type: PoiType.university,
    address: {
      [Locale.ru]: 'Ростовская область, Таганрог, улица Шевченко, 2',
      [Locale.en]: 'Rostov region, Taganrog, Shevchenko street, 2',
    },
    location: [38.944332, 47.204567],
    parts: {
      [Locale.ru]: ['ЮФУ, институт нанотехнологий, электроники и приборостроения'],
      [Locale.en]: ['SFedU, Institute of Nanotechnology, Electronics and Instrument Engineering'],
    },
  },
  {
    id: '21' as PoiId,
    type: PoiType.university,
    address: {
      [Locale.ru]: 'Ростовская область, Таганрог, улица Энгельса, 1',
      [Locale.en]: 'Rostov region, Taganrog, Engels street, 1',
    },
    location: [38.9356, 47.203023],
    parts: {
      [Locale.ru]: [
        'ЮФУ, институт радиотехнических систем и управления',
        'ЮФУ, учебно-лабораторный корпус Г',
      ],
      [Locale.en]: [
        'SFedU, Institute of Radio Engineering Systems and Management',
        'SFedU, Educational and Laboratory Building G',
      ],
    },
  },
  {
    id: '0' as PoiId,
    type: PoiType.university,
    address: {
      [Locale.ru]: 'Республика Дагестан, Махачкала, улица Юсупова, 53А',
      [Locale.en]: 'Republic of Dagestan, Makhachkala, Yusupova street, 53A',
    },
    location: [47.512812, 42.967273],
    parts: {
      [Locale.ru]: ['ЮФУ, филиал'],
      [Locale.en]: ['SFedU, branch'],
    },
  },
  {
    id: '1000',
    type: PoiType.dorm,
    address: {
      [Locale.ru]: 'Ростов-на-Дону, Днепровский переулок, 118',
      [Locale.en]: 'Rostov-on-Don, Dneprovskiy Lane, 118',
    },
    location: [39.758004, 47.286451],
    parts: {
      [Locale.ru]: ['Общежитие № 1 Пи ЮФУ'],
      [Locale.en]: ['Dormitory No. 1 PI SFedU'],
    },
  },
  {
    id: '1001',
    type: PoiType.dorm,
    address: {
      [Locale.ru]: 'Ростов-на-Дону, улица Зорге, 21Ж',
      [Locale.en]: 'Rostov-on-Don, Zorge Street, 21Zh',
    },
    location: [39.628599, 47.224128],
    parts: {
      [Locale.ru]: ['Общежитие ЮФУ'],
      [Locale.en]: ['SFedU Dormitory'],
    },
  },
  {
    id: '1002',
    type: PoiType.dorm,
    address: {
      [Locale.ru]: 'Ростов-на-Дону, улица Зорге, 28',
      [Locale.en]: 'Rostov-on-Don, Zorge Street, 28',
    },
    location: [39.634716, 47.216284],
    parts: {
      [Locale.ru]: ['ЮФУ, общежитие № 4а'],
      [Locale.en]: ['SFedU, Dormitory No. 4a'],
    },
  },
  {
    id: '1003',
    type: PoiType.dorm,
    address: {
      [Locale.ru]: 'Ростов-на-Дону, улица Зорге, 28/2',
      [Locale.en]: 'Rostov-on-Don, Zorge Street, 28/2',
    },
    location: [39.636546, 47.215514],
    parts: {
      [Locale.ru]: ['ЮФУ, общежитие № 5А', 'ЮФУ, общежитие № 5В'],
      [Locale.en]: ['SFedU, Dormitory No. 5A', 'SFedU, Dormitory No. 5V'],
    },
  },
] as {
  id: PoiId;
  type: PoiType;
  address: Record<Locale, string>;
  location: LngLat;
  parts: Record<Locale, string[]>;
}[];
