'use strict';
exports.config = {
    directConnect: true,
//Running chrome
    Capabilities: {
        browserName: 'chrome'
    },
//point spec to feature file , my feature file was under feature folder
    specs: ['./test_features/*.feature'],
//set framework options
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
//just maximizing window before testing
    onPrepare: function () {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
    },
//Create html report
    onComplete: () => {
        var reporter = require('cucumber-html-reporter');
        var options = {
            theme: 'bootstrap',
            jsonFile: './results.json',
            // output: './report/results.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            /* metadata: {
                 "App Version":"0.3.2",
                 "Test Environment": "STAGING",
                 "Browser": "Chrome  54.0.2840.98",
                 "Platform": "Windows 10",
                 "Parallel": "Scenarios",
                 "Executed": "Remote"
             },*/
            output: './report/cucumber_report.html',
        };
        reporter.generate(options);
    },
//set cucumber options
    cucumberOpts: {
        require: ['./test_features/*.js', './test_commons/chaiAssertions.js', './test_commons/hooks.js', './test_step_definitions','./test_pages'],
        strict: true,
        //  format: [],    //don't put 'Pretty' as it is depreciated
        'dry-run': false,
        compiler: [],
        format: 'json:results.json',    //make sure you are not using multi-capabilities
    },
    SELENIUM_PROMISE_MANAGER: false,
};