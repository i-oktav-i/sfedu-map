import _escapeRegExp from 'lodash/escapeRegExp';

const getValuesRegexp = (prefix: string, postfix: string, valuesKeys: string[]) =>
  new RegExp(
    `${_escapeRegExp(prefix)}\\s*(?<key>(${valuesKeys.join('|')}))\\s*${_escapeRegExp(postfix)}`,
    'g',
  );

export const interpolateValues = (
  template: string,
  prefix: string,
  postfix: string,
  values: Record<string, string | number>,
) => {
  const valuesKeys = Object.keys(values);
  const valuesRegexp = getValuesRegexp(prefix, postfix, valuesKeys);

  return template.replace(valuesRegexp, (...match) => {
    const { key } = match.at(-1) as { key: string };

    return `${values[key]}`;
  });
};
