var config = module.exports;

config.browser = {
    rootPath: '../',

    environment: 'browser',

    sources: [
        'lib/**/*.js'
    ],

    tests: [
        'test/test-*.js'
    ],

    extensions: [
        require('buster-istanbul')
    ],

    "buster-istanbul": {
        outputDirectory: "coverage",
        format: "lcov"
    }
};
