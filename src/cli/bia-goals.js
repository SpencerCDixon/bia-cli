import commander from 'commander';
import Goals from '../sub-commands/goals';

const sub = new Goals();

commander
  .option('-c, --complete', 'completed goals')
  .action((opts) => {
    const complete = commander.complete;
    sub.run(complete);
  })
  .parse(process.argv);
