export type Prettify<T> = {
  [P in keyof T]: T[P];
} & {};

export type WithOptionalKeys<TType, OptionalKeys extends keyof TType> = Omit<TType, OptionalKeys> &
  Partial<Pick<TType, OptionalKeys>>;
