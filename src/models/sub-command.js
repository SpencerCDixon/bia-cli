import ProjectSettings from './project-settings';
import Api from './api';
import UI from './ui';

class SubCommand {
  constructor(program, options = {}) {
    this.program    = program;
    this.rawOptions = options;
    this.settings   = options.settings || new ProjectSettings();
    this.ui         = options.ui || new UI();
    this.api        = new Api(this.ui);

    this.environment = {
      ui: this.ui,
      settings: this.settings
    };
  }

  run() {
    throw new Error('Subcommands must implement a run()');
  }

  availableOptions() {
    throw new Error('Subcommands must implement an availableOptions()');
  }
}

export default SubCommand;
