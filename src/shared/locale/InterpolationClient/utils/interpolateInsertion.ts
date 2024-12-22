import _escapeRegExp from 'lodash/escapeRegExp';
import _get from 'lodash/get';
import { AnyResource } from '../types';

const getInsertionRegexp = (
  insertionPrefix: string,
  insertionPostfix: string,
  valuePrefix: string,
  conditionPrefix: string,
) =>
  new RegExp(
    `${_escapeRegExp(insertionPrefix)}\\s*(?<key>([\\w.](?!(${_escapeRegExp(valuePrefix)}|${_escapeRegExp(conditionPrefix)})))+)\\s*${_escapeRegExp(insertionPostfix)}`,
    'g',
  );

export const interpolateInsertions = (
  template: string,
  insertionPrefix: string,
  insertionPostfix: string,
  valuePrefix: string,
  conditionPrefix: string,
  resource: AnyResource,
) => {
  const insertionRegexp = getInsertionRegexp(
    insertionPrefix,
    insertionPostfix,
    valuePrefix,
    conditionPrefix,
  );

  return template.replace(insertionRegexp, (...match) => {
    console.log('match', match);
    const { key } = match.at(-1) as { key: string };

    return _get(resource, key) || '';
  });
};
