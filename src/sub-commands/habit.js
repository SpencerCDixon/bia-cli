import SubCommand from '../models/sub-command';

class Habit extends SubCommand {
  constructor() {
    super();
  }

  printUserHelp() {
    this.ui.write(
      'Display and create habits'
    );
  }

  run(cmd, name) {
    if (cmd === 'list') {
      this.api.fetchHabits().then(habits => {
        this.ui.writeEmpty();
        this.ui.writeLine('Habits:');
        habits.forEach(el => this.displayHabit(el));
      })
    } else {
      this.api.createHabit({name})
        .then(() => {
          this.ui.writeInfo('Successfully created habit')
        })
    }
  }

  displayHabit(habit) {
    this.ui.writeLine(`  * ${habit.name}`);
  }
}

export default Habit;
