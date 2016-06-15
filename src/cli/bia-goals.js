import commander from 'commander';
import Goals from '../sub-commands/goals';

const sub = new Goals();

commander
  .action(() => {
    sub.run();
  })
  .parse(process.argv);
