import program from 'commander';
import { version } from '../version';

program
  .version(version());

program
  .command('goals', 'goal helpers')
  .command('init', 'Sets up a .bia config file');

program.parse(process.argv);
