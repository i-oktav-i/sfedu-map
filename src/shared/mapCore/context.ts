import { RefObject, createContext } from 'react';
import { YMap } from 'ymaps3';

export const YMapContext = createContext<RefObject<YMap | null>>({ current: null });
