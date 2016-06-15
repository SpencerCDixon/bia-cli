import commander from 'commander';
import Habit from '../sub-commands/habit';

const sub = new Habit();

commander
  .action((opts) => {
    console.log('Running from inside commander');
    sub.run();
  })
  .parse(process.argv);
