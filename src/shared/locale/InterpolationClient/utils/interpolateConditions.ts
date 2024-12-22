import _escapeRegExp from 'lodash/escapeRegExp';

const getConditionRegexp = (
  prefix: string,
  postfix: string,
  delim: string,
  quot: string,
  conditionsKeys: string[],
) =>
  new RegExp(
    `${_escapeRegExp(prefix)}\\s*(?<negate>!)?(?<key>(${conditionsKeys.join('|')}))\\s*${quot}(?<ifTrue>[^${quot}]*)${quot}\\s*${delim}\\s*${quot}(?<ifFalse>[^${quot}]*)${quot}\\s*${_escapeRegExp(postfix)}`,
    'g',
  );

export const interpolateConditions = (
  template: string,
  prefix: string,
  postfix: string,
  delim: string,
  quot: string,
  conditions: Record<string, boolean>,
) => {
  const conditionsKeys = Object.keys(conditions);
  const conditionsRegexp = getConditionRegexp(prefix, postfix, delim, quot, conditionsKeys);
  return template.replace(conditionsRegexp, (...match) => {
    const { key, negate, ifTrue, ifFalse } = match.at(-1) as {
      key: string;
      negate: string;
      ifTrue: string;
      ifFalse: string;
    };

    const conditionValue = negate ? !conditions[key] : conditions[key];

    return conditionValue ? ifTrue : ifFalse;
  });
};
