import prompt from 'prompt';
import figlet from 'figlet';

import SubCommand from '../models/sub-command';

import initPrompt from '../prompts/initPrompt';
import { setupPrompt } from '../prompts/setup';
import { success } from '../util/text-helper';

class Init extends SubCommand {
  constructor() {
    super();
    setupPrompt('initialization', prompt);
  }

  printUserHelp() {
    this.ui.write(
      'inititialization command to create a ~/.bia file for project settings'
    );
  }

  run() {
    this.ui.write(this.cliLogo());

    prompt.get(initPrompt, (err, result) => {
      this.ui.writeInfo('Saving your settings...');
      this.settings.setAllSettings(result);
      this.ui.writeCreate('.bia with configuration saved in home directory.');
    });
  }

  cliLogo() {
    return success(
      figlet.textSync('Bia CLI', {
        font: 'small',
        horizontalLayout: 'default',
        verticalLayout: 'default'
      })
    );
  }
}

export default Init;
