import commander from 'commander';
import Init from '../sub-commands/init';

const sub = new Init();

commander.on('--help', () => {
  sub.printUserHelp();
});

sub.run();
