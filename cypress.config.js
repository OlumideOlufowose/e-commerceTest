
const installLogsPrinter = require('cypress-log-to-output').install;

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      installLogsPrinter(on, {
        outputRoot: config.projectRoot + '/logs/',
        outputTarget: {
          'out.log': 'log',
          'out.err': 'err',
        },
      });
    },
  },
};


module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};

