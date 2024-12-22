import { ForbiddenCharsInNames, Trim } from './helpers';

export type InterpolatedConditionsNames<
  T extends string,
  Prefix extends string,
  Postfix extends string,
  Delim extends string,
  Quot extends string = '"',
> = T extends `${string}${Prefix}${infer RawName}${Quot}${infer IfTrue}${Quot}${infer BeforeDelim}${Delim}${infer BeforeFalse}${Quot}${infer IfFalse}${Quot}${infer BeforePostfix}${Postfix}${infer Rest}`
  ? [Trim<BeforeDelim>, Trim<BeforeFalse>, Trim<BeforePostfix>] extends ['', '', '']
    ? Trim<RawName> extends infer Name
      ? Name extends `${string}${ForbiddenCharsInNames}${string}` | ''
        ? InterpolatedConditionsNames<
            `${RawName}${Quot}${IfTrue}${Quot}${BeforeDelim}${Delim}${BeforeFalse}${Quot}${IfFalse}${Quot}${BeforePostfix}${Postfix}${Rest}`,
            Prefix,
            Postfix,
            Delim,
            Quot
          >
        : Name | InterpolatedConditionsNames<Rest, Prefix, Postfix, Delim, Quot>
      : never
    : never
  : never;

export type ReducedResourceToConditionNames<
  ReducedResource extends Record<string, string>,
  Prefix extends string,
  Postfix extends string,
  Delim extends string,
  Quot extends string = '"',
> = {
  [Key in keyof ReducedResource]: InterpolatedConditionsNames<
    ReducedResource[Key],
    Prefix,
    Postfix,
    Delim,
    Quot
  >;
};
