import Api from '../models/api';
import SubCommand from '../models/sub-command';
import ProjectSettings from '../models/project-settings';
import chalk from 'chalk';

class Goals extends SubCommand {
  constructor() {
    super();
    this.api = new Api(this.ui);
  }

  printUserHelp() {
    this.ui.write('Goal related help');
  }

  run() {
    this.api.fetchGoals().then(goals => {
      goals.forEach(goal => {
        const { completed, name, _id } = goal;

        if (completed) {
          this.completedGoal(name, _id);
        } else {
          this.unfinishedGoal(name, _id);
        }
      });
    });
  }

  completedGoal(goal, id) {
    this.ui.writeLine(` - [x] ${chalk.bgRed(goal)} (${id})`);
  }

  unfinishedGoal(goal, id) {
    this.ui.writeLine(` - [] ${goal} (${id})`);
  }
}
export default Goals;
