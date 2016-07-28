import SubCommand from '../models/sub-command';
import ProjectSettings from '../models/project-settings';
import chalk from 'chalk';

class Goals extends SubCommand {
  constructor() {
    super();
  }

  printUserHelp() {
    this.ui.write('Goal related help');
  }

  run(completed) {
    this.api.fetchGoals().then(goals => {
      let finalGoals;

      if (completed) {
        finalGoals = goals.filter(goal => goal.complete);
      } else {
        finalGoals = goals;
      }

      finalGoals.forEach(goal => {
        const { complete, name, _id } = goal;

        if (complete) {
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
