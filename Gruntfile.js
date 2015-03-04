module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({
        buster: {
            test: {
                config: 'test/buster.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-buster');
    grunt.registerTask('test', ['buster']);
    grunt.registerTask('default', 'test');
};
