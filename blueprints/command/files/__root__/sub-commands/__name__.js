import SubCommand from '../models/sub-command';

class <%= pascalEntityName %> extends SubCommand {
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

export default <%= pascalEntityName %>;
