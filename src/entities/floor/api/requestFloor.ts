type RequestFloorParams = {
  poiId: string;
  floorId: number;
  extension: string;
  abortSignal: AbortSignal;
};

export const requestFloor = async ({
  poiId,
  floorId,
  extension,
  abortSignal,
}: RequestFloorParams) => {
  const response = await fetch(`/sfedu-map/plans/${poiId}/${floorId}.${extension}`, {
    signal: abortSignal,
  });

  if (!response.ok) {
    throw new Error(`Error fetching floor ${floorId} for poi ${poiId}: ${response.statusText}`);
  }

  return response.text();
};
