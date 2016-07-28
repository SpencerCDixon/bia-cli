import commander from 'commander';
import Weight from '../sub-commands/weight';

const sub = new Weight();

commander
  .arguments('<cmd> [amount]')
  .action((cmd, amount) => {
    sub.run(cmd, amount);
  })
  .parse(process.argv);
