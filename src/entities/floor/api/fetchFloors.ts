import { requestFloor } from './requestFloor';
import { requestFloorsConfig } from './requestFloorsConfig';

export type FetchFloorsParams = {
  poiId: string;
  abortSignal: AbortSignal;
};

export const fetchFloors = async ({ poiId, abortSignal }: FetchFloorsParams) => {
  try {
    const { extensions } = await requestFloorsConfig(poiId, abortSignal);

    const floors = await Promise.allSettled(
      extensions.map((extension, index) =>
        requestFloor({
          poiId,
          floorId: index + 1,
          extension,
          abortSignal,
        }),
      ),
    );

    floors.forEach((floor, index) => {
      if (floor.status === 'rejected') {
        console.log(`Error fetching floor ${index}:`, floor.reason);
      }
    });

    return floors.map((floor) => (floor.status === 'fulfilled' ? floor.value : null));
  } catch (error) {
    console.log('Error fetching floors:', error);

    return null;
  }
};
