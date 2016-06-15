import chalk from 'chalk';

const schema = {
  properties: {
    username: {
      description: chalk.white('Basic auth username?'),
      type: 'string',
      required: true
    },
    password: {
      description: chalk.white('Basic auth password?'),
      type: 'string',
      required: true,
      hidden: true,
      replace: '*'
    }
  }
};

export default schema;
