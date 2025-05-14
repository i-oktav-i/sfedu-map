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

export const createMacroTask = <T>(callback: () => T) => {
  const { promise, resolve } = Promise.withResolvers<T>();

  setTimeout(() => resolve(callback()), 0);

  return promise;
};

export const lazyMap = <T, U>(
  array: T[],
  mapper: (item: T, index: number) => U,
  abortSignal?: AbortSignal,
): Promise<U[]> => {
  const generator = function* () {
    for (let index = 0; index < array.length; index++) {
      const item = array[index];

      if (abortSignal?.aborted) throw new Error('Aborted');

      yield createMacroTask(() => {
        return mapper(item, index);
      });
    }
  };

  return Array.fromAsync(generator()).catch(() => []);
};
