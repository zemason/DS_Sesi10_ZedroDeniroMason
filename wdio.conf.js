require("dotenv/config");

exports.config = {
  runner: "local",
  specs: ["./features/**/*.feature"],

  maxInstances: 10,
  capabilities: [
    {
      browserName: "chrome",
    },
  ],

  logLevel: "info",
  bail: 0,
  baseUrl: "http://www.saucedemo.com",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["devtools"],
  framework: "cucumber",
  reporters: [["allure", { outputDir: "allure-results" }]],
  cucumberOpts: {
    // <string[]> (file/dir) require files before executing features
    require: ["./features/step-definitions/steps.js"],
    // <boolean> show full backtrace for errors
    backtrace: false,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    requireModule: [],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <string[]> Only execute the scenarios with name matching the expression (repeatable).
    name: [],
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <boolean> fail if there are any undefined or pending steps
    strict: false,
    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: "",
    // <number> timeout for step definitions
    timeout: 60000,
    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: false,
  },
};
