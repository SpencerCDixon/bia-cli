import SubCommand from '../models/sub-command';

class Goals extends SubCommand {
  constructor() {
    super();
  }

  printUserHelp() {
    this.ui.write('Goal related help');
  }

  run() {
    this.ui.writeInfo('Goals sanity check...');
  }
}
export default Goals;
