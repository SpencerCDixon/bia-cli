import commander from 'commander';
import Goals from '../sub-commands/goals';
const goals = new Goals();

commander
  .arguments('[command]')
  .action((command) => {
    console.log('inside goals!');
    console.log('Command: ', command);
    goals.run();
  })
  .parse(process.argv);