import chalk from 'chalk';
import { depascalize, pascalize, camelize } from 'humps';
import moment from 'moment';

export const success = (text) => {
  return chalk.green(text);
};

export const danger = (text) => {
  return chalk.red(text);
};

export const warning = (text) => {
  return chalk.yellow(text);
};

export const normalizeCasing = (string, casing) => {
  const types = ['default', 'snake', 'pascal', 'camel'];

  if (types.indexOf(casing) === -1) {
    throw new Error(
      `Casing must be one of: ${types.join(', ')} types`
    );
  }

  if (casing === 'snake') {
    return depascalize(pascalize(string));
  } else if (casing === 'pascal') {
    return pascalize(string);
  } else if (casing === 'camel') {
    return camelize(string);
  } else if (casing === 'default') {
    return string;
  }
};

export function toDate(timestamp) {
  return moment(timestamp).format('lll');
}
