import { PoiId } from '@shared/types';

type FloorsConfig = {
  extensions: string[];
};

export const requestFloorsConfig = async (poiId: PoiId, abortSignal: AbortSignal) => {
  const response = await fetch(`/sfedu-map/plans/${poiId}/info.json`, { signal: abortSignal });

  if (!response.ok) {
    throw new Error(`Error fetching floors config: ${response.statusText}`);
  }

  return response.json() as Promise<FloorsConfig>;
};
