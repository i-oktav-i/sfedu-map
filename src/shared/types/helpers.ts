export type Prettify<T> = {
  [P in keyof T]: T[P];
} & {};

export type WithOptionalKeys<TType, OptionalKeys extends keyof TType> = Omit<TType, OptionalKeys> &
  Partial<Pick<TType, OptionalKeys>>;

export type Brand<T, BrandSymbol extends symbol> = T & { [Key in BrandSymbol]: never };
export type BrandString<BrandSymbol extends symbol> = Brand<string, BrandSymbol>;
export type BrandNumber<BrandSymbol extends symbol> = Brand<number, BrandSymbol>;

export type StrictOmit<T, K extends keyof T> = Omit<T, K>;
