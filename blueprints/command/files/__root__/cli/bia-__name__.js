import commander from 'commander';
import <%= pascalEntityName %> from '../sub-commands/<%= dashesEntityName %>';

const sub = new <%= pascalEntityName %>();

commander
  .action((opts) => {
    console.log('Running from inside commander');
    sub.run();
  })
  .parse(process.argv);
