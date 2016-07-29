import SubCommand from '../models/sub-command';
import chalk from 'chalk';
import { toDate } from '../util/text-helper';

// TODO: how could I approach this functionally?
function idealWeight(amount) {
  return amount > 150 ? chalk.red(amount) : chalk.green(amount);
}


class Weight extends SubCommand {
  constructor() {
    super();
  }

  printUserHelp() {
    this.ui.write(
      'Display past weights and create new entries'
    );
  }

  run(cmd, amount) {
    if (cmd === 'list') {
      this.api.fetchWeights().then(weights => {
        weights.forEach(el => this.displayWeight(el));
      })
    } else {
      this.api.createWeight(amount)
        .then(() => {
          this.ui.writeInfo('Successfully created weight entry')
        })
    }
  }

  displayWeight({amount, createdAt}) {
    this.ui.writeLine(`${toDate(createdAt)}: ${idealWeight(amount)}`);
  }
}

export default Weight;
