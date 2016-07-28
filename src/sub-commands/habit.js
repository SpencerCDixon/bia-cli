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
    this.api.fetchWeights()
      .then(weights => {
        this.ui.writeLine(`${weight.amount}`);
      })
  }
}

export default Habit;
