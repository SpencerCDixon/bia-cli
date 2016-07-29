import commander from 'commander';
import Habit from '../sub-commands/habit';

const sub = new Habit();

commander
  .arguments('<cmd> [desc]')
  .action((cmd, desc) => {
    sub.run(cmd, desc);
  })
  .parse(process.argv);
