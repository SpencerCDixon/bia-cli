import program from 'commander';
import { version } from '../version';

program
  .version(version());

program
  .command('init', 'Sets up a .bia config file')
  .command('habit', 'habit helpers')
  .command('goals', 'goal helpers');

program.parse(process.argv);
