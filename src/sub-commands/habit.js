import SubCommand from '../models/sub-command';

class Habit extends SubCommand {
  constructor() {
    super();
  }

  printUserHelp() {
    this.ui.write(
      'TODO'
    );
  }

  run() {
    console.log('Running from inside sub command!');
  }
}

export default Habit;
