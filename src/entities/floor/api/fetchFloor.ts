import { requestFloor } from './requestFloor';

export type FetchFloorParams = {
  poiId: string;
  floorId: number;
  abortSignal: AbortSignal;
};

export const fetchFloor = async ({ poiId, floorId, abortSignal }: FetchFloorParams) => {
  try {
    return Promise.any([
      requestFloor({
        poiId,
        floorId,
        extension: 'svg',
        abortSignal,
      }),
      requestFloor({
        poiId,
        floorId,
        extension: 'png',
        abortSignal,
      }),
    ]);
  } catch (error) {
    console.log('Error fetching floor:', error);

    return null;
  }
};
