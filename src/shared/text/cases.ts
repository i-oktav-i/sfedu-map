export const toLowerCase = <T extends string>(str: T): Lowercase<T> =>
  str.toLowerCase() as Lowercase<T>;

export const toUpperCase = <T extends string>(str: T): Uppercase<T> =>
  str.toUpperCase() as Uppercase<T>;
