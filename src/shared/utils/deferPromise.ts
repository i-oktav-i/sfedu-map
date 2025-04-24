export const deferPromise = <T>(promise: Promise<T>, timeout: number) => {
  const { promise: timeoutPromise, resolve } = Promise.withResolvers();

  setTimeout(resolve, timeout);

  return Promise.all([promise, timeoutPromise]).then(([result]) => result);
};
