import { createContext } from 'react';
import { YMap } from 'ymaps3';

export const YMapContext = createContext<YMap | null>(null);
