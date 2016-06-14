import program from 'commander';
import { version } from '../version';

program
  .version(version());

program
  .command('goals', 'goal helpers');

program.parse(process.argv);
