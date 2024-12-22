import _get from 'lodash/get';

import {
  AnyResource,
  InterpolateInsertionsToReducesResource,
  InterpolationMethod,
  ReduceKeys,
  ReducedResourceToConditionNames,
  ReducedResourceToTagsNames,
  ReducedResourceToValueNames,
  ValidateResource,
} from './types';
import { interpolateConditions, interpolateValues } from './utils';
import { interpolateInsertions } from './utils/interpolateInsertion';

type GetParamsValue<ParamKey extends keyof InterpoLationClientDefaultParams> =
  ParamKey extends infer Key extends keyof InterpoLationClientParams
    ? InterpoLationClientParams[Key]
    : InterpoLationClientDefaultParams[ParamKey];

type InterpoLationClientDefaultParams = {
  valuesPrefix: '{{';
  valuesPostfix: '}}';
  conditionsPrefix: '{{?';
  conditionsPostfix: '}}';
  conditionsDelim: '::';
  conditionsQuot: '"';
  insertionPrefix: '{{$';
  insertionPostfix: '}}';
};

interface InterpoLationClientParams {}

type CheckDefault<
  Key extends keyof InterpoLationClientDefaultParams,
  ProvidedValue extends string,
> = ProvidedValue extends ''
  ? { [x in Key]: GetParamsValue<Key> }
  : string extends ProvidedValue
    ? { [x in Key]: GetParamsValue<Key> }
    : [InterpoLationClientDefaultParams[Key], ProvidedValue] extends [
          ProvidedValue,
          InterpoLationClientDefaultParams[Key],
        ]
      ? { [x in Key]?: ProvidedValue }
      : { [x in Key]: ProvidedValue };

export class InterpolationClient<
  Resource extends AnyResource,
  const ValuesPrefix extends string = GetParamsValue<'valuesPrefix'>,
  const ValuesPostfix extends string = GetParamsValue<'valuesPostfix'>,
  const ConditionsPrefix extends string = GetParamsValue<'conditionsPrefix'>,
  const ConditionsPostfix extends string = GetParamsValue<'conditionsPostfix'>,
  const ConditionsDelim extends string = GetParamsValue<'conditionsDelim'>,
  const ConditionsQuot extends string = GetParamsValue<'conditionsQuot'>,
  const InsertionPrefix extends string = GetParamsValue<'insertionPrefix'>,
  const InsertionPostfix extends string = GetParamsValue<'insertionPostfix'>,
  AllowAnyStrings extends boolean = false,
  ReducedResource extends Record<string, string> = ReduceKeys<Resource>,
  ReducedResourceWithInsertions extends Record<
    string,
    string
  > = InterpolateInsertionsToReducesResource<ReducedResource, InsertionPrefix, InsertionPostfix>,
  ValueNames extends Record<
    keyof ReducedResourceWithInsertions,
    string
  > = ReducedResourceToValueNames<ReducedResourceWithInsertions, ValuesPrefix, ValuesPostfix>,
  ConditionNames extends Record<
    keyof ReducedResourceWithInsertions,
    string
  > = ReducedResourceToConditionNames<
    ReducedResourceWithInsertions,
    ConditionsPrefix,
    ConditionsPostfix,
    ConditionsDelim,
    ConditionsQuot
  >,
  TagNames extends Record<
    keyof ReducedResourceWithInsertions,
    string
  > = ReducedResourceToTagsNames<ReducedResourceWithInsertions>,
> {
  private resource: Resource;
  private valuesPrefix: ValuesPrefix;
  private valuesPostfix: ValuesPostfix;
  private conditionsPrefix: ConditionsPrefix;
  private conditionsPostfix: ConditionsPostfix;
  private conditionsDelim: ConditionsDelim;
  private conditionsQuot: ConditionsQuot;
  private insertionPrefix: InsertionPrefix;
  private insertionPostfix: InsertionPostfix;

  constructor({
    resource,
    valuesPrefix = '{{',
    valuesPostfix = '}}',
    conditionsPrefix = '{{?',
    conditionsPostfix = '}}',
    conditionsDelim = '::',
    conditionsQuot = '"',
    insertionPrefix = '{{$',
    insertionPostfix = '}}',
  }: {
    resource: ValidateResource<Resource, AllowAnyStrings>;
    allowAnyString?: AllowAnyStrings;
  } & CheckDefault<'valuesPrefix', ValuesPrefix> &
    CheckDefault<'valuesPostfix', ValuesPostfix> &
    CheckDefault<'conditionsPrefix', ConditionsPrefix> &
    CheckDefault<'conditionsPostfix', ConditionsPostfix> &
    CheckDefault<'conditionsDelim', ConditionsDelim> &
    CheckDefault<'conditionsQuot', ConditionsQuot> &
    CheckDefault<'insertionPrefix', InsertionPrefix> &
    CheckDefault<'insertionPostfix', InsertionPostfix>) {
    this.resource = resource as Resource;
    this.valuesPrefix = valuesPrefix as ValuesPrefix;
    this.valuesPostfix = valuesPostfix as ValuesPostfix;
    this.conditionsPrefix = conditionsPrefix as ConditionsPrefix;
    this.conditionsPostfix = conditionsPostfix as ConditionsPostfix;
    this.conditionsDelim = conditionsDelim as ConditionsDelim;
    this.conditionsQuot = conditionsQuot as ConditionsQuot;
    this.insertionPrefix = insertionPrefix as InsertionPrefix;
    this.insertionPostfix = insertionPostfix as InsertionPostfix;
  }
  interpolate = ((key, params) => {
    let template = _get(this.resource, key) as string;

    if (!template) return null;

    template = interpolateInsertions(
      template,
      this.insertionPrefix,
      this.insertionPostfix,
      this.valuesPrefix,
      this.conditionsPrefix,
      this.resource,
    );

    const values = params?.values || {};

    if (!values) return template;

    const templateWithConditions = interpolateConditions(
      template,
      this.conditionsPrefix,
      this.conditionsPostfix,
      this.conditionsDelim,
      this.conditionsQuot,
      values,
    );

    const templateWithValues = interpolateValues(
      templateWithConditions,
      this.valuesPrefix,
      this.valuesPostfix,
      values,
    );

    return templateWithValues;
  }) as InterpolationMethod<
    ReducedResourceWithInsertions,
    ValueNames,
    ConditionNames,
    TagNames,
    (value: string) => { value: string }
  >;
}
