import path from 'path';
import { copySync } from 'fs-extra';
import jf from 'jsonfile';
import { fileExists } from '../util/fs';

export default class ProjectSettings {
  constructor() {
    this.loadSettings();
  }

  loadSettings() {
    if (this.settingsExist()) {
      this.settings = jf.readFileSync(this.settingsPath());
    } else {
      this.buildFromTemplate();
      this.settings = jf.readFileSync(this.settingsPath());
    }
  }

  templatePath() {
    return path.join('src', 'templates', '.bia');
  }

  buildFromTemplate() {
    copySync(this.templatePath(), this.settingsPath());
  }

  settingsPath() {
    return path.join(
      process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'],
      '.bia'
    );
  }

  settingsExist() {
    return fileExists(this.settingsPath());
  }

  getSetting(key) {
    return this.settings[key];
  }

  getAll() {
    return this.settings;
  }

  setSetting(key, val) {
    this.settings[key] = val;
    this.save();
  }

  setAllSettings(json) {
    this.settings = json;
    this.save();
  }

  save() {
    jf.writeFileSync(this.settingsPath(), this.settings, {spaces: 2});
  }
}
