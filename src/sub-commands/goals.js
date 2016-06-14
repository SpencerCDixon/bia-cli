import Api from '../models/api';
import SubCommand from '../models/sub-command';

class Goals extends SubCommand {
  constructor() {
    super();
    this.api = new Api(this.ui);
  }

  printUserHelp() {
    this.ui.write('Goal related help');
  }

  run() {
    this.api.fetchGoals();
  }
}
export default Goals;
