const fs = require('fs');
const jf = require('jsonfile');
const path = require('path');

module.exports = {
  description() {
    return 'Generates a new command'
  },

  afterInstall(options) {
    this.addToPackage(options.entity.name);
    this.addCommandToIndex(options.entity.name);
  },

  addToPackage(name) {
    this.ui.writeInfo('Adding the executable to package.json');
    const packagePath = path.resolve('package.json');
    const json = jf.readFileSync(packagePath);

    json.bin[`bia-${name}`] = `bin/bia-${name}.js`;
    jf.writeFileSync(packagePath, json, {spaces: 2});
    this.ui.writeCreate('Successfully wrote new executable to package.json');
  },

  addCommandToIndex(name) {
    const indexPath = path.join('src', 'cli', 'index.js');

    this.ui.writeCreate('Adding command statement to commander');

    const templateString = `  .command('${name}', 'TODO')`;
    const content = fs.readFileSync(indexPath).toString().split('\n');
    const importIndex = content.indexOf('  .command(\'init\', \'Sets up a .bia config file\')');
    const addIndex = importIndex + 1;

    content.splice(addIndex, 0, templateString);
    fs.writeFileSync(indexPath, content.join('\n'), 'utf8');

    this.ui.writeCreate('Successfully added command statement');
  }
};
