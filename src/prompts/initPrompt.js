import chalk from 'chalk';

const schema = {
  properties: {
    sourceBase: {
      description: chalk.white('Basic auth username?'),
      type: 'string',
      required: true
    },
    testBase: {
      description: chalk.white('Basic auth password?'),
      type: 'string',
      required: true,
      hidden: true,
      replace: '*'
    }
  }
};

export default schema;
