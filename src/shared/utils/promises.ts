export const defferPromise = <T>(promise: Promise<T>, timeout: number) => {
  const { promise: timeoutPromise, resolve } = Promise.withResolvers();

  setTimeout(resolve, timeout);

  return Promise.all([promise, timeoutPromise]).then(([result]) => result);
};

export const createMicroTask = <T>(callback: () => T) => {
  return new Promise<T>((resolve) => {
    Promise.resolve().then(() => resolve(callback()));
  });
};

export const createMacroTask = <T>(callback: () => T, abortSignal?: AbortSignal) => {
  if (abortSignal?.aborted) return Promise.reject(new Error('Aborted'));

  const { promise, resolve, reject } = Promise.withResolvers<T>();

  const timeoutId = setTimeout(() => {
    cleanup();
    resolve(callback());
  }, 0);

  const onAbort = () => {
    clearTimeout(timeoutId);
    cleanup();
    reject(new Error('Aborted'));
  };

  function cleanup() {
    abortSignal?.removeEventListener('abort', onAbort);
  }

  abortSignal?.addEventListener('abort', onAbort);

  return promise;
};

const macroTasksGenerator = function* <T, U>(
  array: T[],
  mapper: (item: T, index: number, ctx: T[]) => U,
  abortSignal?: AbortSignal,
) {
  for (let index = 0; index < array.length; index++) {
    const item = array[index];

    if (abortSignal?.aborted) {
      throw new Error('Aborted');
    }

    yield createMacroTask(() => mapper(item, index, array), abortSignal);
  }
};

export const lazyMap = <T, U>(
  array: T[],
  mapper: (item: T, index: number, ctx: T[]) => U,
  abortSignal?: AbortSignal,
): Promise<U[]> =>
  Array.fromAsync(macroTasksGenerator(array, mapper, abortSignal)).catch((error) => {
    console.log('generator error', error);
    return [];
  });
